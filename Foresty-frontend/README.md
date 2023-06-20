<h1>FORESTY</h1>
A solution to tackle climate change and protect our environment.
<br/>
<br/>
With the rising global temperature, ice caps are melting and sea level is rising. Planting Trees is the only option to save planet Earth.
We developed a web application where users can upload the data of the tree they have planted. This will help us to keep track of the progress of the sapling. Users can also upload the water data. By doing so a sapling could grow into a tree and join the battle to save earth. Users can earn reward points for both watering and planting trees. Reward points can be redeemed in our rewards store. This will motivate our users to plant and water trees regularly.

# Want to contribute to this awesome project and be a part of Foresty?
 Follow this developer guide to get started. You can add new functionalities, fix bugs, or improve documentation. Everyone is welcome to contribute and all ideas are appreciated. 

 ## Setting up your local development environment

 ### 1. Clone or Fork the repository [Foresty](https://github.com/officialasishkumar/Foresty).

 For cloning run the following command in your terminal:

 ```
    git clone https://github.com/officialasishkumar/Foresty.git
```

To create a fork of [Foresty](https://github.com) repository, click on the fork button on the top right corner of the repository page. This will create a copy of the repository in your account. Now clone the forked repository to your local machine.

```
    git clone https://github.com/{your_username}/Foresty.git
```

### 2. Install the dependencies
Navigate to the project directory and install the dependencies using the following command:

```
    npm install
```
### 3. Providing the API keys
To run the project, you need to provide the API keys. Rename the file `.env.example` to `.env` and provide the API keys.
Following are the API keys required:
1. `REACT_APP_MAPBOX_TOKEN` : Mapbox API key
2. `REACT_APP_GOOGLE_LOGIN_CLIENT_ID` : Google login client ID, you can obtain it from [here](https://developers.google.com/identity/sign-in/web/sign-in)
3. `REACT_APP_SANITY_PROJECT_ID` : Sanity project ID. Setup a sanity project by following the sanity guide [here](https://www.sanity.io/docs/create-a-sanity-project). Copy the project ID from the sanity dashboard and paste it in the `.env` file.
4. `REACT_APP_SANITY_TOKEN` : Sanity token. You can obtain the token from the sanity dashboard. Go to the `API` tab and click on `Create a new token`. Copy the token and paste it in the `.env` file.
5. `REACT_APP_AQI_TOKEN` : Air quality index token. You can obtain the token from [here](https://aqicn.org/data-platform/token/#/). Copy the token and paste it in the `.env` file.
6. `REACT_APP_IPGEO_TOKEN` : IP Geolocation token. You can obtain the token from [ipgeolocation](https://ipgeolocation.io/). Copy the token and paste it in the `.env` file.

### 4. Configuring Sanity Studio
Sanity studio is used to manage the content of the website. To configure sanity studio, clone the [Foresty Backend](https://github.com/officialasishkumar/ForestyBackend) repository:
```
    git clone https://github.com/officialasishkumar/ForestyBackend.git
```

Navigate to the `ForestyBackend` directory and install the dependencies using the following command:
```
    npm install
```

Change the `projectId` field in the `sanity.cli.js` and `sanity.config.js` file to the project ID you obtained from the sanity dashboard. Also update the `dataset` field in these 2 files to the dataset you are using from your sanity manage dashboard. Now run the following command to start the sanity studio:
```
    npm run dev
```
A new tab will open in your browser with the sanity studio running on `localhost:3333`. You can login to the studio using your google or github account. Now you can manage the content of the website.

### 5. Run the project

To run the project, use the following command in the _Foresty_ directory:

```
    npm start
```
A new tab will open in your browser with the project running on `localhost:3000`.

## Contributing to the project

 ### 1. Create a new branch

 Create a new branch from your forked repository for every issue you are working on. To create a new branch, run the following command:

 ```
    git checkout -b <branch_name>
 ```

 ### 2. Commit your changes

 Make the changes and commit them. To commit your changes, run the following command:

 ```
    git add .
    git commit -m "commit message"
 ```

 ### 3. Push your changes

 Push your changes to the remote repository. To push your changes, run the following command:

 ```
    git push origin <branch_name>
 ```

 ### 4. Create a pull request

 Go to the repository page and click on `Compare & pull request` button. Add a title and description to your pull request that explains your changes. Click on `Create pull request` button to create a pull request.

 ### 5. Wait for the review

 Wait for the review from the maintainers. If there are any changes required, make the changes and push them. The maintainers will review the changes and merge the pull request if everything is fine.

 ## Code of Conduct

 We follow the [Contributor Covenant](https://www.contributor-covenant.org/) as our Code of Conduct. Please read the Code of Conduct.

 ## Facing any problem?

If you are facing any problem, feel free to ask us. You can reach me on LinkedIn at [Asish Kumar](https://www.linkedin.com/in/asish-kr/) or create an issue on the [Foresty](https://github.com/officialasishkumar/Foresty) repository.
