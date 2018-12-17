# What is the Application about? </br>
- This is a <b>Server-side-rendered</b> React Application that uses <b>REDUX</b> as a State Management tool. </br>
- This application creates single bundle.js but does not generate bundle for CSS files for which reason you cannot use your own css styles and you need to reley on BootStrap that renders on ClientSide on Entry_Client.js and/or Index.js under "init" folder.</br>
- Since it generates a single bundle.js for all javaScript files, browser needs to download the whole bundle even if a single line of the file needs to be read


# How to run the Application? </br>
> npm install </br>
> npm run dev </br>
The application can now be browsed at http://localhost:3000/ </br>


# How to clone a project (Using VisualStudio Code) </br>
> Ctrl+Shift+p </br>
> git clone </br>
> Enter a URL </br>
> select a folder you want to save the the project into your local</br>
> Close the project from Visual code and again open the particular project inside the folder i.e. TWMCONTACT_SSR </br>

Run a following command to commit git from visualcode (Otherwise it will not show the username password modal popup) </br>
> git config --global user.email "yoogesh1983@gmail.com" </br>
> git config --global user.name "Yoogesh"</br>
