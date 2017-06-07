// var
var chokidar = require('chokidar');


// watcher
watcher = chokidar.watch('//MIBOX3_5378/internal storage/Download', {
    persistent: true,
    ignoreInitial: true,
    usePolling: true,
    awaitWriteFinish: {
      stabilityThreshold: 100,
      pollInterval: 100
    }
  });


watcher.on('all', function(path) {
  console.log(path, 'added')
  });
