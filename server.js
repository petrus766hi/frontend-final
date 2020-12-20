// //Install express server
const express = require('express');
// const path = require('path');

// const app = express();

// // Serve only the static files form the dist directory
// app.use(express.static(__dirname + '/dist/betta-fish'));

// app.get('/*', function(req,res) {

// res.sendFile(path.join(__dirname+'/dist/index.html'));
// });

// // Start the app by listening on the default Heroku port
// app.listen(process.env.PORT || 8080);

const _port = 8080;
const _app_folder = 'dist/';
const app = express();

// ---- SERVE STATIC FILES ---- //
app.get('*.*', express.static(_app_folder, { maxAge: '1y' }));

// ---- SERVE APLICATION PATHS ---- //
app.all('*', function (req, res) {
  res.status(200).sendFile(`/`, { root: _app_folder });
});

// ---- START UP THE NODE SERVER  ----
app.listen(process.env.PORT || _port, function () {
  console.log('Node Express server for ' + app.name + ' listening on http://localhost:' + _port);
});
