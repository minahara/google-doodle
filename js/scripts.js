var scar = $('svg').drawsvg({
  duration : 2000,
  
});


// Animate SVG points
scar.drawsvg('animate');
//random number genorator
var limit = 3;
var randNum = Math.floor(Math.random() * limit);
console.log(randNum);

//Get random body class
//Change background color
$('body').addClass('bg' + randNum);