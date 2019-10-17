# Faucet
This application has the only function to send xem to the required account. This is run on the nem testnet and only one request can be sent every 5 minutes.

## Requirements
To run the application it is necessary to have node js installed to run the server and perform the transactions. It is also necessary to have the nem sdk to be able to carry out the transactions in the blockchain

## Tools
The tools used were html for front end and node js for backend

## Usage
The usability of the application is simple, just enter the address to which you want to send xem, add the desired amount less than 4 and a message which will go into the transaction. If the transaction occurs and you want to get more xem you should wait 5 minutes

# Installation
node js must be installed on the backend side and the nem sdk in order to perform transactions. 
You must enter the password and private key of the account that will work as a faucet in order to perform transactions.

## Run app
In order to run the app, raise the html in a browser and have the server running, the server can be run with the "node main" command. The server must be kept running to continue sending transactions.
