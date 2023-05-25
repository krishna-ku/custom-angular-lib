How you can create a package and publish it globally
The version I am using currently is Angular 15 maybe its differ in your system

---------------------------------steps for creating and publish globally--------------------------------------- 

step 1 - create your account on npm registry Link - https://www.npmjs.com/
step 2 - create a new angular project or in existing project you can run command inside the project folder (ng generate library your-library-name)
step 3 - Do what you want to offer in your package like you like to create a login form and publish it globally or whatever you want you can do that
step 4 - create a build of your file command ( ng build your-library-name )

step 5 - Run ng adduser command in vs or cmd where you working then it will give you option to enter and redirect you to the login page of npm registry then login and come to vs or cmd where you working

step 6 (optional) - you can also check that you are login in npm registry or not by command ( npm whoami )
step 7 - Go to the folder where your build is generated mine in inside dist folder maybe yours is also in same so go in dist folder by ( cd dist/your-library-name )
step 8 - Run command npm publish

--------------------------------------------Process End--------------------------------------------

for installing my library run comman npm i change-bg-color

Tag which you can use is <lib-change-bg-color></lib-bg-color> like this 

---------------------------------------------------------------------------------------------------
                                              Thank you