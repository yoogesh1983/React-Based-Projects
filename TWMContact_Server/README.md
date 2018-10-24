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
      "email":"sushila@gmail.com",
      "password": "aaghaz1"
    }
=> Now hit Send, this will create new user into a database
