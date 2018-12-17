# What is the Application about? </br>
- This is totally a ServerSide Node.js Project that is used for Tokanization for Logged-in user </br>
- This application assumes the Mongo-DB already installed in your machine, so make sure to install in before running the application </br>



#How to Start a server
npm run dev

#url
http://localhost:3090            [Get]
http://localhost:3090/signup    [Post]


http://localhost:3090/signin    [Post]
=> Go to postman and give url "http://localhost:3090/signup"
=> put "content-type"  as "application/json" on header
=> In body section, put below json :
    {
      "email":"yourname@gmail.com",
      "password": "password"
    }
=> Now hit Send, this will create new user into a database
