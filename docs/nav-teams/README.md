# Introduction of Teams

Registration for NUS RoboMaster Team is open until __16th September 2019__. All participants have to register as a team, not as individuals. 

If you have read the 2019 rules, you may understand that there are 7 robots to be built in total. As it is the first year we are joining the competition, we have absolutely zero existing assets.

Therefore, we are breaking up all NUS participants into several teams (around 5 ~ 7) teams, each responsible to build one type of robot, mostly independently. We believe this is the fastest way to get us operation-ready, as our timeline is tight!

Since require each team to be able to operate independently, hence a good mix of talents from all disciplines would be beneficial.

## Register as Team (IMPORTANT)

Deliverables by  __16th September 2019__:
- __Registration form__ with 3 ~ 5 core team members' particulars, email to [Ms Suzanne](mailto:engkohs@nus.edu.sg)
    - The team could autonomously recruit more people upon successful registration
- Assign one person to be in the __RoboMaster Room Committee__ (indicating in the form above)
- Assign one person to be responsible to manage Git and GitHub. Create a __web page__ under the Teams Page, and Include:
    - Self introductions
    - 1 Standard Robot General Proposal (equivalent to a 5-page A4 Word document with 12 Font size)

The point of the registration process is not to force you to fix your team members. It is a practice for you to work with a team to tell a complete story, and to show your understanding of the competition to your best knowledge. It needs not to be technically comprehensive, but the team should demonstrate good understanding of the design goals and physical constraints.

### Notes on RoboMaster Room Committee

The responsibility of the person is to:
- Conceive collectively for a overval NUS team name and slogan
- Arrangement for wall deco, sofa, chairs, water dispenser etc. to make our place cosier
- Keep a record of the assets of the team in the Room
- Ensure room safety

### Notes on The Web Page

__Using Git__

Git Version Control is very important in managing digital work of the team. It is worth learning if no one in the team knows it yet.

The website we are using is created by VuePress, which is a web generator from Markdown language. Markdown is very simple to learn (in minutes) hence you dont need to know much html to start writing web pages!

To upload your team web page, follow the following step:
- Clone the repository: https://github.com/nusrobomaster/nusrobomaster.github.io
- Make sure you are on `docs` branch
- [__Important__] checkout a new branch for example `dev/your-team-name`
- Create a `your-team-name.md` file under `nav-teams` folder
- Commit changes as you like
- In the meanwhile, wait for your github username to be added as collaborators
- Push your changes to the remote server when ready
- Make a pull request, from your `dev/your-team-name` branch to `docs` branch
- Once the pull request is approved, the website will be automatically updated by Travis CI, happy surfing!


__Using VuePress Locally__

When you are creating your `your-team-name.md`, you would like to preview how the web page is generated. Yes, you can! This is how you do it.

On Linux machine:
- make sure nodejs and npm is installed
- in the git top folder, execute `npm install`, this will install the javascript dependencies
- then, execute `npm serve`, and follow the instructions to open the localhost link, to see the preview!

__Content Guideline__

- Self introductions
- Proposed manpower arrangement
- Proposed timeline and milestones
- Key aspects of the robot to consider (publicly available past competition resources might help)
- General design and fabrication methods
- Proposed budget


