const concurrently = require('concurrently');

const { result } = concurrently([
  "npm run serve",
  "npx jest",
  "node ./e2e/timeout.js",
], {
  prefix: 'name',
  killOthers: ['failure', 'success'],
})

result.then(
    function onSuccess(exitInfo) {
      // This code is necessary to make sure the parent terminates 
      // when the application is closed successfully.
      process.exit();
    },
    function onFailure(exitInfo) {
      // This code is necessary to make sure the parent terminates 
      // when the application is closed because of a failure.
      process.exit();
    }
  );