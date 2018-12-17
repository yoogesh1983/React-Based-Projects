# What is the Application about? </br>
- This is totally a ServerSide Node.js Project that is used for Tokanization for Logged-in user </br>
- This application assumes the Mongo-DB already installed in your machine, so make sure to install it before running the application </br>

# How to run the Application? </br>
> npm install </br>
> npm run dev </br>

The application can now be browsed at following: </br>
> http://localhost:3090 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [Get] </br>
> http://localhost:3090/signup &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; [Post] </br>
> http://localhost:3090/signin  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  [Post] </br>

Do the folloiwng steps to run it on PostMan: </br>
> Go to postman and give url http://localhost:3090/signup </br>
> Choose Post </br>
> Put "content-type"  as "application/json" on header </br>
> In body section, put below json : </br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{ </br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"email":"yourname@gmail.com", </br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"password": "password" </br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} </br>
>Now hit Send, this will create new user into a database </br>
