# E-lection API

This app will serve as the backend api server for a voting blockchain app.

## Technologies

* Node 18.14.2
* Koa 2.14.1
* Typescript 5.0.3
* NPM 9.5.0

## Development Setup

Install [nvm](https://github.com/nvm-sh/nvm) and then install node 18.14.2 using it

    nvm i 18.14.2

Clone the project

    git clone https://<github-access-token>@github.com/e-lection/api.git

Go to the project directory

    cd api

Install dependencies

    npm i

Install truffle globally

    npm i -g truffle

Download and install [Ganache](https://trufflesuite.com/ganache)

Configure private blockchain network using Ganache

* Click on new workspace

  <img width="1196" alt="image" src="https://user-images.githubusercontent.com/54504931/230866831-305d7710-1abd-4686-b43b-0a8712726ddd.png">

* Rename the workspace and click on **Add Project**

  <img width="1200" alt="image" src="https://user-images.githubusercontent.com/54504931/230867033-bfaa1c88-49aa-4853-b539-e370b23c2fe1.png">

* Select `truffle-config.js` from file browser

  <img width="642" alt="image" src="https://user-images.githubusercontent.com/54504931/230870034-e3e99ff4-ea96-4aa1-81ee-5d7aee4253d6.png">

* Click on **Start** button

    <img width="1199" alt="image" src="https://user-images.githubusercontent.com/54504931/230868415-aba33267-d634-4d38-bf59-d9fe2827abf8.png">

* After that this screen will be visible

  <img width="1198" alt="image" src="https://user-images.githubusercontent.com/54504931/230868659-68681a38-acad-41d9-80c6-f2bf1b1cd703.png">

* Run the migration to upload the contracts to the Ganache server

  truffle migration

* Verify the uploaded contract from the Contract tab

  <img width="1197" alt="image" src="https://user-images.githubusercontent.com/54504931/230869613-e1268239-f54e-452a-a5af-c953d27472a4.png">

Start the app

    npm start
