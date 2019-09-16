# NUS Titan
## General plan
First edition

## Team 
- Team name: NUS Titan
- Member: Lim Zhi Sheng Andre, Loh Yuan Ting Kevin, Sylvain Riondet, Jeremy Chew Xuan Yu, Nguyen Ngoc Gia Bao
- Diversity: We need each robot to have a good codesign between mechanics, electronics, programming and automation. Maybe even controlling/playing. As such, when creating the team, we aim to have at least one person from each of the 3 main engineering disciplines (Mechanical, Electrical and Computer).
- Learning: Need to have 1-2 year students besides each older student, helping them in basic tasks (assembling, soldering, writing docs for programs) and learning from them for future years. Cooperation and integration between members will lead to many opportunities for each team member to learn about other aspects of the robot.
- Eventually, each person should be associated to 2 teams based on his strengths, interests and disciplinary
  - a robot (hero, engineer, ...).
  - a function/speciality (shooting/vision, chassis, programming, strategy).

## Timeline

## Budget
Per robot / per discipline (mecha/elec/devices)


Component
Qty
Price
Total price
Link
Mechanical
Chassis (CF)
1
$500
$500


Mecanum wheel
4
$200
$800


Motor
4
$100
$400


Suspension
4
$20
$80


Turret
Gimbal motors
2
$40
$80


Launcher
1
$200
$200


Electrical
Battery
1
$200
$200


Power distribution
?


$50


ESC
4
$50
$200


Computing
Intel NUC
1
$1000
$1000


MCU
1
$70
$70


Camera
1
$200
$200


Depth camera
1
$300
$300








$4080




## Design choices
### Mechanics
- Motion
Very sturdy chassis (steel/aluminium) so that the robot can jump over ramps without sustaining significant damage.
Lightweight higher parts (low gravity center, low inertia) for more stability
Need for suspension - incase of gap and jumping over the ramp
- Battle
Protect all parts against enemy bullets (especially moving parts, gears, electronics)
  - Maybe design a “shell”, put on top to protect as much as possible
  - Heavy parts at the bottom (battery, chassis)

### Electronics
ROS on a combination of NVidia / NUC / Compute stick
Uniform design across robots, except maybe drone for maintenance speed and convenience. 
Power monitoring for the board and power-hungry peripherals.
Power board for motors/ actuators.

### Programming
Distribute power to shooting (vision+motor) > moving 
As general as possible (common to all robots, can change platform), starting with newest versions to avoid updates

## Technologies

### Ideas

- Multi robot target tracking (use information from multiple robots to find target)
- Laser fixed on drone pointing at enemies 
Aim assist
CV to detect trajectory, then compensate
Incoming projectiles detection:
Camera could detect enemies' canons and their orientation
Robots could accordingly “hide” their vulnerable parts (rotating).
Artillery
Spin stabilize the launcher
Stationary robot, base is spinning while canon is static:
Video feedback should have a stationary mode, while it is actually spinning (refresh the video feed only when the camera actually crosses a fixed absolute angle)
