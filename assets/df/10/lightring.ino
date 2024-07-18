#include "Rotary.h";

#define ROTARY_PIN1 D8
#define ROTARY_PIN2 D10

Rotary r = Rotary(ROTARY_PIN1, ROTARY_PIN2);

int show_value = 0;
int pins_C[] = {D1, D2, D3}; // pins for common cathode (-)
int pins_L[] = {D4, D5, D6}; // LED pins (+)

void setup() {
  pinMode(D1, OUTPUT);
  pinMode(D2, OUTPUT);
  pinMode(D3, OUTPUT);
  pinMode(D4, OUTPUT);
  pinMode(D5, OUTPUT);
  pinMode(D6, OUTPUT);
  Serial.begin(9600);
  delay(50);
  Serial.println("\n\nSimple Counter");

  r.setIncrement(1);
  r.setLowerBound(0);
  r.setUpperBound(40);
  r.setChangedHandler(rotate);
}

void loop() {
  r.loop();
}

void rotate(Rotary& r) {
  show_value = constrain(map(r.getPosition(), 0, 40, -1, 8), -1, 8);
  Serial.println("Show Value: " + String(show_value));

  // Turn off all LEDs
  for (int i = 0; i < 3; i++) {
    digitalWrite(pins_C[i], HIGH);
    digitalWrite(pins_L[i], LOW);
  }

  // Light up LEDs based on show_value
  if (show_value >= 0) lightUpLED(show_value);
}

void lightUpLED(int value) {
  // Determine the anode (L) and cathode (C) pins for each value
  int anode = pins_L[value / 3];
  int cathode = pins_C[value % 3];

  digitalWrite(anode, HIGH);
  digitalWrite(cathode, LOW);
}
