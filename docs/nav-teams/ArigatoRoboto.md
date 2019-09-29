# Team Arigato Roboto


## Introductions


## 
**Tay Kai Yang**

I am currently a Year 2 Electrical Engineering Student. I have always been excited about how technology has had a profound impact in changing the world. I try to apply  whatever EE has taught me wherever possible. I find that I learn best through trial and error, tinkering with stuff till I find the solution. Thus was born my enthusiasm to partake in this competition where the only way to learn is through independent exploration. I believe that the only two possible outcomes of this competition are that either we learn or we win and I strongly believe in the latter.


## 
**Prabhakaran Gokul**

I am a Year 2 Mechanical Engineering Student. I enjoy hands on work and thus I joined competitions such as Innoventure Programme and Hornet. I got to hone my skills as a mechanical engineer,especially in CAD, through these programmes. I am interested in robotics/AI thus I self learnt computer vision. I also exposed myself to software development by participating in orbital program. I want to pursue my passion in robotics/AI in the future. 


## 
**Karnati Sai Abhishek**

I am a Year 2 Student majoring in Computer Engineering. I am a core believer of the motto that learning does not stop outside the classroom and hence during my time at NUS, I have done self-initiated projects like orbital and also taken part in competitions like Hack & Roll. My immense interest in the real-life application of the concepts I learned in my modules also made me take up a software engineering internship at A*Star during my summer break. My experiences have aided in developing me as a holistic student with both soft and hard skills. Over the past year, I have also grown to like the fascinating field of artificial intelligence and wish to pursue this passion in the future. I believe that the challenging self-learning journey as a Robomasters core team member will aid me in gaining intriguing insights into artificial intelligence.


## 
**Hans Kurnia**

I am a Year 3 Computer Engineering student. Since my polytechnic days i have participated in several drone involved projects and competitions, such as SAFMC. From these experiences, I have developed an interest in drones as a hobby. Given my interest in drones and remote controlled platforms, I want to take part in the Robomasters competition.


## 
**Ijaz Ahmed Navas**

---


I am a Year 2 Electrical Engineering Student. In my first year in NUS I have actively tried to increase my exposure by participating in the Innoventure Programme and Hornet. I have a keen interest in Embedded systems and have accumulated experience in C, Python, Verilog and ARM Development Language. I am excited about the chance to apply the theoretical concepts I have learnt into practice through this experience. If there is one thing I have learnt from the lab sessions and other projects similar to this is that there are always a myriad of factors that you would not have considered in a theoretical model. The smallest issues could snowball and cause an error that would be difficult to trace back. However, when you finally troubleshoot the issue you would have learnt about peripheral issues you would not have ever thought about and the satisfaction is unmatched.


## Proposed Manpower Arrangement


<table>
  <tr>
   <td><strong>No</strong>
   </td>
   <td><strong>Role</strong>
   </td>
   <td><strong>Description</strong>
   </td>
   <td><strong>Assigned to</strong>
   </td>
  </tr>
  <tr>
   <td>1
   </td>
   <td>Electronics
   </td>
   <td>Sensor interface; Close-loop Control
   </td>
   <td>Ijaz Ahmed Navas
   </td>
  </tr>
  <tr>
   <td>2
   </td>
   <td>Software
   </td>
   <td>Computer vision; Motion planning
   </td>
   <td>Abhishek
   </td>
  </tr>
  <tr>
   <td>3
   </td>
   <td>Software
   </td>
   <td>Linux OS; Sensor drivers
   </td>
   <td>Hans
   </td>
  </tr>
  <tr>
   <td>4
   </td>
   <td>Mechanical
   </td>
   <td>Gun; Gimbals system
   </td>
   <td>Gokul
   </td>
  </tr>
  <tr>
   <td>5
   </td>
   <td>Electrical
   </td>
   <td>Power management; Electric Drive; Fail-safe
   </td>
   <td>Kai Yang
   </td>
  </tr>
  <tr>
   <td>6
   </td>
   <td>Operation
   </td>
   <td>Sponsorships; Chinese-English Translation
   </td>
   <td>Open Position
   </td>
  </tr>
  <tr>
   <td>7
   </td>
   <td>Operation
   </td>
   <td>Accounting; Publicity Materials
   </td>
   <td>Open Position
   </td>
  </tr>
  <tr>
   <td>8
   </td>
   <td>Pilot
   </td>
   <td>TX & RX system; Game-play strategy
   </td>
   <td>Open Position
   </td>
  </tr>
</table>


For people interested to join our team, please contact Kai Yang, Telegram @kaiyang21


## Timeline & Milestones

![timeline](./assets/Team_Arigato/arigato_timeline.jpg)

## Robot Design Considerations

Competition Constraints:



*   Total Power Supply Capacity: 200 Wh 
*   Power Supply Voltage: 30 V 
*   Robot Chassis Power Consumption: 80 W 
*   Maximum Weight: 20kg 
*   Maximum Initial Size: 600 x 600 x 500 (mm)
*   Maximum Expansion Size: 700 x 700 x 500 (mm)   

The job of the standard robot is to complete on field tasks that activate boosts. Therefore, it will be constantly moving through the field and jumping ramps. As such, we agreed that it should be compact, resilient to impact as well as light and agile to navigate the battlefield. Below are the proposed designs to match the role of the standard robot.

**Wheels and Suspension:**

Wheels: (4x M3508 motor, 4x Robomaster Mecanum Wheels) 



*   We will be using 4 mecanum wheels for omnidirectional movement. 
*   Each wheel will have an independent motor and suspension system.


Motors for wheels: (4 x M3508 Brushless DC motors)



*   One end of the suspension arm will be hinged to the chassis and the other end will be attached to the wheel. We chose this suspension system as this was a simple design that does the work. Other designs (eg. double wishbone) were more complicated
*   We will be using the motor directly to drive the wheels
*   A M3508 motor will be mounted on each of the 4 suspension arms, which will then be connected to the wheel. Since the motor is going to be directly driving the wheels, this set up would be apt 
*   M3508 motor is suitable as it is able to provide a max torque of 1Nm, which is appropriate for the competition. We assumed that the robot is 20kg and also took into account the elevation of the arena(max of 17 degrees)
*   A shock absorber with a spring will be fixed to the chassis. The other end of it will be connected to the suspension arm 
*   We looked at RC cars online for inspiration. We used this to decide on the type of shocks and springs, angle of the suspension to the horizontal(60 degrees)

Suspension Model: (4 x HSP Purple Aluminium 65-87mm Shocks) 

![Figure_1a](./assets/Team_Arigato/arigato_1a.png)


Figure 1a:  Wheels and suspension system (front view)


![Figure_1b](./assets/Team_Arigato/arigato_1b.png)


Figure 1b: Wheels and suspension system (isometric view)

Bumper: 



*   We will have an extended bumper with small wheels at the corners to cover the wheels. This is to prevent the wheels from running up walls, and in the instance of collision with any object at an angle, the small wheels will help to divert the force rather than an abrupt collision. The bumper should be as close to the wheels as possible to prevent obstruction when approaching ramps.

**Turret module:**


![Figure_2](./assets/Team_Arigato/arigato_2.jpg)


Figure 2: Overall design for the turret module


![Figure_3](./assets/Team_Arigato/arigato_3.jpg)


Figure 3: Side view of turret module

Gimbal: (2x RoboMaster GM6020 Brushless DC Motor)



*   Two motors are required for the gimbal, one for horizontal rotation and one for vertical rotation of the turret. We have chosen to use the RoboMaster GM6020 brushless DC motor as it has a built-in position sensor that implements position closed-loop control. The accuracy in positioning enables better control for the user. This motor has a built-in driver and does not require an ESC. This motor also returns feedback on real-time motor information such as angle, which enables us to coordinate chassis rotation. 
*   For horizontal rotation, we will be using a direct drive, with the motor mounted beneath the gimbal. The ‘U’ structure will be rested on a rotating disc with ball bearings so that the weight of the turret module will be resting on the chassis instead of the motor. 
*   For vertical rotation, we will be using a gear drive. The motor is mounted in the middle of the ‘U’ and connected to a gear outside of the ‘U’ through a gap in the structure. Similarly, the turret is also connected to a gear on the external of the ‘U’. Rotation by the motor drives the pitch of the turret. This design improves stability by helping to even the weight distribution of the turret module as much as possible by placing the motor above the axis of the horizontal rotation.

    


![Figure_4](./assets/Team_Arigato/arigato_4.jpg)



Figure 4: Robomaster 2019 Robotics Competition Power Rune


Source: RoboMaster 2019 Robotics Competition Rules Manual V2.0

*   As the standard robot has to achieve field tasks, we consider the cases where it has to hit objects at a height. Based on the power rune set-up obtained from the RoboMaster 2019 competition (Figure 1), the expected height that our projectile should be able to reach is 3.4m. Given a little allowance to account for projectile drop, we target the projectiles to reach a height of 3.5m. Considering a height of 3.5m, we calculated the required angle for our turret at different distances, with the robot at ground level and the turret at a height of 0.4m from the ground.

<table>
  <tr>
   <td>
Distance from Power Rune (m)
   </td>
   <td>Angle (°)
   </td>
  </tr>
  <tr>
   <td>2
   </td>
   <td>57.2
   </td>
  </tr>
  <tr>
   <td>3
   </td>
   <td>45.9
   </td>
  </tr>
  <tr>
   <td>4
   </td>
   <td>37.8
   </td>
  </tr>
  <tr>
   <td>5
   </td>
   <td>31.8
   </td>
  </tr>
</table>



We plan to set a maximum tilt angle of 50° as any more will make it difficult for  the loading process and the base of the container might hit the chassis. As such, our closest engagement distance for such high objects will be approximately slightly below 3m.

Feeder: (1x RoboMaster M2006 P36 Brushless DC Gear Motor with RoboMaster C610 Brushless DC Motor Speed Controller)


![Figure_5](./assets/Team_Arigato/arigato_5.jpg)


Figure 5: Proposed feeder design



*   The feeder system will consist of a container with a slanted bottom mounted on top of the gimbal system to collect the projectiles. We have designed the bottom of the container to be slanted so that the projectiles will be guided towards the feeder.
*   The top of the container will feature a slanted curved lid with a gap to allow the projectiles to enter the container. At the same time, since there is only a small opening, projectiles will not get thrown out of the container due to abrupt motions of the robot.
*   At the bottom of the container is a rotating feeder with a central peak and slanted sides. When the feeder is in operation, the rotation causes the balls to experience a centrifugal force and roll to the sides, ending up flushed to the walls of the feeder. The fixed protrusions then direct the projectiles towards the opening of the pipe which leads to the turret. 
*   A curved wall will be erected on one side of the opening so that when the projectiles hit the wall, they will be directed into the pipe. The wall and the protrusions will have complementary gaps to prevent obstruction. The feeder will be controlled using the DC motor. In the case when the pilot wishes to stop firing, he can stop the motor and cut off projectile supply.
*   Our feeder has 6 protrusions. The rate at which projectiles are fed into the turret is proportional to the rpm of the motor. For each round spun, ideally 6 projectiles will be fed into the turret. Therefore, for a fire rate of 6 projectiles per second, the motor will only require an rpm of 60rpm. (1 round per second)
*   The pipe will have a width of 20 mm, with a small allowance given to ensure that the projectiles do not get stuck in the pipe.   

Firing System:(2x DJI Snail 2305 Racing Motor with Snail 430-R Racing ESC)



*   We chose to use the RoboMaster Snail Racing Propulsion system as it has a quick response time and high thrust.
*   For the firing of projectiles, we will use two motors spinning in opposite directions with a gap of 16 mm to ensure that the projectiles are squeezed in between them and pushed out with utmost power.  

**Key Considerations for Chassis:**



*   In order to make sure that the chassis is lightweight and durable, we decided to use carbon fiber for building the main chassis structure
*   Since the stability of the robot is essential in making sure that the robot does not topple over during the competition, the weight placement has been designed to be concentrated closer to the base.
*   It is important to save on board space and hence to keep the robot compact, we decided to create different compartments for the different modules of the robot. Doing so also aids in making cable management more organized
*   The chassis will be designed in a way which ensures that the different modules of the robot like the turret module and the movement module operate independently of each other in order to allow for versatile motion.

**Power System:**



*   **System Battery:**
    *   Model: DJI TB47D
    *   Type: Lipo 6s
    *   Voltage: 22.2V
    *   Battery Capacity: 99.9Wh, 4500 mAh (high capacity)
    *   High-performance battery designed for the Matrice 100 drone platform. Due to this, we would need to mount it to  the robomaster battery rack to adapt it to the XT60 interface we need for the robot
    *   Provides feedback about remaining battery life during operation in real-time.


## Proposed Budget (with parts breakdown)


<table>
  <tr>
   <td><strong>Category</strong>
   </td>
   <td><strong>Item</strong>
   </td>
   <td><strong>Quantity</strong>
   </td>
   <td><strong>Purpose/Description</strong>
   </td>
   <td><strong>Cost</strong>
   </td>
  </tr>
  <tr>
   <td rowspan="4" >Wheels/
<p>
Suspensions
   </td>
   <td>Robomaster Mecanum Wheels
   </td>
   <td>4
   </td>
   <td>Two wheels required on the left side and two wheels required on the right side
   </td>
   <td>176
   </td>
  </tr>
  <tr>
   <td>RoboMaster M3508 P19 Brushless DC Gear Motor
   </td>
   <td>4
   </td>
   <td rowspan="3" >Required to control and power the Mecanum wheels
<p>
Required for suspension system
   </td>
   <td>316
   </td>
  </tr>
  <tr>
   <td> HSP Purple Aluminium 65-87mm Shocks
   </td>
   <td>4
   </td>
   <td>69
   </td>
  </tr>
  <tr>
   <td>RoboMaster C620 Brushless DC Motor Speed Controller
   </td>
   <td>4
   </td>
   <td>252
   </td>
  </tr>
  <tr>
   <td rowspan="5" >Turret
   </td>
   <td>RoboMaster GM6020 Brushless Motor 
   </td>
   <td>2
   </td>
   <td>Required for the gimbal movement in the horizontal and vertical axis
   </td>
   <td>378
   </td>
  </tr>
  <tr>
   <td>M2006 P36 Brushless DC Gear Motor
   </td>
   <td>1
   </td>
   <td rowspan="2" >Required for projectile loading in the feeder
   </td>
   <td>41
   </td>
  </tr>
  <tr>
   <td>RoboMaster C610 Brushless DC Motor Speed Controller
   </td>
   <td>1
   </td>
   <td>25
   </td>
  </tr>
  <tr>
   <td>DJI Snail 2305 Racing Motor 
   </td>
   <td>2
   </td>
   <td rowspan="2" >Required to fire the projectiles
   </td>
   <td>38
   </td>
  </tr>
  <tr>
   <td>Snail 430-R Racing ESC 
   </td>
   <td>2
   </td>
   <td>16
   </td>
  </tr>
  <tr>
   <td>MCU
   </td>
   <td>RoboMaster Development Board Type A
   </td>
   <td>1
   </td>
   <td>Main controller to control the different motors, servos
   </td>
   <td>68
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>
RoboMaster Development Board Cables
   </td>
   <td>
1
   </td>
   <td>
   </td>
   <td>40
   </td>
  </tr>
  <tr>
   <td rowspan="3" >Chassis
   </td>
   <td rowspan="3" >Estimated budget
   </td>
   <td rowspan="3" >1
   </td>
   <td rowspan="3" >Use of carbon fiber to build the main structure of the chassis
   </td>
   <td rowspan="3" >100
   </td>
  </tr>
  <tr>
  </tr>
  <tr>
  </tr>
  <tr>
   <td>Battery
   </td>
   <td>TB47D Battery
   </td>
   <td>1
   </td>
   <td>High-performance 4500mAh battery
   </td>
   <td>216
   </td>
  </tr>
  <tr>
   <td>
   </td>
   <td>RoboMaster Battery Rack (compatible)
   </td>
   <td>1
   </td>
   <td>CP.RM.000061
<p>
To hold the battery within the robot
   </td>
   <td>16
   </td>
  </tr>
  <tr>
   <td rowspan="2" >Battery Charger
   </td>
   <td>RoboMaster TB47 Battery 100W Charger AC Cable
   </td>
   <td>1
   </td>
   <td>Cable to connect battery to charger
   </td>
   <td>4
   </td>
  </tr>
  <tr>
   <td>RoboMaster TB47 Battery Charger 100W (without AC cable)
   </td>
   <td>1
   </td>
   <td>Battery charger
   </td>
   <td>19
   </td>
  </tr>
  <tr>
   <td>Remote Control
   </td>
   <td>RoboMaster Robot Remote Controller Set
   </td>
   <td>1
   </td>
   <td>Controlling the actions of the robots using a console 
   </td>
   <td>56
   </td>
  </tr>
  <tr>
   <td>Receiver
   </td>
   <td>RoboMaster Robot Remote Controller Receiver
   </td>
   <td>1
   </td>
   <td>Receives commands inputs from the controller
   </td>
   <td>16
   </td>
  </tr>
  <tr>
   <td>ESC system
   </td>
   <td>RoboMaster ESC Center Board
   </td>
   <td>1
   </td>
   <td>Connected to the DC motors. Enables control over the speed of the motors
   </td>
   <td>5
   </td>
  </tr>
  <tr>
   <td>Total Cost: 
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>
   </td>
   <td>$1851
   </td>
  </tr>
</table>
