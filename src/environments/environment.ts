// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDMkdzLESxT8cv0oNa8UjXG8K6TYJTpLsg',
    authDomain: 'angularejemplo-12.firebaseapp.com',
    databaseURL: 'https://angularejemplo-12.firebaseio.com',
    projectId: 'angularejemplo-12',
    storageBucket: 'angularejemplo-12.appspot.com',
    messagingSenderId: '167308196581'
  }
};
