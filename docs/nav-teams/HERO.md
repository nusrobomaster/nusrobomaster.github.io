# Team Awesome (Example)

## Introduction


 >   Introduce each of yourselves in a separate paragraph, you could include:
 >   - your academic background, past projects
 >   - interests and skills
 >   - future plans


### Proposed Manpower Arrangement


| No |  Role | Description    | Assigned to     |
| ---| ----- | -------------- | ----------------   |
| 1|  Mechanical   |  Chassis; Suspension                |  Ng Yong Kuan (Leader)   |
| 2|  Mechanical   |  Gun; Gimbals system                | Huynh Thi Thu Trang |
| 3|  Electrical   |  Power management; Electric Drive; Fail-safe   |  Daryl Yap Bao Hong |
| 4|  Electronics  |  Sensor interface; Close-loop Control | Liu Tianhang          | 
| 5|  Software     | Linux OS; Sensor drivers            | Open Position     | 
| 6|  Software     | Computer vision; Motion planning    | Open Position     | 
| 7|  Operation    | Sponsorships; Chinese-English Translation | Suzanne     |   
| 8|  Operation    | Accounting; Publicity Materials     | Open Position     |  
| 9|  Pilot        | TX & RX system; Game-play strategy  |  Hoong            |



## Timeline & Milestones




## Robot Design Considerations

### Standard Robot Specifications:

#### Overall Specifications: 

<ul>
<li>Total Power Supply Capacity: 200 Wh</li>
<li>Power Supply Voltage: 30V</li>
<li>Robot Chassis Power Consumption: 80W</li>
<li>Initial Firing Speed Limit: 30 m/s (Note: Barrel Heat game mechanic)</li>
<li>Maximum Weight: 20 kg</li>
<li>Maximum Initial Size (mm): 600 x 600 x 500 (h) [L & B: Orthographic projection]</li>
<li>Maximum Expansion Size (mm): 700 x 700 x 600 (h) [L & B: Orthographic projection]</li>
<li>Only 17mm standard projectiles</li>
<li>RoboMaster Referee System: 4 Small Armor Modules, 1 Large Armor Module, Speed Monitor Module (17 mm projectile), Video Transmission Module (VTM), RFID Interaction Module, Positioning Module, Main Control Module, Power Supply Management Module, Light Strip Module</li>
</ul>

![Referee system](/robomaster/pic-1.PNG)

#### Projectile Specifications

pic for the projectile 

### Key considerations in robot design

#### Firing mechanism

gif file

Components:

<ul>
<li>Motor for the firing wheel mechanism</li>
    <ul>
       <li><a href="http://www.readytosky.com/e_productshow/?273-RS2312-920KV-CWCCW-Brushless-Motor-273.html">RS2312 920KV CW/CCW Brushless</a></li>
        <ul>
                <li>KV: 920kv</li>
                <li>No-Load Current (Io/10V) 0.45 Amps</li>
                <li>Motor Resistance (Rm) 0.117 Ohms</li>
                <li>Max Continuous Current 14 Amps</li>
                <li>Max Continuous Power 220 Watts</li>
                <li>Weight 48 ± 2g</li>
                <li>Outside Diameter 27.7 mm</li>
                <li>Body Length 26 mm</li>
                <li>Max Lipo Cell 2-4s</li>
        </ul>
    </ul>
    <ul>
    <li><a href="https://www.alibaba.com/product-detail/11V-ICR18650-lithium-ion-Rechargeable-2600mah_62069335985.html?spm=a2700.7724857.normalList.1.61ff5aa9d0KiuJ&s=p">11V ICR18650 lithium ion Rechargeable 2600mah li-ion battery pack</a> </li>
                    <ul>
                    <li>Nominal Voltage: 11V(10120 rpm no load )</li>
                    <li>Capacity: 2600mAh(11.14 mins at max current )</li>
                    <li>Cycle life: >500 Times</li>
        </ul>
    </ul>
    <ul>
    <li>Friction wheels for firing mechanism</li>
        <ul>
            Abrasion-Resistant Keyed Drive Rollers
            <ul>
            <li>38.1mm</li>
            <li>Wear resistant & for high torque application</li>
            <li>Radius to be large to increase contact time but not too large to compromise on weight and size of firing mechanism</li>
            </ul>
        </ul>
    </ul>
    <ul>
    <li>Barrel</li> 
        <ul>
        Aluminium profile for sturdiness and with gaps to minimise air resistance in barre
        </ul>
    </ul>
    <ul><li>Gimbal</li>
         <ul>
            <li>Commercial-bought 2-axis stabilizing gimbal (~40-50USD, but usually made only for smartphones) (3-axis variants are more industrial-grade, but in range of few hundreds) with PID modulation on step servos and integrated controller board that can interface using GPIO with computational device of choice</li>
            <li><a href="https://tinyurl.com/y5fad6os">Tarot 3-axis (GPIO-compatible,, 149$)</a> </li>
            <li><a href="https://tinyurl.com/y23fkopc">Feiyu 3-axis (GPIO-compatible, 349$)</a> </li>
            <li>Alternatively, a gimbal can be fabricated from scratch to alleviate budget concerns (but not recommended due to manpower/time constraints). Below are the parts needed:</li>
            <ul>
                <li>2 x 5208 Brushless motors</li>
                <li>1 x 2200mAh 3s Lipo Battery</li>
                <li>Linear Hall sensors</li>
                <li>Custom angle brackets and joint covers</li>
                <li>Suitable microcontroller boards</li>
            </ul>
         </ul>
    </ul>
    <ul>Things to test out:
        <ul>
        <li>Motor</li>
        <ul><li>Velocity of projectile</li></ul>
        </ul> 
        <ul>
        <li>Friction wheels for firing mechanism</li>
        <ul><li>Stiffness of roller</li></ul>
        <ul><li>Roller distance from one another</li></ul>
        </ul>       
    </ul>
    
</ul>

#### Sighting

<ul>
<li>Optical Laser Rangefinders</li>
<ul><li><a href="https://www.robotshop.com/community/blog/show/lidar-light-amp-laser-based-distance-sensors">Lidar 1</a></li></ul>
<ul><li><a href="https://www.digikey.com/products/en/sensors-transducers/optical-sensors-distance-measuring/542?FV=1f140000%2Cffe0021e&quantity=0&ColumnSort=-42&page=1&pageSize=25">Lidar 2</a></li></ul>
<ul><li><a href="https://www.jenoptik.com/products/metrology/laser-distance-sensors">Lidar 3</a></li></ul>
</ul>

#### Ground mobility

<ul>
<li>Wheels</li>
<ul><li><a href="https://www.robomaster.com/zh-CN/products/components/detail/135">Mecanum wheels</li></a>
    <ul><li>Wheel diameter: 152.5mm</li> </ul>
    <ul><li>Wheel width: 45mm </li></ul>
    <ul><li>Weight: 590g</li> </ul>
    <ul><li>6 mounting holes with a diameter of 5.2mm </li></ul>
    <ul><li>Cost: 499RMB</li></ul>
</ul>
<ul><li>Suspension</li></ul>
    <ul><li><a href="https://www.monotaro.sg/g/00141241/">Compression coil spring</a></li>
        <ul><li>Spring constant: 3.089N/mm</li></ul>
        <ul><li>Allowable load: 104.93N</li></ul>
        <ul><li>Wire diameter 2.3</li></ul>
        <ul><li>Loaded length: 44mm</li></ul>
        <ul><li>Free length: 78mm</li></ul>
        <ul><li>Weight: 70g</li></ul>
    </ul>
</ul>

#### Chassis built
<ul>
    <li>
    Aluminium profile (Rectangular frame for stability)
    </li>
<ul><li>500mm x 500mm (Maximise base with allowance for wheel protrusion)</li></ul>
</ul>

#### Motors and Powering System

Another key consideration of the standard robot is high speed, light weight and flexibility. Therefore a constant and reliable power supply as well as a powerful motor are crucial in increasing and ensuring the performance of the fighter. 

<ul><li>System Battery:</li>
<ul><li>Model: DJI TB48D</li></ul>
<ul><li>Type: Lipo 6s</li></ul>
<ul><li>Voltage: 22.8V</li></ul>
<ul><li>Battery Capacity: 5700 mAh (high capacity)</li></ul>
</ul>
<p>The battery has long run times with 6 cells and high power. This intelligent battery keeps informing about its performance, including real-time information about remaining battery power. Additionally, the battery automatically provides information about the voltage of each cell, the total lifetime charges and discharges, and its overall health and status, which make things easy to supervise.</p>

<ul>
    <li>
    Model: Robomaster M3508 Brushless DC Gear Motor with C620 Brushless DC Motor Speed Controller (ESC)
    </li>
    <ul><li>Total power: 220W</li></ul>
    <ul><li>Rated Voltage: 24V</li></ul>
    <ul><li>Stall torque: 5 N.m</li></ul>
    <ul><li>Max rotational speed with a continuous torque of 3N·m：469rpm (2.5 m/s with 10cm-diameter wheel)
        Wide Operating Temperature Range：32°~122° F (0~50° C)
        </li></ul>
    <ul><li>Price: M3508: $79; C620: $63</li></ul>
    
    pic to be uploaded
</ul>

M3508 is chosen as the main motor because its compactness (98.4mmx42mm), powerfulness that allows acceleration shortly and high safety with multiple embedded sensor such as temperature sensing with automatic alarm. Besides, the control is flexible with both PWM and CAN bus supporters.


#### Proposed Optical and Stability Mechanisms
One especially important robot specification lies in the stability of its barrel and the corresponding vision field that enables the human controller to take aim. From the observations of successful teams in past DJI competitions, standard robots made use of the following techniques for effective deployment of its robot in both offensive and defensive aspects:

<ul><li>When stationary, constantly spinning the robot chassis while keeping barrel and camera fixed to prevent enemy robots from targeting its armour modules easily</li></ul>
<ul><li>Programmatic auto-correction/aiming onto important on-screen targets like enemy armour modules/power boosts/towers (can be toggled on/off quickly for outlier cases)</li></ul>
<ul><li>Keeping camera and barrel fixed when robot is going down slopes/bumps (able to be turned off/on easily)</li></ul>

<p>Most of these points imply the need to maintain two separate coordinate systems: one for the barrel/camera (the barrel assembly coordinate system) and the other for the chassis & wheels (chassis coordinate system) within the standard robot. The key goal is to keep the orientation of the barrel assembly coordinate system (relative to the global coordinate system) invariant to any change in orientation of the chassis coordinate system (relative to the global coordinate system). Note that the robot intentionally does not correct for translational change - it is more natural (game-like) for the human controller. Furthermore, the above proposed auto-targeting system can also take care of translational changes within the robot if needed.</p>

<p>The main stabilization substructure to be used would be a stabilizing gimbal (both 2-axis and 3-axis would be suitable). The camera can be either bought integrated with the gimbal, or as a third-party mount. Both methods are feasible, but the former might allow for customizability based on the camera function needed.</p>

<ul>
Gimbal Stabilization
    <ul>
    <li>The isolation of the barrel assembly coordinate system from the chassis can be done in one of two ways, both of which require the gimbal to be motorized:</li>
    <ul><li>Open-loop correction of the barrel assembly system for every detected orientation change in the chassis coordinate system. This would remove the need for sensors on the limited space available on the gimbal structure, but is not recommended due to long-term error shift and “jerkiness” in error correction.</li></ul>
    <ul><li>Closed-loop gimbal correction using linear hall-effect sensors and PID microcontroller board (most likely software-based PID instead of hardware-based). This would be the preferred way as the hall-effect sensors can take direct measurement of the barrel assembly eulerian orientation relative to the global coordinate system, with smooth error correction.</li></ul>
    </ul>
    <p>Since real-time stabilization is extremely crucial for effective human control, the latter method would be used. To aim the barrel and camera in an FPS-style manner with stabilization, the human controller would essentially control the set-point of the gimbal PID relative to the global coordinate system. The movement of the mouse would be internally translated into changes in the PID setpoints.</p>
    <p>Proposed motorized gimbal mounts/costs can be found in earlier sections of this proposal. The parts needed for a custom DIY implementation of a gimbal substructure can also be found within the same section.</p>
</ul>

<ul>
<li>Camera</li>
    <ul>
    <li>
    There are three possible choices for camera types depending on the budget constraints and computational setup (next section): 
    </li>
    <ul><p>Basic mono-camera vision: Any hobbyist/drone FPV compact camera with sufficient resolution (>1080p) for a computer monitor. While basic computer vision techniques (thresholding, filter etc) can be performed to determine the onscreen position of targets, the camera would need to be combined with a laser-range finder (specs and possible laser-range finder models listed in earlier sections) to accurately determine target distance.</p>
        <p>Possible models: <a href="https://tinyurl.com/y4ttctxu">Caddx</a> , <a href="https://tinyurl.com/y597ze4c">Runcam </a></p>
        <p>
        Advantages: requires the low computational power (Sensor fusion for distance estimation likely to be achievable in real-time on PI3)
        </p>
        <p>
        Disadvantages: requires sensor fusion with range-finders for target distance estimation, which needs accurate mounting and prior calibration.</ul>
        </p>
    </ul>
     <ul>
     <li>
        <p>Stereo-camera vision: Mount two cameras side by side. Target distance can be triangulated using gray-scale feature mapping in OpenCV or open-source stereo libraries and estimated without the need for a range-finder. </p>
        <p>Advantages:  No need for range-finders, able to perform distance estimation</p>
        <p>Disadvantages: Significant computational overhead (may not run real-time on Pi3 CPU Model), Requires two cameras to be bought, accurately mounted, and properly calibrated (taking up precious gimbal mounting space), and not fully accurate in estimating distance of outlier features.</p>
    </li>    
    </ul>
    <ul>
        <p>Native depth-sensing cameras: a camera with inbuilt RGB colour vision and depth-sensing/point-cloud capabilities. It essentially fuses both range-finder and camera capabilities, and can be extended into fast 3D mapping (most likely not needed for Standard robots, but may be needed for Sentry) using its generated point-clouds.
           Possible models: <a href = "https://tinyurl.com/yyzsc253">Intel D435I</a>, <a href="https://tinyurl.com/y5mns9ex">Intel D415</a></p>
        <p>Advantages: Depth/distance is estimated natively across the entire image within the camera module itself without further software processing.</p>
        <p>Disadvantages: Extremely costly (factor of 7x to 10x more than regular FPV cameras: 298$ for D435/ 240$ for D415), requires installation of dedicated Intel RealSense SDK/libraries to read depth images from camera.</p>
    </ul>
    <p>The overall camera recommendation for a Standard Robot would be to use a mono-camera vision coupled with a single laser range-finder. This is to keep budget costs down while providing a proper system for mimicking a FPS-shooter style mechanic (laser-range finder only needs to compute distance to the center targeting point of the camera image). If budget permits, the use of the third option (depth-sensing camera) would be optimal as it shifts the computational burden and responsibility of distance estimation to the camera module. The second option (stereo-vision) would most likely not be feasible due to the computational complexity needed for feature-processing both images each frame as well as the fact that the distance estimations from the technique may not be necessarily accurate and usable in real-time.</p>
    </ul>
</ul>
<ul></ul>

#### On-board Computation & Software Features
<p>The on-board CPU/GPU for the standard robot would handle all incoming/outgoing feed from the human controller to the robot, as well as to perform the necessary computations needed for gimbal stabilization, projectile launch, adjusting PID setpoints for gimbal control, and auto-targeting/aiming. In addition, neural networks may also be used as either a complementary or alternative option to traditional computer vision techniques if the on-board CPU/GPU is fast enough (eg. trained RNNs like YOLO to detect armour modules).</p>

<p>
There are four main choices in this area, all of which are based primarily off the ARM architecture as is common among embedded systems. The primary OS for use would be linux (final robot system should aim to use a headless setup with direct boot into terminal to save computational power on unnecessary GUI renders).
</p>

| CPU/GPU Model |  Description | 
| ---| ----- |
|Raspberry Pi 4 Model B|https://tinyurl.com/yxh4ajjw, $89|
| |1.5 GHz Quadcore CPU (Cortex A-72)|
| |500 MHz VideoCore GPU|
| |4GB DDR4 RAM (customizable to be lower)|
| |64-bit ARMv8 Architecture|
| |Native 40-pin GPIO|
| |88mm by 58mm by 19.5 mm  dimensions|
| |3.4 wattage power consumption |
|Jetson Nano Developer Kit|https://tinyurl.com/y3bowql4, $135|
| |1.43 GHz Quadcore (A-57)|
| |128-core Maxwell GPU|
| |4GB DDR4 RAM|
| |64-bit ARMv8 Architecture|
| |Native 40-pin GPIO|
| |69mm by 45mm by 20mm dimensions|
| |5 - 10 watts power consumption|
|Jetson TX2 Module / Developer Kit|https://tinyurl.com/y23tr6gz, 564 SGD|
| |Dual-core Denver 2 64-bit CPU and |
| |quad-core ARM A57 complex CPU|
| |256-core Maxwell GPU|
| |8 GB 128-bit DDR4 RAM|
| |Native 40-pin GPIO|
| |170mm by 170mm by 30mm|
| |7.5 - 15 watts power consumption|
| ||
| |https://tinyurl.com/y3bvo39k, 301 SGD (Carrier) + 657 SGD (Independent TX2 module)|
| |Compact carrier for TX2. Need to buy the carrier and TX2 modules separately 50mm by 87mm by 30mm |
| |https://tinyurl.com/y4943e3w, 1464 SGD Compact enclosure without GPIO pinouts, but is price-prohibitive.|
| |153mm by 30mm by 101mm.|
|DJI Manifold 2 |https://tinyurl.com/y27yfeyt, 1706 SGD Same specs as TX2 as it uses a TX2 internally.|
| |Not recommended due to price point and its specialized purpose for aerial drones|
| |91mm by 61mm by 34mm|


<p>For optimal budget and wattage, the Jetson Nano is thus one of the best choices for mounting onto the Standard Robot. Since the standard robot is primarily user-controlled, only elementary computer vision techniques will be used for auto-targeting/correction along with gimbal stabilization/control, which the Jetson Nano and Raspberry Pi 4 are both sufficient for. The on-board 128-core GPU of the Jetson Nano may even allow it to run shallow or medium-size neural networks if necessary for object recognition (as a complementary “deep” approach to recognize armour modules alongside traditional computer vision).</p>
<p>Additionally, the dimensions of the TX2 and Manifold may pose a challenge when installing it onto a standard robot. Although the dimensions of the TX2 may be reduced by directly using the CPU/GPU module with third-party board carriers (listed above), it is extremely price prohibitive and thus not recommended. </p>
<p>This proposal hence recommends the use of the Jetson Nano or the Raspberry Pi 4 Model B as the primary onboard computer (in order of preference).</p>

### Proposed Budget


General Design and Fabrication Method
 pic 
 


...
