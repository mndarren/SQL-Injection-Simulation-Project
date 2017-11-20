# SQL Injection Simulation Project
=============================================  

Purpose
---------
This project will create a simple web application to simulate SQL Injection attack. This attack pattern is one of the most famous Application level attacks. So we can reduce the risk or avoid this attack happening through optimizing our application code.

Tools
------
Used Eclipse and MySQL

Architecture
-------------
Setting up 3 layers: UI, Logical, and DB<br/>
![alt architecture](https://github.com/mndarren/SQL-Injection-Simulation-Project/blob/master/others/architecture.PNG)

Example
--------
1. Original page<br/>
![alt orig](https://github.com/mndarren/SQL-Injection-Simulation-Project/blob/organize_code/others/test_orig.PNG)
2. Test case 1 (without protection)<br/>
![alt test1](https://github.com/mndarren/SQL-Injection-Simulation-Project/blob/organize_code/others/test1.PNG)
3. Test case 2 (without protection)(password is the same to user name)<br/>
![alt test2](https://github.com/mndarren/SQL-Injection-Simulation-Project/blob/organize_code/others/test2.PNG)
4. Test case 3(without protection)<br/>
![alt test3](https://github.com/mndarren/SQL-Injection-Simulation-Project/blob/organize_code/others/test3.PNG)
5. Test case 5 (repeat 3 with protection)<br/>
![alt test5](https://github.com/mndarren/SQL-Injection-Simulation-Project/blob/organize_code/others/test5.PNG)
6. Test case 6 (repeat 2 with protection)<br/>
![alt test6](https://github.com/mndarren/SQL-Injection-Simulation-Project/blob/organize_code/others/test6.PNG)
7. Test case 7(repeat 4 with protection)<br/>
![alt test7](https://github.com/mndarren/SQL-Injection-Simulation-Project/blob/organize_code/others/test7.PNG)
8. Test case 8(Common user login)<br/>
![alt test8](https://github.com/mndarren/SQL-Injection-Simulation-Project/blob/organize_code/others/test8.PNG)

Notes
------
1. In others folder, the related MySQL code is located there.
2. If anyone wants to try this project code, the API of MySQL DB should be modified by the file: WebContent/META-INF/context.xml.
3. This project needs to run on the Web Server Tomcat.