# Team FTFT

## Introduction of Team members 

### Li Chi (Leader)
I’m a year 1 master of technology student. Previously, I obtained my bachelor of science in statistics from NUS as well. After that, I worked in credit risk modelling in financial institute. I’m interested in the field of predictive modelling, feature engineering, big data engineering and Graph& Web mining using R& Python.

### Wang Yongtian
I am a year 3 Mechanical engineering student. With the knowledge that I learnt from my major courses, I can help with the fields of mechanical design, assembling and testing. In addition, I am also interested in embedded programming, python, vision system. When I was in polytechnic, I have done projects about embedded programming with pretty good results. I have learnt python at summer school with a grade of A+. I also helped to make vision system to check failure products and surface cleanliness during the internship period. I have a good understanding and skilful at CAD, circuit troubleshooting and CNC machines. I hope my inter-disciplinary knowledge and skills could help our RM team.

### Ang Yik Hong
I am a year 3 Mechanical Engineering student currently and in tend to pursue Robotics as the specialization. I have a strong interest in the field of robotics since I was young. I studied Diploma in Mechatronic and Robotics at Singapore Polytechnic after I finished my secondary school study in Malaysia. During the study in Singapore Polytechnic, I have done several robotic team projects, such as automated guided vehicle. Through the projects, I have learned a lot of skills, such as fabrication skills, problem solving skills and getting familiar with mechanical and electrical components. The reason why I would like to join the Robomaster is that I think it is a very good platform for me to strengthen my skills in Mechanical and Robotics.

### Liew Shaun Kheng
I am a Year 3 undergraduate student from Mechanical Engineering. I am very Interested in Robotics and planning to specialize in this field in my upcoming year. During my academic years in Singapore Polytechnic, I pursued in Diploma in Mechanical Engineering, and I have done some projects that require good designing and fabrication skills. I have great dexterity in fabrication, CAD and Solidworks drawing, and have some fundamental knowledge in Python. I will work hard and commit to this project in order to enhance my technical and team-working skills through this project.

### Zou Yanfeng
Interested in Robotics and planning to specialise in AI and communication systems. I have some experience in Autocad software and would like to learn more knowledge and skill taking part in this project.

### Jody
I am a year 2 Electrical Engineering w/ 2nd major in Economics undergraduate. I have basic knowledge on CAD and coding on several platforms. I am interested in robotics and the idea of building a working object from scratch. I feel that it is the best way to explore my interests and apply what I have learnt so far by putting it into practical uses. I feel that this journey will provide a different angle of learning, process and fulfilment that will be both memorable and valuable.

## Proposed manpower arrangement

No| Role          |  Description                        | Assigned to       | 
--|---------------|---                                  |---                |
 1|  Mechanical   |  Chassis; Suspension                |  Yik Hong  |
 2|  Mechanical   |  Gun; Gimbals system                | Liew Shaun Kheng |
 3|  Electrical   |  Power management; Electric Drive; Fail-safe   |  Yongtian |
 4|  Electronics  |  Sensor interface; Close-loop Control | Jody          | 
 5|  Software     | Linux OS; Sensor drivers            | Li Chi     | 
 6|  Software     | Computer vision; Motion planning    | Yanfeng    | 
 7|  Operation    | Sponsorships; Chinese-English Translation | Open Position     |   
 8|  Operation    | Accounting; Publicity Materials     | Open Position     |  
 9|  Pilot        | TX & RX system; Game-play strategy  |  Open Position            |
 
 For interested people to join our team, please contact Telegram @burgerkheng
 
 ## Proposed timeline and milestones 
 
 Subject | Estimated Date          |  
--|---------------| 
Registration and Role Allocation | 15 September 2019 |
Send request to purchase self study materials | 20 September 2019 |
Run down of Rule book  | 25 October 2019 |
Mock-examination 1 of competition rule book  | 5 November 2019 |
Drafting of needed components for purchase, Start of technical proposal | 10 November 2019 |
Mock-examination 2 of competition rule book | 15 November 2019 |
Rule-book assessment | 20 September 2019 |
Send draft of technical proposal,  list of purchase item for approval | 25 November 2019 |
Start Assembly and fabrication of required components and softwares | 6 December 2019 |
Checkpoint for basic components of robot, e.g. power, communication, movement, etc | 26 December 2019 |
Mid term assessment | 23 January 2019 |
Checkpoint for more advanced components of robot, e.g. Sensors, computer visions, software | 15 February 2019 |
Final Assessment | 1 March 2020 |
Referee System Installation | 1 March 2020 |
Progress check for basic components of robot, e.g. power, communication, movement, etc | 1 April 2020 |
Progress check for more advanced components of robot, e.g. Sensors, computer visions, software   | 1 May 2020 |
Testing of robot 1 | 15 May 2020 |
Testing of robot 2 | 30 May 2020 |
Testing of robot 3 | 15 June 2020 |
Testing of robot 4 | 30 June 2020  |

## Key aspects of the robot to consider

### Mecanum wheels
* Robots can move parallel in all directions without turning their visual fields around in the game, so as to achieve a variety of ‘zigzag’ movement and precise strikes in the battle.
* It is mainly composed of wheel hub and rollers. The wheel hub is the main support of the whole wheel, and the rollers has no power source. The rollers can freely roll and they are installed around the wheel hub.

### Chassis: 
* The four-wheel chassis is designed symmetrically so that it does not require additional sensors and is easier to move precisely.
* Mecanum wheel chassis: It is suitable if we do not focus on rotation efficiency, instead, high mobility and flexibility of the robot is required. It allows the robot to move freely over all kinds of rough terrain.
* A fabricated aluminium guard must be placed to cover the wheels to prevent impact.
* A suspension system will be placed at the wheels to increase the stability of the vehicle. This is also to prevent vibration during maneuvering.

### Sensors:
* Robot must be able to detect another robot within the vicinity and pin-point its location. In order to do this, a system of lidar, radar and/or camera set-up is required. The system to be adopted depends on the operating conditions of the robot.
* Sensors to record data of different functioning parts of the robot, this data will then be used to analyse the robot’s health and detect if there are any malfunctioning parts.
* Sensors to aid turret in aiming for plates of enemy robot/ other targets.
* Sensors to indicate the number of projectiles in the cartridge.
* Especially in the developmental stages of robot, it is crucial to equip as many parts of the robot with sensors to enable the collection of comprehensive data that will aid in the development and tweaking of each component of the robot. Different sensors such as accelerometer, proximity sensors and other types are required. The cases for each sensor depend on the component.

### Two-Axis Gimbal:
* Robot must be able to have a stabilized gimbal platform of which a camera and the launching mechanism would be mounted.
* The camera should be able to transmit a live first person view of the camera with clear resolution and little time delay back to its controller.
* The launching mechanism could be mounted on the same same or different gimbal platform as the camera feed.

### Projectile Supplying System:
* Projectile supply system should be able to feed projectiles to the launching mechanism in a reliable and steady rate.
* The mechanism should be tested to be free of stucking of projectiles in the feeding system.
* Able to transmit the ammunition to the UI in real-time.

### Launching Mechanism:
* Able to fire 17mm projectiles at its maximum barrel speed of 45m/s.
* Able to hit targets accurately at a distance of minimum 20m (arena is 28m long) with minimal spread.
* Able to track its own firing speed to prevent point deduction due to barrel overheating violations.


## General Design and fabrication method
The material for the individual customized component of the robot will made up of aluminium metal blocks. The selection of aluminium as the building material of the robot is because of it's light and corrosion resistance property. The other advantage of using aluminium is it is easily be designed and fabricated into our desired dimension in the workshop through milling, lathing, CNC etc. 

For some of the components that does not require high strength, we will be using 3D printing to save cost and reduce the total weight of the robot.


