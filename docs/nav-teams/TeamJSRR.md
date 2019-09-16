# Team JSRR

## Contents
1. **[Team Members](#1-team-members)**
2. **[Timeline and Milestones](#2-timeline-and-milestones)**
3. **[Key Aspects](#3-key-aspects)**
4. <details>**[General Design](#4-general-design)**
	<summary>
	4.1 [Suspension Design](#41-suspension-design)
	
	4.2 [Weight Distribution](#42-weight-distribution)
	
	4.3 [Chassis Optimization](#43-chassis-optimization)
	
	4.4 [Power Consumption](#44-power-consumption)
	</summary>
</details>

5. **[Prototyping](#5-prototyping)**
6. **[Fabrication Materials and Methods](#6-fabrication-materials-and-methods)**
	
	6.1 [Materials](#61-materials)
	
	6.2 [Machining](#62-machining)
	
	6.3 [3D Printing](#63-3d-printing)
	
	6.4 [Laser Cutting](#64-laser-cutting)

7. **[System Architecture](#7-system-architecture)**
	
	7.1 [Movement Architecture](#71-movement-architecture)
	
	7.2 [Communication Architecture](#72-communication-architecture)

8. **[Artificial Intelligence and Algorithms](#8-artificial-intelligence-and-algorithms)**
	
	8.1 [Computer Vision](#81-computer-vision)
	
	8.2 [Automatic Threat Detection](#82-automatic-threat-detection)

9. **[Proposed Budget](#9-proposed-budget)**
	
	9.1 [Electronic Parts](#91-electronic-parts)
	
	9.2 [Robotic Structure](#92-robotic-structure)
	
	9.3 [Power Supply](#93-power-supply)
	
	9.4 [Remote Control](#94-remote-control)
	
	9.5 [RoboMaster Referee System](#95-robomaster-referee-system]

10. **[Appendix](#10-appendix)**
	
	10.1 [Detailed Responsibility](#101-detailed-responsibility)
	
	10.2 [3D Drawings](#102-3d-drawings)
	
	10.3 [References](#103-references)
	
	10.4 [Resources](#104-resources)

## 1. Team-Members
We would like to express our deepest appreciation to Mechanical Engineering Department, staff and our dearest sponsor for making this competition possible to us, thus allowing us to reach our fullest potential by exposing ourselves to challenges beyond our reach. We are a team of multi-talented individuals with background ranging from Computer Engineering to Mechanical Engineering, allowing for easy workload distributions due to our experiences and skill sets. 

### Raghav Bhardwaj
<p align = "left"> <img src="assets/TeamJSRR/Raghav.png" alt="Raghav"  height=300 width=300> </p>

**Matric No:** A0184445Y          
**Course:** Computer Engineering  

**About Me:**                                         

Year 2 Computer Engineer with experience with **Computer Vision**, **Artificial Intelligence**, and **Game Development + 3D Animation.** Knowledge of programming languages including **Python**, **C**, **C++**, **C#**, and **Java**, and frameworks like **Tensorflow**, **Keras**, **OpenCV**, **Robot Operating System**, and **Unity3D.** Miscellaneous skills include **CAD modelling and 3D printing, Photoshop, and Video Editing.**  

**Roles:**
* Creation of Website
* Computer Vision and Algorithms

### Rishi Mahadevan
<p align = "left"> <img src="assets/TeamJSRR/Rishi.png" alt="Rishi" height=300 width=300> </p>

**Matric No:** A0184381B        
**Course:** Computer Engineering

**About Me:**

*Insert details here.*

**Roles:**

* Electrical System
* Robotics System Architect

### Tan Guan Zhong, John
<p align = "left"> <img src="assets/TeamJSRR/John.png" alt="John" height=300 width=300> </p>

**Matric No:** A0154912H           
**Course:** Mechanical Engineering

**About Me:***

*Insert details here.*

**Roles:**

* Mechanical System Design
* *Can add some more here hehe*

### Yu Shibin
<p align = "left"> <img src="assets/TeamJSRR/Shibin.png" alt="Shibin" height=300 width=300> </p>

**Matric No:** A0169999R                
**Course:** Mechanical Engineering

**About Me:**

Year 4 Mechanical Engineer with experience in mechanical engineering drawings softwares such as **SolidWorks**, **AutoCAD**, **Inventor**, **ProE**, **Fusion360** and **OpenVSP** developed by NASA for aircraft modelling. Knowledgeable in the usage of different fabrication tools for rapid prototyping and proof of concepts using **CNC machining tools**, **composites materials**, **3D printing techniques (FDM, SLA)**. Miscellaneous skills include **Matlab**, **programming in Python**, **Java** and **C**, front end development for UI/UX using **HTML**, **CSS** and **bootstrap** as well as **marketing**, **sponsorship** and **business development**.

**Roles:**

* Fabrication & Rapid Prototyping
* Material Sourcing

## 2. Timeline and Milestones
*Placeholder text*

## 3. Key Aspects
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
We propose a modular based design as seen in the diagram below, where the shooting mechanism, camera, motorized platform, can be taken out and replaced easily. This is necessary due to the need for constant re-iterations of the design as well as the parts being easily damaged in the competition.

*Insert image here*

### 4.1 Suspension Design

### 4.2 Weight Distribution

### 4.3 Chassis Optimization

### 4.4 Power Consumption

## 5. Protoyping
To reduce costs of prototyping, we propose **3D printing** of the different mechanisms and parts using **PolyLactic Acid (PLA) and Acrylonitrile Butadiene Styrene (ABS)**. With 3D printing, we can efficiently determine if mechanisms operate as intended and perform re-iterations of the design, without wasting resources for the final competition vehicle. We have chosen these materials due to different considerations such as their relatively comparable **structural strength**, **cost for rapid prototyping** as well as **easy access to equipment** for producing a prototype.

An alternative method would be to use **lego structures to act as a quick yet cost-friendly** method to prototype and test the more crucial parts of the robot (eg. Shooting mechanism, movement and computer vision algorithms).

## 6. Fabrication Materials and Methods
The fabrication methods listed below and not exhaustive and there are various advantages and disadvantages to each of them. Which is why we must utilise a whole range of methods/materials according to the purpose.

### 6.1 Materials

#### 1. Aluminium
One of the materials used in designing and fabricating the covers that protect the top of the robot is formed sheet aluminium. Aluminium is easy to machine, and with proper structural design, it can possess a high strength to weight ratio.
#### 2. Steel
The skeletal structure of the rolling chassis will need to be extremely rigid and strong to significantly reduce any deformation that can occur from collisions as well as enemy pellets. We can use steel beams and brackets to assemble the main skeleton.
#### 3. Acrylic
Acrylic’s transparency makes it a suitable material for the chassis during the prototype stage. It is inexpensive and easy to machine. It is used so we can visualize and check the internal mechanisms of the shooter/motors and effectively troubleshoot problems.
#### 4. Fasteners
Nuts and bolts are the bread and butter of most mechanical assemblies. However, in order to save time from having to regularly take apart the modules in the prototyping phase, we also propose zip ties and velcro straps as an inexpensive and more efficient alternative to traditional fastening methods.

### 6.2 Machining
We will have a 3D design converted into a planar drawing in autocad/solidworks (They have in-built CNC G-code output) and eventually CNC machine the metal sheets. For parts that do not require CNC machining, they can be manually machined.

### 6.3 3D Printing
There are certain parts of the vehicle that do not require a high strength, and these are the areas we can reduce the weight through 3D printing the parts in PLA/ABS. One of these components are the ammo box/cover, as well as the servo brackets.

### 6.4 Laser Cutting
For thin materials (thin aluminium and acrylic sheets), laser cutting can be a quick, efficient and accurate fabrication method. Especially in the prototyping phase. 

## 7. System Architecture

### 7.1 Movement Architecture

### 7.2 Communication Architecture

## 8. Artificial Intelligence and Algorithms

### 8.1 Computer Vision

### 8.2 Automatic Threat Detection

## 9. Proposed Budget
The proposed budget is for one unit standard vehicle and does not include any costs that might arise from damaged components. The costs are also considered without discounts to robomaster participants, and at it’s full price.

| Category | Item | Model | Details | Cost (USD) | Qty | Total Cost (USD) |
| ---      | ---  | ---   | ---     | ---        | --- | ---              |
| | Z-axis Gimbal | Turnigy HD 3508 Brushless Gimbal Motor | Function: Rotate head about z axis (Yaw) Link: https://hobbyking.com/en_us/turnigy-hd-3508-brushless-gimbal-motor-bldc.html | $28.54 | 1 | $28.54 |

### 9.1 Electronic Parts

### 9.2 Robotic Structure

### 9.3 Power Supply

### 9.4 Remote Control

### 9.5 RoboMaster Referee System

## 10. Appendix

### 10.1 Detailed Responsibility

### 10.2 3D Drawings

### 10.3 References

### 10.4 Resources
