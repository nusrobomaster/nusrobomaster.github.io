# Team MECHABirdBox

## Introduction of Team members 

### Samantha Song (Leader)
I am a year 3 Biomedical Engineering student. I am in interested in robotics, AI and machine learning, and hope to  further my skills in these areas during my 6 months stay in Shenzhen. With knowledge that I learnt from my internship at a makerspace, I have experience in building robot cars, and can help in the fields of hardware/electronics and software.

### Tan Ning Xuan
I am a Year 4 Mechanical Engineering student, with an interest in controls and robotics. Over the years, I have built up my skills in programming and tinkering with various microcontrollers and embedded systems. During my student exchange at the University of California, Berkeley, I worked on a smart cycling helmet that featured real time image processing and multitasking. I have also worked on establishing communication between STM32 microcontroller and ROS as part of a autonomous golf buggy project. More recently, as part of the NUS Smart Shuttle autonomous vehicle trial, I developed a python script to pull data from APIs and perform simple data analysis to generate ridership insights. In terms of modelling software, I have had basic experience with CAD, Revit and ANSYS. I am confident these skills will be useful to the team in developing our robot.

### Kevyn Lim Zi Rong
I’m a year 4 BME student and i have had a keen interest in robots and robotic combat since childhood. I also really like thinking out of boxes and trying to make these ideas work in reality.


### Damien Chan 
I am a year 4 Industrial and Systems Engineering student. I do not have much experience with robotics but have some experience with programming and optimization. I hope to be able to use my skills to value add to build a strong robot.

## Proposed manpower arrangement

No| Role          |  Description                        | Assigned to       | 
--|---------------|---                                  |---                |
 1|  Operations   |  Idea generation, Robot Design      |  Everyone  |
 2|  Mechanical   |  CAD design of mechanical aspects                | Ning Xuan |
 3|  Operations   |  Procurement of electrical and mechanical components  |  Samantha, Kevyn |
 4|  Mechanical  |  Designing MCU, driver board and electronics layout | Samantha, Kevyn          | 
 5|  Mechanical     | Mecanum Wheel Robot (lower)          | Kevyn, Ning Xuan     | 
 6|  Mechanical     | Mecanum Wheel Robot (upper)   | Samantha, Damien    | 
 7|  Software    | Controls Programming | Damien    |   
 8|  Hardware/Software    | Prototype 1.0     | Everyone     |  
 9|  Mechanical   | Navigation system (Lidar) |  Kevyn, Damien            |
 10|  Mechanical   | PID motion control  |  Ning Xuan           |
 11|  Mechanical        | Targeting System  |  Samantha           |
 12|  Software        | Smart Controls System  |  Damien           |
 13|  Hardware/Software        | Prototype 2.0   |  Everyone            |
 14|  Mechanical        | Armor  |  Ning Xuan            |
 15|  Mechanical        | Blaster System  |  Samantha            |
 16|  Operations        | Media: Camera, video  |  Damien, Kevyn            |  

## Proposed timeline and milestones

...

## Key aspects of the robot to consider

### Mecanum wheels

* Consists of wheel rollers and damping rings.
* Expandable wheels -> May reduce hits while in motion and technically not illegal until they patch this next year. There is a maximum of 10cm allowed for in-game expansion, so the max legal increase in radius of each wheel is 5cm.

### Chassis

* Front, Rear, Left, Right Armor
* Impact detector: Transmit health of robot efficiently to controls system, direction of impact to the pilot UI.
* Intelligent sensing armour -> Infrared sensors near armour to detect when aiming beam lands on robot. Or gel pads to detect which part of the robot is being hit to move away accordingly
* Suspension system: to increase the stability of the robot especially during climbing, fly landing. Maneuvering robot should be as agile as possible.

### Gimbal

* Upper body of the robot will be mounted on the gimbal, such as the camera, blaster mechanism, high stability needed. If possible, 3-axis industrial grade gimbal will be used.

### Motors, encoders (for gimbal, wheel, blaster)

### Sensors

* IMU
* Lidar system: detect nearby robots (both ally and enemy) and location given in red/blue.
* Monitoring sensors: detect any malfunctioning parts.
* Ammo sensor: detect amount of ammunition available, when under a certain amount signal warning to pilot.
* Targeting system: Smart sensors to help robot target objectives, assist pilot in aiming. Estimated projectile trajectory motion to help compensate for long-distance shooting. 

### Ammo launching/loading system 

* Fire 17mm projectiles (maximum barrel speed: 45m/s)
* Ammo loading should not have jamming of projectiles
* Ammo should be fed to launching mechanism at a fast and steady rate.

### Media

* Camera (vision), GPU: should transmit a FPS view of the robot with clear resolution and minimal time lag from control system(pilot). Vision should be steady when robot moves across slopes/bumps, in-flight.
* Speaker (sound effects)

### Programming

* Targeting system, AI tracking systems
* STM32 main microcontroller
* Evasive Maneuvering Program (Spinning)

### Power

### Controls

* PID motion control
* Blaster targeting controls
* Intelligent Controller

### Referee system


### General design and fabrication methods
* Most parts should be bought online and machined to desired specifications. Prototype, lightweight materials can be 3D printed with Kevyn’s 3D printer, using ABS/PLA material. Samantha can buy cheap electronics and mechanical parts in Shenzhen as well if possible, as well as use laser cutting, lathing equipment etc.


## Proposed Budget
No | Component Name                        |  Unit Cost (USD) | Qty | Total |
---|---------------------------------------|---              |---  |---    |
 01|  RoboMaster Tag for UWB Locating System |  95             | 1   | 95   |
 02|  RoboMaster UWB Locating System |  667             | 1   | 667    |
 03|  RoboMaster Anchor for UWB Locating System    |  133             | 1   | 133    |
 04|  RoboMaster GM3510 Brushless DC Motor  |  47             | 1   | 47    |
 05|  RoboMaster Red Dot Laser  |  13            | 1   | 13   |
 06|  RoboMaster Mecanum Wheel (right)  |  44             | 2   | 88   |
 07|  RoboMaster Mecanum Wheel (left)              |  44              | 2   | 88     |
 08|  RoboMaster 2312 ESC-420S     |  5             | 4   | 20    |
 09|  RoboMaster TB47 Battery Charger 100W (without AC cable) |  19            | 2   | 38   |
 10|  RoboMaster Robot Remote Controller Receiver  |  16             | 1   | 16   |
 11|  RoboMaster Robot Remote Controller Set  |  56             | 1   | 56    |
 12|  RoboMaster ESC Center Board    |  5             | 1   | 5    |
 13|  RoboMaster Rubber Roller for Mecanum Wheel     |  6             | 8   | 48    |
 14|  RoboMaster Battery Rack (compatible)      |  16             | 1   | 16    |
 15|  DJI E2000 PRO Tuned Propulsion System CCW-R           |  248             | 4   | 992    |
 16|  DJI E2000 PRO Tuned Propulsion System CW-R            |  248             | 1   | 248    |
 17|  2170R Folding Propeller (CW set, without screen-print, box package)      |  48            | 0   | 192   |
 18|  2170R Folding Propeller (CCW set, without screen-print, box package)     |  48            | 1   | 48   |
 19|  RoboMaster TB47 Battery 100W Charger AC Cable    |  4             | 2   | 12   |
 20|  N3 Standard            |  333             | 1   | 666    |
 21|  RoboMaster M3508 P19 Brushless DC Gear Motor        |  79             | 2   | 158    |
 22|  RoboMaster C620 Brushless DC Motor Speed Controller        |  63             | 1   | 126    |
 23|  RoboMaster M3508 Accessories Kit     |  54            | 1   | 108   |
 24|  RoboMaster Development Board Type A      |  68            | 1   | 136   |   
 25|  RoboMaster Development Board Type B         |  35             | 1   | 70    |
 26|  RoboMaster Development Board OLED           |  14             | 1   | 28    |
 27|  RoboMaster M2006 P36 Brushless DC Gear Motor        |  41             | 1   | 82    |
 28|  RoboMaster C610 Brushless DC Motor Speed Controller             |  25             | 1   | 100    |
 29|  RoboMaster Development Board Cables         |  20             | 2   | 400    |
 30|  TB47D Battery|  216            | 2   | 431   |
 31|  RoboMaster GM6020 Brushless DC Motor| 189             | 1   | 567    |

### Total: 8377 USD

