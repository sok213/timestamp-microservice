<<<<<<< HEAD
# Timestamp Microservice
 Takes a string as a parameter and returns a unix time stamp and natural language date.

#### Prerequisites 

* Node v7.2.1

#### Run the application 
   
    npm install
=======
## URL Shortener

This application will take a URL and respond with a shortened version via a JSON response.

### How to run locally

Prerequisites

* Node v7.2.1^

Run the application.

    npm install
    npm run build
>>>>>>> 6a08947bac63f29f2f9a5c476f41168b007c1698
    npm start

#### Example usage

<<<<<<< HEAD
`http://localhost:8080/november%202%202010`

`http://localhost:8080/1288681200`

#### Example output

`{"unix":1288681200,"natural":"November 2, 2010"}`
=======
`https://honey-i-shrunk-the-url.herokuapp.com/www.google.com`

#### Example output

`{"original_url":"www.google.com","short_url":"https://honey-i-shrunk-the-url.herokuapp.com/3cd035"}`


>Note: "Shortened" version of the URL is not actually shorter than originally provided URL. This project is intended to simulate how to chain two links together and store the pair of URL addresses via MongoDB. 
>>>>>>> 6a08947bac63f29f2f9a5c476f41168b007c1698
