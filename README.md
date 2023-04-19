Here are all files for working app (!!! .ENV MUST BE HERE, I especcially didn't add them to .gitignore). 

to run app steps:
 - go to root folder "jobs" and from terminal run "npm start" to run cron task, in terminal should appear "Cron started" - that means that cron started  to run parser back (next step)
 - go to root folder "devit-parser" and from terminal run "npm run dev" to parse xml and save it in mongodb,
 - go to root folder "devit-be" and from terminal run "npm run dev" to run app backend,
 - finally go to root folder "devit-fe" and from terminal run "npm start" to run front-end,
 
 app works on link http://localhost:3000
