// sketch.js
const API_HOST = "http://193.167.5.181";

// Colors
const COLOR_BACKGROUND = "#00ACED";
const COLOR_RANGE = "#000000";
const COLOR_CENTER = "#00ACED";
const COLOR_DRAGGABLE = "#008BCE";
const COLOR_TEXT = "#008BCE";

// Global variables we will use in the sketch
let range;
let center;
let draggable;
let data; // incoming and outgoing data

const kris = (p) => {
  p.setup = () => {
    //p.createCanvas(p.windowWidth, p.windowHeight);
    p.createCanvas(600, 600);
    range = {
      r: getRangeRadius(p)
    };
  
    center = {
      x: p.width / 2,
      y: p.height / 2,
      r: getCenterRadius(p)
    };

    draggable = {
      x: p.width / 2,
      y: p.height / 2,
      r: getDraggableRadius(p),
      hit: {
        state: false,
        x: undefined,
        y: undefined
      }
    };

    data = {
      in: {
        distance: 0,
        interval: setInterval(() => getData(p), 100)
      }, 
      out: {
        pwm: 0,
        interval: setInterval(() => postData(p), 100)
      }
    };
  };

  p.draw = () => {
    drawRange(p);
    drawCenter(p);
    drawDraggable(p);
  };

  const drawRange = (p) => {
    p.background(COLOR_BACKGROUND); // Set background to a light grey
    
    // Draw visible area showing range
    p.fill(COLOR_RANGE);
    p.noStroke();
    p.circle(p.width / 2, p.height / 2, range.r * 2);  
  };

  const drawCenter = (p) => {
    p.fill(COLOR_CENTER);
    p.noStroke();
    p.circle(center.x, center.y, center.r * 2);

    // Draw a line connecting center with draggable
    p.stroke(COLOR_CENTER);
    p.strokeWeight(2);
    p.line(center.x, center.y, draggable.x, draggable.y);

    // Display incoming data as part of the center graphics
    p.fill(COLOR_CENTER);
    p.noStroke();
    p.textSize(center.r / 2);
    p.text(data.in.distance.toFixed(1), center.x + center.r, center.y + center.r);
  };

  const drawDraggable = (p) => {
    let distFromMouse = p.dist(draggable.x, draggable.y, p.mouseX, p.mouseY);

    if (p.mouseIsPressed && distFromMouse < draggable.r) {
      draggable.hit.state = true;
    } else if (!p.mouseIsPressed) {
      draggable.hit.state = false;
    }

    if (draggable.hit.state == true) { 
      // Let's register current mouseX and mouseY points as hit points
      if (draggable.hit.x == undefined) { // No need to check both, x and y
        draggable.hit.x = p.mouseX;
        draggable.hit.y = p.mouseY;
        return; // Since we did not have hit x and y values before, we exit here and wait for next cycle
      }

      // Now let's get the difference and add it to the position of the draggable
      let distX = p.mouseX - draggable.hit.x;
      let distY = p.mouseY - draggable.hit.y;
      draggable.x += distX;
      draggable.y += distY;

      // Now it is time to update the hot positions for the next loop
      draggable.hit.x = p.mouseX;
      draggable.hit.y = p.mouseY;
    } else {
      // Mouse is up so we clear the hit x and y values using undefined
      draggable.hit.x = undefined;
      draggable.hit.y = undefined;
    }

    // Draw draggable
    p.fill(COLOR_DRAGGABLE);
    p.noStroke();
    p.circle(draggable.x, draggable.y, draggable.r * 2);

    // Now, take the distance between draggable and center of screen
    let distFromCenter = p.dist(draggable.x, draggable.y, center.x, center.y);

    // Now we normalize the value
    let distFromCenterNorm = distFromCenter / range.r;

    // Now we need to flip the value as if the distance is low, the motor is fast and vice versa
    let pwmNorm = p.max(1 - distFromCenterNorm, 0);

    // And we get a PWM value for motor 
    let pwm = p.min(pwmNorm * 255, 255).toFixed();

    // Assign motor speed PWM to outgoing data
    data.out.pwm = pwm;

    // Draw text
    p.fill(COLOR_TEXT);
    p.textSize(draggable.r);
    p.text(pwm, draggable.x + draggable.r, draggable.y - draggable.r);
    p.textSize(draggable.r / 3);
    p.text(pwmNorm.toFixed(3), draggable.x + draggable.r, draggable.y - draggable.r + draggable.r / 3);
  };

  async function getData() {
    console.log("GET request");

    const response = await fetch(API_HOST + "/distance", {
      method: "GET"
    });
    const responseData = await response.json();
    console.log('GET Response:', responseData);

    data.in.distance = responseData.distance;
  }

  async function postData() {
    console.log("POST request");
    const postData = {
      pwm: data.out.pwm
    };

    const response = await fetch(API_HOST + "/update", {
      method: "POST",
      body: JSON.stringify({
        pwm: data.out.pwm
      })
    });
    const responseData = await response.json();
    console.log(responseData);
  }

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight); // Resize the canvas when the window is resized
    range.r = getRangeRadius(p);
    center.r = getCenterRadius(p);
    draggable.r = getDraggableRadius(p);
  };

  const getRangeRadius = (p) => {
    return (p.width > p.height) ? ((p.height / 2) - 20) : ((p.width / 2) - 20);
  };

  const getCenterRadius = (p) => {
    return (p.width > p.height) ? (p.height / 30) : (p.width / 30);
  };

  const getDraggableRadius = (p) => {
    return (p.width > p.height) ? (p.height / 40) : (p.width / 40);
  };
};

export default kris;
