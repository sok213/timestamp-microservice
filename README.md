# Timestamp Microservice
 Takes a string as a parameter and returns a unix time stamp and natural language date.

#### Prerequisites 

* Node v7.2.1

#### Run the application 
   
    npm install

#### Example usage

`http://localhost:8080/november%202%202010`

`http://localhost:8080/1288681200`

#### Example output

`{"unix":1288681200,"natural":"November 2, 2010"}`