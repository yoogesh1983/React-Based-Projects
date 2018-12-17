# What is the Application about? </br>
- This is a <b>Server-side-rendered</b> React Application that uses <b>REDUX</b> as a State Management tool </br>
- This application creates chunks of js and css files when compile </br>
- Unlike TWMContact_SSR , You can use your own css styles here. You can also use third party css library like Bootstrap here, but for that you need to pass css via Index.js under "init" folder (which is done here) and may get issue when try to use via ClientSide i.e. from Entry_Client.js (Which you could do in TWMContact_SSR) </br>

# How to run the Application? </br>
> npm install </br>
> npm run dev </br>
> if first time, close the server by using ctrl+C and re-do npm run dev (Since css will not update firsttime. Bug!!) </br>

The application can now be browsed at http://localhost:3000/ </br>

if not run successfully, You may need to do the following installation</br>

> npm install phantomjs-prebuilt@2.1.16 --ignore-scripts </br>
> npm install npm-run-all --save-dev </br>
> npm install -g nodemon </br>

# How to clone a project (Using VisualStudio Code) </br>
> Ctrl+Shift+p </br>
> git clone </br>
> Enter a URL </br>
> select a folder you want to save the the project into your local</br>
> Close the project from Visual code and again open the particular project inside the folder i.e. REACTCONTACT_SSR </br>

Run a following command to commit git from visualcode (Otherwise it will not show the username password modal popup) </br>
> git config --global user.email "yoogesh1983@gmail.com" </br>
> git config --global user.name "Yoogesh"</br>
