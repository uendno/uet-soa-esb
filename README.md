# uet-soa-esb

Requirements:
- node.js
- Anypoint Studio

Runing:
- Import source code in the folder "esb/hello" to anypoint studio and run as an Anypoint Application
- Go to the folder "consumer" and run the app using "npm start". The same with the "hello" and "downcase" app
- Go to localhost:3000/{YOUR_NAME} and watch the response

Explaination:
- "consumer" app is the api consumer
- "hello" app attachs "Hello, " to your string
- "downcase" app converts your string to lower case
- The project in "esb/hello" is an ESB which forwards your requests to get things done
