const { main } = require('./cli');

// Use env file for defaults?
// Parse optional command line arguments?

main().then(() => {
  console.log('Bye :)');
}).catch(() => {
  console.log('Bye...');
});
