# Stark Industry

## Introduction

### Haotian
Final year Electrical Engineering student. Projects: Autonomous robot, target tracking. Skills: Control, Electrical system design, C++, Python. Interest: Computer Vision.

### Shuo
Final year Mechanical Engineering student. Projects: Autonomous vehicles at Micron. Skills: Robotics, Computer Vision, ROS, C++, Python

### Rachiket Arya
Final year Mechanical Engineering student. Skills: ROS, C, Python, MATLAB, CAD (Solidworks, Solidedge, Fusion 360, SpaceClaim). Projects: SEDS Rover Project Manager, Printed Propulsion.

### Sambhavi
Final year Electrical Engineering student. Skills: C, Python, LTspice, Verilog, Assembly(ARM), Electrical & Electronic subsystems. Projects: Automated Guided Vehicle, SEDS Rover Electrical Team Lead.  

### Zifei
Final year mechanical engineering student. Skills: C, Java, CAD, MatLab (basic). Internship experience: bearings, seals, turbine, fans, compressors



## Proposed Manpower Arrangement
No| Role          |  Description                        | Assigned to       |
--|---------------|---                                  |---                |
 1|  Mechanical   |  Sensors & Actuators Installation   |  Rachiket, Zifei  |
 2|  Mechanical   |  Gun; Gimbals system                |Zifei, Rachiket，
Sambhavi|
 3|  Electrical   |  Power management; Electric Drive; Fail-safe   |  Sambhavi, Haotian |
 4|  Electronics  |MCU, Sensor interface; Close-loop Control | Haotian, Sambhavi       |
 5|  Software     | Linux OS; drivers, ROS Integration  | Shuo, Sambhavi     |
 6|  Software     | Motion planning (sentry robot)  | Rachiket   |
 7|  Software   | Computer vision |  Sambhavi, Rachiket, Haotian|
 8|  Operation    | Chinese-English Translation   | Zifei, Haotian, Shuo    |
 9|  Operation   |Accounting; Publicity, Sponsorship Materials|Open Position|
 10|  Pilot        | TX & RX system; Game-play strategy  |  Rachiket       |

 For interested people to join our team, please contact whatsapp @81113025


## Timeline & Milestones

![Timeline](./assets/timeline.png)


## Key Aspects of Our Robot

### Electrical

1. The voltage of the motor needs to be temporarily boosted in extreme cases. A suitable boost converter needs to be designed or selected. Since it is a tradeoff between motor life and boost speed, the boost voltage, boost duration, rest duration needs to be carefully tested and chosen. e.g. a temperature sensor could be installed to monitor the motor temperature.

2. We would be having an efficient Heat dissipation system for preventing overheating, with the help of fans and heat sinks.

3. A special connection mechanism is needed to supply power to the camera and gun when the body of the vehicle is spinning, to prevent the wires from twisting and tangling.

### Electronic/Software

1. Shooting Assistant System:
   - Gun Stabilizer: The pointing of the gun will remain the same in both vertical and horizontal directions.
   - Ballistic Calculator: The gun needs to automatically adjust its shooting angle and speed according to the target location. Target distance needs to be obtained in real-time through an RGB-D camera or stereo camera etc.
   - Visual Assistance: Augmented Reality or Graphic aid will be provided to show the gun operator the expected trajectory of the projectile.

2. Driving Assistant System:
   - Simple to Operate: The drive-by-wire system and the keyboard-teleop we propose will be designed to be mission-friendly. The driving experience will be similar to that of the normal RC cars or video games such as World of Tanks.
   - One-click Motions: Besides standard driving motions such as driving forward, backward, left and right, we will also enable two other more complex motions, hull-spinning, and constant speed forward for the operators to use in combat with only one click. The hull-spinning mode will be useful when the robot is standing still. While the constant speed forward is designed for the operators to shoot accurately while moving, since acceleration and deceleration caused by unsmooth manual speed adjustments will affect the aiming and shooting greatly.

### Mechanical

1. Wheel System:
   - 4 Mecanum omnidirectional wheels that allow the robot to rotate, move sideways, back and forth freely.
   ![Mecanum](./assets/mecanum.png)

2. Gimbal System:
   - A gimbal system is needed to stabilize the camera and to provide smooth image transmission.
   - The gun should have 2 axis degrees of freedom of pitching and yawing. The turret rotation should be independent of the rotation of the main chassis and the yaw rotation should have a range of about -20 degrees to 20 degrees (from the horizontal plane).

3. Anti-collision:
   - The structure design of the standard robot should be rigid so that it can withstand any possible collision with other robots.
   - The camera lens should be protected with a casing that can withstand the impact of the bullets.


## General Design and Fabrication Methods

### Electrical

1. Power cables will be connected via standard connectors, such as XT60(for main branches) and DC Jack(for PC or Jetson TX2). A Power distribution board will be mounted on the robot to power various sensors and actuators, with suitable fuses at all major branches.

2. Signal wires will be connected via Molex connectors and Crimpers.

3. Soldering and heating electrical wires are expected. Equipment needed includes soldering iron, different AWG wires, heat shrink tube, Heat gun.

### Mechanical

1. Manufacturing of Chassis Parts:
  - Materials: Aluminum or stainless steel
  - Use sheet metal processing and CNC machining to manufacture the components and weld(for main chassis parts) or bolt(for adjustable parts) them together to achieve rigidity, uniformity and higher strength. Wielding methods of TIG and MIG can be considered to achieve the above qualities. Grind the surface to produce better surface finishing.
  - Apply surface treatment reduce corrosion, improve hardness and prevent wear.


## Proposed Budget

We have estimated a budget of about _S$ 9.7K_.
   ![Budget](./assets/budget.png)
