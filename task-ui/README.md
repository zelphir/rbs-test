## Setup
If you didn't run `yarn` in the root as specified in the main `README` you can still run it here. But in order to run the json server this command must be executed in the root.

### Develop
Run `yarn start` or `npm run start` to start the webserver in dev mode with hot reloading (thanks to `parceljs`). This command will also start in background the `json-server` needed for the `transactions` API.

### Tests
Run `yarn test` to run the test. You can also run the tests in watch mode runnin `yarn test:watch` or `yarn test --watch`. To see the test coverage run `yarn test --coverage`. All the tests are using the `jest` framework.

### Build
Simply run `yarn build`, this will generate an optimized and minified version of the app. You can also check the production version running `yarn serve`. This will run `yarn build` under the hood and serve the static files at `localhost:5000`
