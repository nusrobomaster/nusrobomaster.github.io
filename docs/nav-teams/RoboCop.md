# Team RoboCop

## Introduction

### Nguyen Tuan Dung

I am currently a year 1 Mechanical Engineering student who is also second majored in iDP. I have had 4 years of experience with robotics in secondary and high school. One of the competitions I participated in was VEX Robotics Competition. Within the four years, I have won 4 tournament champions and 3 excellent award for high school category in Singapore VEX Robotics Competition. I also moved on to represent Singapore in the World VEX Robotics Championship twice and the highest award I achieved was Division Finalist. For robotics, my interest focuses on mechanical design and building of the robot. I can also become the pilot or provide coaching for pilot during match.

### Nicholas

A year 4 EE student interested in the field of robotics. Worked with Temasek Laboratories to design, develop and test an IR LED module. In 2014, I developed a system to tackle the issue of myopia. Components used were Arduino Uno, Ultrasonic sensor, buzzer, LED, Relay. I have basic electronic circuits and digital design knowledge. Last semester I took Feedback Control System module and am currently taking Industrial Control System module.

### Boby Halim

I am a year 1 Mechanical Engineering student. Although I do not have prior background in robotics, I have taken part in research project before when I was in JC. The project was about Demonstration Kit for Battery-less RF Energy Harvesting where I presented it at Singapore Science Engineering Fair (SSEF). In robotics, I would like to learn more about the mechanics and the process of building a robot, including the various fabrication methods. I am also interested in the design phase of a robot through the use of CAD such as Solidworks.

### Isaiah Koh

I am currently a year 1 Computer Science and Business Administration DDP student. In my free time, I have undertaken several personal coding projects including a basic Android app and a Sudoku Solver that solves through a combination of logic and brute force methods.

### Proposed Manpower Arrangement
No| Role          |  Description                        | Assigned to       | 
--|---------------|---                                  |---                |
 1|  Mechanical   |  Chassis; Suspension                |  Dung (Leader)   |
 2|  Mechanical   |  Gun; Gimbals system                | Open Position|
 3|  Electrical   |  Power management; Electric Drive; Fail-safe   |  Open Position |
 4|  Electronics  |  Sensor interface; Close-loop Control | Open Position          | 
 5|  Software     | Linux OS; Sensor drivers            | Isaiah     | 
 6|  Software     | Computer vision; Motion planning    | Open Position     | 
 7|  Operation    | Sponsorships; Chinese-English Translation | Open Position     |   
 8|  Operation    | Accounting; Publicity Materials     | Boby     |  
 9|  Pilot        | TX & RX system; Game-play strategy  |  Nicholas            |

 For interested people to join our team, please contact Telegram @xxxx 

## Timeline & Milestones

![Timeline](./assets/robocop-timeline.jpg)

## Robot Design Considerations

### Base

Firstly, we decided to have a square-shaped base with four mecanum wheel for our robot. The purpose of a metal square frame surrounding the robot is to ensure its sturdiness taken into account that collisions will happen in game. Mecanum wheels fit into this design since it can be mounted like normal wheel while providing the same style of movement as omni wheel.

> pic1, pic2

Next, we decided to install an independent suspension system to each of the wheel. This allows the robot to overcome obstacles better without bending the chassis and other connecting axles and joints. In detailed, we would employ a double wishbone suspension system which a draft of its can be seen in Pic 2. We will also have four motors with inbuilt encoder for each of the wheel. This will allow us to perform turning actions simply by coding the speed and rotation direction of each wheel and avoid the trouble of designing a steering system. 

Some other consideration is the mounting of Health bar, Armour Plates and Cortex to the base. The details of these will be decided when a more detailed design is developed.

### Turret (Intake + Turning + Cannon)

Our design for the intake and cannon resembles to that of a tennis ball machine. The intake and projectiles container will be a square box. (Pic 3) The intake will lead to a slanted downward tray system with the width of roughly 20mm so that projectiles move through the tray in single file.  Between the projectiles container leading to the tray will be two rollers with soft wing to assist the projectiles inside the tray. At the end of the tray is a spring stopper. (Pic 4) The stopper is pulled down when the turret shoot and released back when not shooting. The cannon will employ a double flywheel system consisting of two soft rolling wheel putting 16 mm horizontally apart from each other. 

A Gimbal stabilized turret will also be designed for the cannon to ensure its smooth movement horizontally and vertically.

Laser pointer will be attached below gun barrel while camera with vision sensor above (not directly attached to the barrel but above.)

### Miscellaneous Parts

#### Processor: Manifold 2-G (128GB) General
There are two versions of the Manifold 2. Since we will be doing image processing and applying vision algorithms to our vision sensors, and neural networks to implement machine learning algorithms which requires high computational intensity and the high amount of parallelism, we decided that the TX2 version would be a better choice.

There is another processor called the Intel NUC.  However, Intel NUC with Core i5 could be better in processing but its price is almost equal to TX2 where TX2 has 256 core GPU that is way powerful than core i5 cpu for Computer Vision applications.

#### Motors

* RoboMaster M3508 P19 Brushless DC Gear Motor
* RoboMaster C620 Brushless DC Motor Speed Controller 
* RoboMaster GM6020 Brushless DC Motor
* M2006 P36 Brushless DC Gear Motor

#### Battery: Zeee Lipo Battery Pack 5200mAh 50C 22.2V 6S RC Lipo Batteries with XT90 (XT60/EC5) Plug

Battery capacity must not exceed 200Wh as stated by the rules. We need 24V to power the motor at nominal voltage. Ideally an 8s battery would be able to provide the nominal voltage. However, we would need additional step down converter. Hence we decided to go for the 6s version which provides 22.2V. 

Operating a motor at a voltage below nominal generally has no detrimental effect on performance. In fact, running a motor at lower than nominal voltage (and, therefore, slower than nominal speed) can result in less brush and commutator wear (for brushed motors), lower current consumption, and longer motor life. (Collins, 2017)

Furthermore, the MCU can only support up to 6s LiPo battery.

#### Laser: 650nm 5mW Focusable Red Dot Laser Module Laser Generator Diode

#### IMU: VN-100 Rugged

We have decided to use the VN-100. As we do not require GPS on the inertial sense model. We are currently requesting the quote for the price. 

### Proposed Budget

...