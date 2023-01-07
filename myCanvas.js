
var canvas = document.getElementById("myCanvas");
  var ctx = canvas.getContext("2d");
  var x = 50;
  var y = 50;
  var radius = 20;
  var dx = 2;
  var dy = 4;

  function update() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update the position of the circle
    x += dx;
    y += dy;

    // Check for collisions with the edges of the canvas
    if (x + radius > canvas.width || x - radius < 0) {
      dx = -dx;
    }
    if (y + radius > canvas.height || y - radius < 0) {
      dy = -dy;
    }

    // Draw the circle
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();
  }

  setInterval(update, 1000 / 60); // 60 times per secondd
