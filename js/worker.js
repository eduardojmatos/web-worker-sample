// worker.js
self.addEventListener('message', function(e) {
  self.postMessage( sqrt(e.data) );
}, false);

self.sqrt = function ( val ) {
  var result = parseInt(Math.sqrt(val), 10);

  for ( var i=0; i<50000; i++ ) {
    console.log("i: " + i);

    if ( i === 50000-1 ) return result ? result : "Invalid number";
  }
};
