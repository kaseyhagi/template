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

This project was a sensor, which would keep an Arduino-controlled electric skateboard from exceeding dangerous speeds. The arduino microcontroller was paired with an intertial measuring unit (IMU), which measures the absolute orientation of the skateboard. When exceeding a certain speed skateboards tend to wobble , which can be very dangerous for the rider. 

This sensor measured the orientation of the board and the frequency at which the orientation changed and in turn decellerated the motor on the board when the dangerous speeds were reached. We also went into creating an on-board speedometer, which would have an LCD mounted on the nose of the board and would read off real-time speeds. This portion involved hall-effect sensors and programming the arduino for optimization. 
