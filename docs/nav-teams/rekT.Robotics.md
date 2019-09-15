# reKt.robotiKs

## Introduction

### Mong Juin Hwaye (Hwaye)

A dare-to-dream Mechanical Engineering freshman from NUS. With a strong passion, I had been active in the field of robotics and automation for about a decade. Prior to joining NUS, I was part of the NUS-MOE Science Research Program, specializing in the mapping and simulation of self-driving vehicles in the SMART-FUM Lab. This 1.5 year attachment was where I delved into learning about the Robot Operating System (ROS) and Gazebo simulation platforms. I've also an active school team, where I represented the country to several robotic competitions including the First Lego League 2016 World Festival in the USA - Mechanical Design Award. These experiences reassured me that I would always enjoy working with mechanical structures and software controls. What motivates even further is that the DJI Robomasters requires a large collective effort, including so many more fields that I’m also interested in! Can’t wait to compete in the finals, and finally visit the Silicon Valley of the East as a robotics specialist!

### Tan Je Sean (Je Sean)

I am currently a Year 1 Mechanical Engineering student and have quite a large interest in the field of robotics. I was part of the robotics team back in Secondary and High School. Having also had the opportunity to participate in WRO, it showed me how designs and concepts can vary widely between others and my own and this really sparked a fire within me to further dive into the field of robotics. I loved seeing when my robot is able to run as designed, it is almost as if watching your child grow up. From the stages of conception or the final stage of completion, every step of the way is a learning journey. Whenever I stumble across an obstacle I will take it as a challenge and not rest until it has been solved.

### Teo Ru Min (Ru Min)

As a current Mechanical Engineering student, I had been into the robotics team in secondary school and had developed a passion in this area. I would really like to join this competition, and it is mainly to deepen my knowledge and understanding in this specific sector. Out of the 7 robots, I am particularly interested in the Engineer robot since this robot have more freedom in terms of the designing of mechanism. Since I plan to venture into this sector, I would like to take this opportunity to learn more about it. 

### Kelly Ha (Kelly)

Being a biomedical engineering undergraduate, I always wonder how the robot mechanism can help humans. Taking this opportunity, I can adapt the future technologies with the properties and characteristics of homo sapiens in order to have a real high intelligence robot. Things including how the movement of the body or fluid mechanism of the human body can be adapted to the machine. I have never been into any robotics event unlike the rest of my team, however, I'm willing to learn and support them with my passion. I take this as one of my obstacles, and like always, I will find a way to go across it. By the meantime, I will like to take this opportunity to reach my hand to those talented in electrical components to join our team!

### Proposed Manpower Arrangement
No| Role          |  Description                        | Assigned to       | 
--|---------------|---                                  |---                |
 1|  Mechanical   | Chassis; Suspension                 |  Hwaye            |
 2|  Mechanical   | Gun; Gimbals system                 |  Je Sean          |
 3|  Electrical   | Power management; Electric Drive; Fail-safe   | Ru Min |
 4|  Electronics  | Sensor interface; Close-loop Control  |  Open position      | 
 5|  Software     | Linux OS; Sensor drivers            | Hwaye             | 
 6|  Software     | Computer vision; Motion planning    | Je Sean           | 
 7|  Operation    | Sponsorships; Chinese-English Translation |Hwaye, Kelly |   
 8|  Operation    | Accounting; Publicity Materials     | Kelly             |  
 9|  Pilot        | TX & RX system; Game-play strategy  | Ru Min, Kelly     |

 For interested people to join our team, please contact Telegram @felixmong


## Timeline & Milestones


 >   You should study the past year's competition deadlines, and align your team's progress to those deadlines

![Timeline](./assets/team-awesome-timeline.png)

## Robot Design Considerations

We analysed several matches from this year and last year... Identified several design approaches...

###BASE

1. Mecanum wheels are to be utilised as the main driving wheel. The base of the robot in contact with the ground would form a square/rectangle, such that the centre of rotation of the base is equidistant to all force wheels.
2. Each individual wheel and motor assembly will be suspended by a cantilever system to ensure stability of robot during jumps, climbing over inclined surfaces and collisions with other robots.
3. Wheels to be directly mounted onto driving motors to reduced total suspended weight and reduce stress on suspension system and reduce positioning error due to slight flexing in the power transmission (such as flex from chains or rubber pulleys)
4. Bumper to be placed around the wheels to prevent the wheels from getting stuck in the event of collision or projectiles being stuck. Small plating and foam insulation to cover up crevices and prevent projectiles from getting stuck and robot from getting damaged.

###GIMBAL/TURRET

1. The gun/gimbal system shall be mounted in the centre of rotation of the base to allow for 360° rotation of the body and gimbal system. This allows a wider firing range and allows the robot to spin on its base without much effect to the gun, as one of the strategies is to keep the touch pads in motion to reduce chance of damage.
2. The gimbal firing turret would be mounted as high as possible to allow for a larger degree of impact, increasing the damage output as the touchpad are pressure sensitive. However, majority of the motor/movement systems will be mounted lower to reduce the centre of gravity, increasing stability.
3. The gimbal systems will be designed separately as its own module to allow for ease of maintenance. A separate MCU mounted in the gimbal to reduce the amount of wires running through the system and allow 360° rotation of gimbal.
4. The projectile hopper will be mounted on the base itself to reduce weight on the gimbal system to ensure mobility of turret and reduce the overall centre of gravity.
5. A “carousel” like system with slanted base leading to the feeding system in the bottom of hopper to feed projectiles to the turret. Bullets will be fired by feeding the gun with projectiles to ensure continuous fire rate.
6. The feeding system will be mounted in the centre of rotation for all axis of gimbal (i.e. axis of yaw and axis of pitch) to allow for rotation along both axis of gimbal. Each connection will be sleeved into each other to ensure unobstructed path for projectiles and all joints to be fit with rollers to ensure smooth movement.

##General Design and Fabrication Methods

We plan to use Aluminium Extrusions as the basic building block of the robot base while PVC pipes for the feeder mechanism due to their low cost and high availability of material. The feeding mechanism will utilise PVC pipes with slight bigger diameter  than projectile to ensure projectiles move in a single file without being stuck and the corner pieces to utilise bends with large bend radius to allow smooth movement. It can be easily cut and connected to form different shapes and sizes according to our needs and dimensions. 

Certain parts that cannot be sourced or require more strength than 3D printed stuff we will utilise milling, lathing, CNC and other available workshop tools to fabricate certain connecting parts. Other elements that does not require high strength can be 3D modelled and 3D printed to save costs.

Both the base and gimbal module will be developed separately but in close communication to allow modularity and ease of maintenance in the case of a need to swap. Easy to remove mounts as well as standardised mounting frames will be incorporated as modularity will remain a large part in our design process.


### Proposed Budget

...
