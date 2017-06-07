// var
var chokidar = require('chokidar');


// watcher
chokidar.watch('.', {
    ignored: /(^|[\/\\])\../,
    awaitWriteFinish: {
      stabilityThreshold: 100,
      pollInterval: 100
    },
  }).on("all", (event, path) => {
  console.log(event, path);
  });
