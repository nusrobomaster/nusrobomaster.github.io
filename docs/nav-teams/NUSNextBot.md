# NUSNextBot

## Introduction


 - Chen Tong :computer:

   I am Chen Tong, a CEG year 2 student. In my high school I have joined VEX robotic team and participated in competitions as a structure designer. The highest prize I received is first prize In Asian-Parcific Robotic Championship. In NUS, I have joined Bumblebee Team Hornet during last year. I have experience writing computer vision algorithm in Team Hornet and I am quite familiar with the use of ROS. I am interested in learning web page design and computer vision in the future.                                                                                                                    
 - Zhao Shi :electric_plug:

   I am Zhao Shi, a year 2 student reading electrical engineering and economics. I have past coding experience using C and python. Moreover, I am familiar with hardware description languages and starting to learn assembly language this semester. Maybe I can cover more of the hardware portion.

 - Liu Haoran :wrench:

   I am Liu Haoran, a year 2 mechanical engineering student. I do not have any experience about the modeling of the robot, but I am trying to learn how to design the gun and chassis.

 - Rebecca Oei :computer:

   I am Rebecca Oei, a year 2 studying Computer Engineering. I did robotics in Secondary school, in particular competing in the VEX Robotics competition which has similar elements to Robomaster. I am interested in working on the  electrical and software aspects of the robot, as well as administrative or management roles for the team.

 - Yuan Jiayi :computer:

   I am Yuan Jiayi, a year 2 computer engineering student. I have coding experience on C and C++. I have also written motor control code in CG1112 project and held obstacle avoidance part in CG1111 project. I am interested in obstacle avoidance design of the robot.

### Proposed Manpower Arrangement
No| Role          |  Description                        | Assigned to       | 
--|---------------|---                                  |---                |
 1|  Software     |  Computer vision; Motion planning   |  Chen Tong (Leader)|
 2|  Hardware     |  Hardware programming; Circuit design  | Zhao Shi       |
 3|  Mehchanical  |  Chassis; Suspension                |  Liu Haoran       |
 4|  Software     |  Sensors; Referee System            |  Rebecca     | 
 5|  Software     |  Obstacle avoidance                 | Yuan Jiayi    | 
 6|  Mechanical   |  Gimbals System; Gun                | Open Position     | 
 7|  Operation    |  Sponsorships; Chinese-English Translation | Open Position     |   
 8|  Operation    |  Accounting; Publicity Materials    | Open Position     |  
 9|  Pilot        |  TX & RX system; Game-play strategy |  Open Position    |
 10| Electrical   |  Power management; Electric Drive; Fail-safe   |  Open Position |

 For interested people to join our team, please contact Telegram @chentong

## Timeline & Milestones


  **Now ~ Oct 2019** Based on the rules of RoboMaster2019, all members start to learn relevant skills and concepts for their roles.
  - Mechanical: Get familiar with suspension system, launching system and modeling of the robot
  - Electrical: Familiar with designing of power system and microcontroller programming
  - Software: Get familiar with ROS and some useful tools. Utilize the official forum

  **Oct 2019 ~ End Nov 2019:** Prepare for ***rulebook exam (November 20)*** and the submission of ***season schedule (November 30)*** . Based on the rules of RoboMaster2020, plan the strategies and the relevant design in detail. If possible, start to assemble some components of the robot based on the plans.
  - Mechanical: Try to finish the modeling of each part of the robot
  - Electrical: Simulate power system to ensure that it meets the requirement of DJI
  - Software: Write some parts of the module (obstacle avoidance, image processing, etc.)

  **Dec 2019 ~ Jan 2020:** Assemble the Standard robot. Prepare for the submission of the ***Technical Proposal to the competition committee (January 23)*** .
  - Mechanical: Assemble the mechanical parts of the robot
  - Electrical: Test the electrical system and completed hardware programming
  - Software: Enhancements

  **Jan 2020 ~ Feb 2020:** Integrate mechanical/electrical/software components. Begin testing the robot and film the ***Mid-term Robot Assessment Video (March 1)*** .
  - Mechanical: Test and adjust the launching system to fulfill the mid-term assessment requirements
  - Electrical: Work on any sections that does not fulfill the trail
  - Software: Test and adjust the system according mid-term assessment requirements

  **Mar 2020 ~ April 2020:** Purchase and assemble the referee system for the robot. Continue to test and improve robot capabilities. Practice and refine interactions between robots (eg. Engineer passing projectiles to Standard). 
  - Mechanical: Assemble all the sections of robot
  - Electrical: Assemble the final product and ensure that the electrical system works as expected (i.e. enough operation time)
  - Software: Complete and test UI to ensure operations are smooth

  **May 2020 ~ June 2020:** Pilot training. May organize some competitions with other standard robots in NUS team to discuss and improve the strategies. ***Film the final robot assessment video (June 3)*** and ***prepare for the online referee system exam (June 4)*** . Keep adjusting the robot for better performance. Analyse the gameplay of teams from China (regional competitions will start in May) and improve our robot and strategies.
  - Mechanical: Adjust the mechanical sections of the robot for better performance
  - Electrical: Integrate the referee system and ensure that the robot is ready for competition
  - Software: Test referee system and adjust the software sections for competition

  **July 2020:** International Regional Competition starts. No more significant changes. 

  **July 2020 ~ August 2020:** Final Tournament

## Robot Design Framework


### Mechanical Key Design

![Mech-Rough-Design](./assets/NUSNextBot-Rough_Design.jpeg)
*Graph1. Rough Design of The Robot*

&nbsp;&nbsp;&nbsp;&nbsp;This graph is the draft of the robot. As all the components are not available now, the size and shape are unknown. Therefore, it can only be drawn roughly. For mechanical parts, the robot can be divided into 3 parts: chassis, gimbal and gun system. The design of the chassis includes the suspension system design as well.

#### Gun System

![Mech-Launching-System](./assets/NUSNextBot-Lauching_System.jpeg)
*Graph 2. Launching system*

&nbsp;&nbsp;&nbsp;&nbsp;The systems shown in graph 2 is the launching system, which is important for the robot to attack opponents in the competition. Above the system is the magazine, which is used to store the projectiles needed for launching. There is a dial under the magazine , which is responsible for dialing the projectile into the supply link. Each time the dial rotates, a projectile is dialed into the hole of the supply link.

&nbsp;&nbsp;&nbsp;&nbsp;After a projectile fall into the hole, it will slip onto the friction wheel. The friction wheel is driven by two reverse-rotating DC brushless motors. Projectile is subjected to the squeezing friction of the two rotating friction wheels to obtain the kinetic energy for launching.
    
  1. **Magazine:**
  The magazine is used to load projectiles and the design of it has great impact on the launch. If the magazine is loaded too much, the excessive load will make the previous adjusted parameters inaccurate. When aiming at the shooting, the muzzle will shake and affect the stability.  Therefore, optimum number of projectile needs to be considered, when testing the design.
  
  1. **Dial:**
  Poor design of the dial is the major cause of the stuck of projectiles. There are many aspects should be considered. Firstly, the dial cannot be too high. Otherwise, the projectiles may be squeezed under the dial when turning. Secondly, the turning angle of the dial motor should keep constant. If not, the projectile cannot be sent into the hole of supply link and stuck at the hole. Thirdly, when the dial is rotating, many bullets will want to fall down together resulting in stuck. Using some guide tools like brushes and 3D-printing parts can prevent the problem of accumulation of projectiles. 

  1. **Supply link**
  The curving part between the supply link hole and the friction wheel should be designed well. Otherwise, when the gun is raised to aim at the target at high location, the projectile cannot roll towards the friction wheel and cannot launch. After the gun heads down, although there is no order of launching, the residual projectiles will slide onto the friction wheel causing misfire.

  1. **Friction wheel**
  Friction wheel consists of two parts, outer layer and motor. The outer layer will be in contact with the projectiles and it is generally made of a material with soft texture and large surface friction, such as silica gel. A pair of friction wheels rotate in different directions. After one projectile leaves the friction wheel, another friction wheel will contact the friction wheels consecutively.

#### Chassis

![Mech-Chassis](./assets/NUSNextBot-Chassis.jpeg)
*Graph3. Chassis*

![Mech-Suspension-System](./assets/NUSNextBot-Suspension.jpeg)
*Graph4. Suspension System*

&nbsp;&nbsp;&nbsp;&nbsp;The suspension system in graph 4 is one kind of non-independent suspension system, which has the advantages of high loads, low cost and simple structure.

### Electrical Key Design

&nbsp;&nbsp;&nbsp;&nbsp;Based on our initial understanding of the robots, the components that requires a separate motor to drive include launching mechanism, supply mechanism and the four wheels. The referee system and gimbal contains built-in motor; therefore, we only need to consider their power consumptions and ensure that total power meets the competition requirements. The Lidar can be just connected directly to MCU for exchange of information and MCU will supply power of 5V1A to the Lidar for it to operate normally.

&nbsp;&nbsp;&nbsp;&nbsp;Since the motors we are going to use have different specifications, at least 2 transformers are needed in the robot to step up and down voltage to required ones. For instance, the wheels require a higher voltage supply while launching and supply mechanism only need a smaller voltage i.e. 5V.

&nbsp;&nbsp;&nbsp;&nbsp;We will also work on hardware programing which enables MCU to control motors based on the instructions output from CV algorithms i.e. CV outputs which direction the gimbal should move to, e.g.(up by one unit); MCU will hence send binary signal to control circuit that is made of logic gates, and diodes. This control circuit will control motor directly based on received instructions from MCU.

### Software Key Design

![Software-Framework](./assets/NUSNextBot-Software_Framework.png)
*Figure1. Software Framework*

&nbsp;&nbsp;&nbsp;&nbsp;Here is the software framework which illustrate the general design of the robot in the software part. Moreover, we have 2 detailed ideas for software design based on analysis of the competition.

#### Obstacle Avoidance:
![Obstacle-Avoidance](./assets/NUSNextBot-Obstacle_Avoidance.jpeg)
*Figure2. Flowchart of Obstacle Avoidance*

&nbsp;&nbsp;&nbsp;&nbsp;We plan to use sensors on the left, right, and trail of the robot to do obstacle avoidance work. Consider not to affect the operation of the player during competition, the obstacle avoidance is designed to show warning message only instead of stopping the robot compulsorily. We will test and give a safe distance value. If the distance between the robot and the obstacle is less than safe value, a warning message with the distance and position of the obstacle will be shown. Consider the colors of floor and environment are dark, we cannot use IR sensors. And consider the weight and the cost of laser, we may not use laser as well. Some of us tried laser and SLAM in the former project, it is nice when the speed of the robot is slower. So we may use ultrasonic sensors and KITTI vision.Obstacle avoidance algorithm will be added if we decide to use a click to set a destination.

#### Auto-Aiming:
![Auto-Aiming](./assets/NUSNextBot-Auto_Aiming.png)
*Figure3. Flowchart of Auto-aiming*

&nbsp;&nbsp;&nbsp;&nbsp;Since it is hard for a pilot to aim opponents’ robot, we think it is necessary to implement a function to help the robot to auto-aim the target (armors) when it is close to the enemy. Thus, we designed a part of control system to make it work. This algorithm (Figure2) will read in image information from image processing module when auto-aiming is activated. After trying to detect the light bar around the armor, if it captures the light bar improperly, the module will proceed to read the next frame of the video. Otherwise, the algorithm will try to predict the areas which may have the armor and decide which part we are going to attack. Then, the algorithm will analyze the position of the target area and its distance from the center point on the screen. After processing the data, this module will send a value to gimbal control to adjust the position of the gun then shoot the target armor.

## Proposed Budget


No.|Title|Quantity|Price (USD)|Total Price (USD)|
---|--------------|--------|-----------|-----------------|
1|Robomaster Tag for UWB Locating System|1|95|95|
2|RoboMaster UWB Locating System|1|667|667|
3|RoboMaster Anchor for UWB Locating System|1|133|133|
4|RoboMaster GM3510 Brushless DC Motor|1|47|47|
5|RoboMaster Red Dot Laser|1|13|13|
6|RoboMaster Mecanum Wheel (right)|2|44|88|
7|RoboMaster Mecanum Wheel (left)|2|44|88|
8|RoboMaster 2312 ESC-420S|4|5|20|
9|RoboMaster TB47 Battery Charger 100W (without AC cable)|1|19|19|
10|RoboMaster Robot Remote Controller Receiver|1|16|16|
11|Robomaster Robot Remote Controller Set|1|56|56|
12|Robomaster ESC Centre Board|1|5|5|
13|Robomaster Rubber Roller for Mecanum Wheel|4|6|24|
14|Robomaster Battery Rack(compatible)|2|16|32|
15|DJI E2000 PRO Tuned Propulsion System CCW-R|0|248|0|
16|DJI E2000 PRO Tuned Propulsion System CW-R|0|248|0|
17|"2170R Folding Propeller (CW set without screen-print box package)"|0|48|0|
18|"2170R Folding Propeller (CCW set without screen-print box package)"|0|48|0|
19|RoboMaster TB47 Battery 100W Charger AC Cable|1|4|4|
20|N3 Standard|0|333|0|
21|RoboMaster M3508 P19 Brushless DC Gear Motor|4|79|316|
22|RoboMaster C620 Brushless DC Motor Speed Controller|1|63|63|
23|RoboMaster M3508 Accessories Kit|2|54|108|
24|RoboMaster Development Board Type A|1|68|68|
25|RoboMaster Development Board Type B|0|35|0|
26|RoboMaster Development Board OLED|1|14|14|
27|RoboMaster M2006 P36 Brushless DC Gear Motor|1|41|41|
28|RoboMaster C610 Brushless DC Motor Speed Controller|1|25|25|
29|RoboMaster Development Board Cables|2|40|80|
30|TB47D Battery|2|216|432|
31|Guidance|0|952|0|
32|RoboMaster GM6020 Brushless DC Motor|0|189|0|
33|Manifold 2-C|0|1103.2|0|
34|Manifold 2-G|1|879.2|879.2|
35|RoboMaster 17mm Fluorescent Projectile(500 pcs/pack)|2|93|186|
36|RoboMaster Referee System Main Controller Module MC02|1|72|72|
37|RoboMaster Referee System Armor Module AM02|4|96|384|
38|RoboMaster Referee System Armor Module AM12|1|104|104|
39|RoboMaster Referee System Armor Module Support Frame AH02|3|51|153|
40|RoboMaster Referee System Armor Module Support Frame AH12|0|50|0|
41|RoboMaster Referee System Speed Monitor Module SM01|1|73|73|
42|RoboMaster Referee System Speed Monitor Module SM11|0|84|0|
43|RoboMaster Referee System RFID Interaction Module FI02|1|45|45|
44|RoboMaster Referee System Power Management Module PM01|1|74|74|
45|RoboMaster Referee System Light Indicator Module LI01|1|74|74|
46|RoboMaster RFID Tag Card|1|47|47|
47|RoboMaster Ocusync VTM Transmitter VT02|1|131|131|
48|RoboMaster Ocusync VTM Receiver VT12|1|131|131|
49|RoboMaster Cable Package CP02|1|30|30|
|||||
|||total|4837.2|