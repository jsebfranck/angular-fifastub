Project build from angular-seed project.

# Commands

### Install bower and npm dependencies
```
npm install
```

### Install and run mongodb
```
brew install mongodb
mongod
```

### Run the Application

```
npm start && node server/server.js
```

Now browse to the app at `http://localhost:8000/app/index.html`.

### Launch unit tests

```
npm test
```

or for a single execution :

```
npm run test-single-run
```

### Launch end to end tests

```
npm start
npm run update-webdriver
npm run protractor
```
