// sketch.js
const sketch = (p) => {
    p.setup = () => {
        p.createCanvas(600, 400);
    };

    p.draw = () => {
        p.background(200);
        p.ellipse(p.mouseX, p.mouseY, 15, 15);
    };
};

export default sketch;