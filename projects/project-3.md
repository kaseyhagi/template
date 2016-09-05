---
layout: project
type: project
image: images/arduino.png
title: Arduino Electric Skateboard Sensors
permalink: projects/arduino
date: 2015
labels:
  - Arduino
  - C++

summary: An Arduino project I worked on for EE296.
---

<img class="ui medium right floated rounded image" src="../images/arduino.png">

This project was an addition to an Arduino-controlled electric skateboard. The problem with electric skateboards is that it can reach dangerous speeds and skateboard riders usually aren't too well protected. Skateboards aren't designed for high-speed travel. At dangerous speeds, the skateboard gets wobbly, making it difficult for the rider to keep his or her balance. Since this skateboard was controlled by an Arduino capable of acceleration and deceleration, we made it possible for the Arduino to decelerate when the speed became too dangerous. We implemented this in two ways: an on-board LCD speedometer, and an IMU sensor, which measured the wobbliness of the board. 

The speedometer was implemented with a magnet fixed to one of the skateboards wheels, and a hall effect sensor fixed to the board near he wheel. The Arduino was programmed to calculate the approximate velocity based on the period of the wheel's rotation and the circumference of the wheel. The second implementation used an inertial measuring unit (IMU) to measure the absolute orientation of the board in three exes. This sensor measured the orientation of the board and the frequency at which the orientation changed and in turn decellerated the motor on the board when the dangerous speeds were reached and the skateboard started to wobble. 

This project was the first programming project I participated in, which showed me real-life applications. I was introduced to the Arduino microcontroller and the Arduino IDE. I learned a lot about program optimization, by trying to speed up run-time of the program.
