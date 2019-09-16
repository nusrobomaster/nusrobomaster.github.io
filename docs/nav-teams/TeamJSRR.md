# Team JSRR
<p align = "center"> <img src="./assets/TeamJSRR/TeamJSRRLogo.png" alt="TeamJSRR Logo" height=40% width=40%> </p>

## Contents
1. **[Team Members](#1-team-members)**
2. **[Timeline and Milestones](#2-timeline-and-milestones)**
3. **[Key Aspects](#3-key-aspects)**
4. **[General Design](#4-general-design)**
	
	4.1 [Suspension Design](#41-suspension-design)
	
	4.2 [Weight Distribution](#42-weight-distribution)
	
	4.3 [Chassis Optimization](#43-chassis-optimization)
	
	4.4 [Power Consumption](#44-power-consumption)

5. **[Prototyping](#5-prototyping)**
6. **[Fabrication Materials and Methods](#6-fabrication-materials-and-methods)**
	
	6.1 [Fabrication Materials](#61-fabrication-materials)
	
	6.2 [Fabrication Methods](#62-fabrication-machining)

7. **[System Architecture](#7-system-architecture)**
	
	7.1 [Movement Architecture](#71-movement-architecture)
	
	7.2 [Communication Architecture](#72-communication-architecture)

8. **[Artificial Intelligence and Algorithms](#8-artificial-intelligence-and-algorithms)**
	
	8.1 [Computer Vision](#81-computer-vision)
	
	8.2 [Automatic Threat Detection](#82-automatic-threat-detection)

9. **[Proposed Budget](#9-proposed-budget)**

10. **[Appendix](#10-appendix)**
	
	10.1 [Non-Technical Roles](#101-non-technical-roles)
	
	10.2 [3D Drawings](#102-3d-drawings)
	
	10.3 [References](#103-references)

## 1. Team Members
[Back to Top](#contents)

We would like to express our deepest appreciation to Mechanical Engineering Department, staff and our dearest sponsor for making this competition possible to us, thus allowing us to reach our fullest potential by exposing ourselves to challenges beyond our reach. We are a team of multi-talented individuals with background ranging from Computer Engineering to Mechanical Engineering, allowing for easy workload distributions due to our experiences and skill sets.

### Raghav Bhardwaj
<p align = "left"> <img src="./assets/TeamJSRR/Raghav.png" alt="Raghav"  height=200 width=200> </p>

**Matric No:** A0184445Y          
**Course:** Computer Engineering  

**About Me:**                                         

> Year 2 Computer Engineer with experience with **Computer Vision**, **Artificial Intelligence**, and **Game Development + 3D Animation.** Knowledge of programming languages including **Python**, **C**, **C++**, **C#**, and **Java**, and frameworks like **Tensorflow**, **Keras**, **OpenCV**, **Robot Operating System**, and **Unity3D.** Miscellaneous skills include **CAD modelling and 3D printing, Photoshop, and Video Editing.**  

**Roles:**
> * Computer Vision and Algorithms
> * Creation of Website

### Rishi Mahadevan
<p align = "left"> <img src="./assets/TeamJSRR/Rishi.png" alt="Rishi" height=200 width=200> </p>

**Matric No:** A0184381B        
**Course:** Computer Engineering

**About Me:**

> Rishi loves to push the limit of his knowledge and as such has worked in the **Hornet Project as part of NUS Bumbblebee.** He has also worked on creating a **webserver**, **database management** and on **NLP projects, such as detecting symptoms from patient's speech.** Rishi has coded applications and projects in **Python**, **Javascript**, **PHP**, **C**, **C++** and **Java**. He also has experience with machine learning and image processing libraries such as **Tensorflow**, **OpenCV**, **Nltk.** Rishi is a person who believes in Rapid prototyping and a LEAN approach to any project and this is no exception!

**Roles:**
> * Electrical System
> * Robotics System Architect

### Tan Guan Zhong, John
<p align = "left"> <img src="./assets/TeamJSRR/John.png" alt="John" height=200 width=200> </p>

**Matric No:** A0154912H           
**Course:** Mechanical Engineering

**About Me:**

> John is passionate about making cool engineering ideas come to life. Having worked on **mechanisms and engineering simulations** for **drones**, **acoustic systems** and **parallel manipulators**, he would love to expand his knowledge and skills in other displicines. He has experience in various **Fabrication techniques** such as **CAD modelling (SOLIDWORKS, AUTOCAD, RHINO3D)**, **parametric design**, **CNC machining** and **3D printings**. In addition, he has worked on engineering simulation in companies using **MATLAB**, **SIMULINK** and **SOLIDWORKS SIMULATION.**

**Roles:**
> * Mechanical System Design
> * Engineering Simulation

### Yu Shibin
<p align = "left"> <img src="./assets/TeamJSRR/Shibin.png" alt="Shibin" height=200 width=200> </p>

**Matric No:** A0169999R                
**Course:** Mechanical Engineering

**About Me:**

> Year 4 Mechanical Engineer with experience in mechanical engineering drawings softwares such as **SolidWorks**, **AutoCAD**, **Inventor**, **ProE**, **Fusion360** and **OpenVSP** developed by NASA for aircraft modelling. Knowledgeable in the usage of different fabrication tools for rapid prototyping and proof of concepts using **CNC machining tools**, **composites materials**, **3D printing techniques (FDM, SLA)**. Miscellaneous skills include **Matlab**, **programming in Python**, **Java** and **C**, front end development for UI/UX using **HTML**, **CSS** and **bootstrap** as well as **marketing**, **sponsorship** and **business development**.

**Roles:**
> * Fabrication & Rapid Prototyping
> * Material Sourcing

## 2. Timeline and Milestones
[Back to Top](#contents)

<p align = "center"> <img src="./assets/TeamJSRR/timeline.png" alt="Timeline"> </p>

## 3. Key Aspects
[Back to Top](#contents)

Design Considerations for Unmanned Ground Vehicle (UGV):
* Agile and compact
* Minimum height
* Suspension vs U-joints

According to the 2019 rules:

| Parameters | Dimensions | Additional Notes |
| --- | --- | --- |
| Initial Blood | 200 | |
| Total Power Supply Capacity (Wh) | 200 | |
| Launching Mechanism Type | 17mm projectiles | |
| Maximum Initial Size (mm) | 600 x 600 x 500 | |
| Maximum Expansion Size (mm) | 700 x 700 x 600 | |
| Maximum Weight (kg) | 20 | Includes battery |

## 4. General Design
[Back to Top](#contents)

We propose a **modular based design** as seen in the diagram below, where the shooting mechanism, camera, motorized platform, can be taken out and replaced easily. This is necessary due to the need for constant re-iterations of the design as well as the parts being easily damaged in the competition.

<p align = "center"> <img src="./assets/TeamJSRR/general_design.png" alt="General Design Schematic"> </p>

We can split the vehicle into 5 modules that can be easily taken apart from the system:

**1. Head**
	
* Shooter Mechanism
	> * Shooter Frame	
	> * Motors
	
* Projectile Speed Monitor
	
* Camera
	
* Ammo Box
	
* Y and X Axis Gimbals
	
* Servos
	> * Camera
	> * Ammo Box Cover
	
* Remote Controller Receiver

**2. Base**
	
* Motors x4
	
* Mecanum Wheels x4
	
* ESC x4	

* ESC Center Board
	
* Suspension System

**3. Core**
	
* Microcontroller Unit
	
* GPU
	
* Referee System Main Controller

**4. Chassis**

* Rolling Chassis
	
* Body Plates (To be mounted on the whole vehicle to protect its inner components)
	
* Head Frame (Contains the Head module)
	
* Referee System Armour Packs

**5. Power**
	
* Battery
	
* Power Supply Management

### 4.1 Suspension Design
Vibration control is an important aspect to consider during the design as well as the brainstorming because there is a need for a dynamic and interactive model between the manipulator and the platform to stabilise the robots when they move through rough terrain. There are two approaches: A **dependent suspension design (suspension)** or an **independent suspension design (U-joints)**. We are looking at an independent suspension system, allowing each wheel to displace vertically independent of the other wheels. In such a set-up, the whole vehicle would be more steady by  eliminating external interferences when travelling over obstacles and bumps, maintaining a higher overall accuracy.

### 4.2 Weight Distribution
The overall idea is to **lower the center of gravity** and **increase dynamic stability**. To do so, we concentrate most of the component weight in the Base module and reduce the weight of the Head module (which contains the Shooter and Camera). This is done by housing the Core and accessories attachment close towards the ground, we will be able to lower the centre of gravity, thereby providing an **optimal static stability** for the vehicle after calculation using dynamics equations. By doing so, we are able to reduce the current height from 481mm as seen in appendix 10.2 to roughly 400mm taken from calculations. 

### 4.3 Chassis Optimization
By **making it more compact**, we are able to achieve a more stable structure for maneuvering and achieving mission success. Hence, there is a need to update the frame of the vehicle in order to be in-line with the different goals we have in mind.  

### 4.4 Power Consumption
We must ensure that the peak current draw when climbing slopes do not exceed that of the max safety current draw from the battery, nor does it affect the other electrical components on the vehicle.

## 5. Prototyping
[Back to Top](#contents)

To reduce costs of prototyping, we propose **3D printing** of the different mechanisms and parts using **PolyLactic Acid (PLA) and Acrylonitrile Butadiene Styrene (ABS)**. With 3D printing, we can efficiently determine if mechanisms operate as intended and perform re-iterations of the design, without wasting resources for the final competition vehicle. We have chosen these materials due to different considerations such as their relatively comparable **structural strength**, **cost for rapid prototyping** as well as **easy access to equipment** for producing a prototype.

An alternative method would be to use **lego structures to act as a quick yet cost-friendly** method to prototype and test the more crucial parts of the robot (eg. Shooting mechanism, movement and computer vision algorithms).

## 6. Fabrication Materials and Methods
[Back to Top](#contents)

### 6.1 Fabrication Materials
The fabrication methods listed below and not exhaustive and there are various advantages and disadvantages to each of them - which is why we must utilise a whole range of methods/materials according to the purpose.

#### Aluminium
One of the materials used in designing and fabricating the covers that protect the top of the robot is formed sheet aluminium. Aluminium is **easy to machine**, and with proper structural design, it can possess a **high strength to weight ratio.**

#### Steel
The skeletal structure of the rolling chassis will **need to be extremely rigid and strong** to significantly reduce any deformation that can occur from collisions as well as enemy pellets. We can use steel beams and brackets to assemble the main skeleton.

#### Acrylic
Acrylic’s **transparency** makes it a suitable material for the chassis during the prototype stage. It is **inexpensive and easy to machine.** It is used so we can visualize and check the internal mechanisms of the shooter/motors and **effectively troubleshoot problems.**

#### Fasteners
Nuts and bolts are the bread and butter of most mechanical assemblies. However, in order to **save time when having to regularly take apart the modules in the prototyping phase**, we also propose **zip ties and velcro straps as an inexpensive and more efficient alternative** to traditional fastening methods.

### 6.2 Fabrication Methods

#### Machining
We will have a 3D design converted into a planar drawing in autocad/solidworks (They have in-built CNC G-code output) and eventually CNC machine the metal sheets. For parts that do not require CNC machining, they can be manually machined.

#### 3D Printing
There are certain parts of the vehicle that do not require a high strength, and these are the areas we can **reduce the weight through 3D printing the parts in PLA/ABS.** One of these components are the ammo box/cover, as well as the servo brackets.

#### Laser Cutting
For thin materials (thin aluminium and acrylic sheets), **laser cutting can be a quick, efficient and accurate fabrication method.** Especially in the prototyping phase. 

## 7. System Architecture
[Back to Top](#contents)

We are planning to use a **modular system** for the ease of prototyping and debugging. We plan to have **three main modules**, the Movement module, Communication module and the Threat detection module.

### 7.1 Movement Architecture
For the movement of the robot, we plan to use an Arduino Mega to get the signals from the main controller (UDOO Board), through serial connection and controls a motor controller (that controls the direction of the wheel and the speed using the PID logic from the Arduino Mega to ensure that the robot can turn and move straight accurately. The odometry data such as the number of revolutions (obtained from the wheel encoder) of the wheel will be fed into the PID to adjust the robot so that it can move straight.

<p align = "center"> <img src="./assets/TeamJSRR/movement_architecture.png" alt="Movement Architecture"> </p>

### 7.2 Communication Architecture
We plan to use Robotic Operating System (ROS) to communicate the operator’s PC with the main controller on the robot over TCP-IP communication. We plan to build a controller script, that can be controlled using WASD and X to shoot the weapon. This will give the operator a more natural gaming feel to operating the robot. We will also have a GUI that will give them alert’s on the presence of enemy robots nearby so that the operator can take the shot. 

## 8. Artificial Intelligence and Algorithms
[Back to Top](#contents)

### 8.1 Computer Vision
We have experience with Computer Vision in the Hornet Project under NUS Bumbblebee. We have worked with **detecting objects under different lighting conditions.** We managed to detect a bucket underwater from 15 meters under varying lighting conditions without the use of any Machine learning algorithm with the computing power of an Odroid. We plan to use the same strategy that we used, dynamic whitening and contrasting using the alpha functions in the OpenCV library. This allows us to control for random increase in the lighting condition. We were successfully able to detect objects with the presence of glare by normalizing the image, then applying the dynamic whitening algorithm. After the preprocessing it will be sent to the threat detector module, which will check for the presence of any enemy bots.

<p align = "center"> <img src="./assets/TeamJSRR/computer_vision_architecture.png" alt="CV Architecture"> </p>

### 8.2 Automatic Threat Detection
There are two main methods to detect objects inside an preprocessed image. Note that usage of both methods require a speed/accuracy tradeoff.

#### Image Thresholding using OpenCV
<p align = "center"> <img src="./assets/TeamJSRR/threshold_example.png" alt="OpenCV Thresholding Example height=70% width=70%"> </p>

This is the less computationally expensive method and just requires a simple CPU. Using OpenCV's inRange() we can threshold an image between a lower and upper bound based on the selected colour method together with predefined or dynamic low and high thresholds in various colour spaces like HSV, LAB or RGB. This will return a thresholded image with contours for our chosen object. These contours can be further filtered through based on their dimensions such as ratio, area, etc. This method could potentially be used to find the location (in our robot's view) of the red or blue health bars for enemy bots.

However this method is very inaccurate compared to the next one.

#### Object Detection using Convolutional Neural Networks
<p align = "center"> <img src="./assets/TeamJSRR/object_detection.jpg" alt="Object Detection Example height=70% width=70%"> </p>

This method requires a standalone GPU and therefore is much more computationally expensive. However it is very accurate and has extreme generalizability provided we use a large enough dataset. In the image above, a Convolutional Neural Network (RetinaNet in particular) was trained on a custom dataset to detect cars on a highway. RetinaNet can be used for our robot as well as it is a very accurate Single Shot Detector that can provide realtime object detection on any half decent GPU.

The only caveat is that we would have to train the model on hundreds of manually labelled images of enemy robots or enemy pressure plates.

## 9. Proposed Budget
[Back to Top](#contents)

The total cost of our vehicle amounts to **SGD 3854.36.** For a full breakdown of our budget, [please refer to the excel sheet here.](https://docs.google.com/spreadsheets/d/1hSyFkgnE2zaKy-0w9z6346uSNQ8cyk4fTempVa0A32Q/edit#gid=0)

The proposed budget is for one unit standard vehicle and does not include any costs that might arise from damaged components. The costs are also considered without discounts to robomaster participants, and are therefore at their full price.

## 10. Appendix
[Back to Top](#contents)

### 10.1 Non-Technical Roles

**Team Leader:**
> * Coordinates the different roles to ensure that they keep to the timeline for deliverables.
> * Handles communication and cooperation between the different robotic teams.

**Pilot:**
> * Main person testing the robotic controls or tuning the parameters for autonomous robots.
> * Familiar with the design and limits of the robotic system.
> * Will most likely be one of the robotic controllers in the competition.
> * Work together with other teams to devise strategies and tactics for the competition.

**Finance:**
> * In charge of managing the allocated funds or requesting for additional funds.
> * Approval of material/equipment purchase for the team.
> * Keeps a log of every material purchased and held by the team.

**Safety-in-charge:**
> * Draft and continuously review safety precautions and procedures.
> * In charge of battery charging/disposal (especially Lipo batteries) as well as monitoring safe battery usage.
> * Ensure that shooting mechanisms are handled safely.

**Admin/Logistics:**
> * Takes note of resources required for the team and purchases items.
> * Has to work together with Finance and admin to ensure that funds are sufficient for the long-term and to keep resources available according to the timeline.
> * In charge of managing documentation on Github for the team.


### 10.2 3D Drawings
Drawing of our proposed vehicle: (Source: Hubei Technological University)
<p align = "center"> <img src="./assets/TeamJSRR/bot_drawing.png" alt="Bot"> </p>

### 10.3 References
1. [RoboMaster Open Source Forum](https://bbs.robomaster.com/portal.php)
2. [Official RoboMaster Resource](https://www.robomaster.com/en-US/resource/pages/1016?type=announcementSub)
3. [Campus Labs](https://auburn.campuslabs.com/engage/organization/aurobomaster/documents/view/787345)
4. [RoboMaster Images](https://www.robomaster.com/en-US/resource/image)
5. [Referee System Specification Manual 2019](https://rm-static.djicdn.com/documents/19806/351fabf70dadd1548054744443997919.pdf)
6. [Reddit Robotics Subreddit](https://www.reddit.com/r/robotics/)
7. [MAC RoboMaster Midterm Assessment Video](https://www.youtube.com/watch?v=acWxZVNQXAc)
8. [Basketball Shooter](https://www.youtube.com/watch?v=pgMU_AxzxAE)
