/* Author:
 David Carter
 much thanks to Paul Irish for his MothereffingHSL

*/
var cv  = $('#canvas').get(0);
var ctx = document.getElementById('canvas').getContext('2d');

var loopOne = 1;
var loopTwo = 1;

// Defaults
var numPoints = 15000;
var spiroOne = 10.23;
var spiroTwo = 6.64;
var spiroThree = 1.52;
var spiroFour = -4.61;
var spiroFive = 7.34;
var spiroSix = 0.2;
var spiroSeven = 10;

var spiroColor = "#006622";
var spiroBackgroundColor = "#F0F0F0";

cLineWidth = .5;

var baseNumPoints = 0;
var slowBurnStatus = true;
var staticDrawing = true;

var width = ctx.width;
var height = ctx.height;

// num of elements
var numEl = 5;

var randomMode = false;

$("#numPoints, #numPointsBottom").spinner({
  spin : function(e) {
    numPoints = $(this).val();
    makeItSo(e);
  },
  stop : function(e) {
    numPoints = $(this).val();
    makeItSo(e);
  },
  change : function(e) {
    numPoints = $(this).val();
    makeItSo(e);
  }
});

$("#spiroOne, #spiroOneBottom").spinner({
  numberFormat : "n",
  step : 0.01,
  spin : function(e) {
    spiroOne = $(this).val();
    makeItSo(e);
  },
  stop : function(e) {
    spiroOne = $(this).val();
    makeItSo(e);
  },
  change : function(e) {
    spiroOne = $(this).val();
    makeItSo(e);
  }
});
$("#spiroTwo, #spiroTwoBottom").spinner({
  numberFormat : "n",
  step : 0.01,
  spin : function(e) {
    spiroTwo = $(this).val();
    makeItSo(e);
  },
  stop : function(e) {
    spiroTwo = $(this).val();
    makeItSo(e);
  },
  change : function(e) {
    spiroTwo = $(this).val();
    makeItSo(e);
  }
});
$("#spiroThree, #spiroThreeBottom").spinner({
  numberFormat : "n",
  step : 0.01,
  spin : function(e) {
    spiroThree = $(this).val();
    makeItSo(e);
  },
  stop : function(e) {
    spiroThree = $(this).val();
    makeItSo(e);
  },
  change : function(e) {
    spiroThree = $(this).val();
    makeItSo(e);
  }
});
$("#spiroFour, #spiroFourBottom").spinner({
  numberFormat : "n",
  step : 0.01,
  spin : function(e) {
    spiroFour = $(this).val();
    makeItSo(e);
  },
  stop : function(e) {
    spiroFour = $(this).val();
    makeItSo(e);
  },
  change : function(e) {
    spiroFour = $(this).val();
    makeItSo(e);
  }
});
$("#spiroFive, #spiroFiveBottom").spinner({
  numberFormat : "n",
  step : 0.01,
  spin : function(e) {
    spiroFive = $(this).val();
    makeItSo(e);
  },
  stop : function(e) {
    spiroFive = $(this).val();
    makeItSo(e);
  },
  change : function(e) {
    spiroFive = $(this).val();
    makeItSo(e);
  }
});
$("#spiroSix, #spiroSixBottom").spinner({
  numberFormat : "n",
  step : 0.01,
  spin : function(e) {
    spiroSix = $(this).val();
    makeItSo(e);
  },
  stop : function(e) {
    spiroSix = $(this).val();
    makeItSo(e);
  },
  change : function(e) {
    spiroSix = $(this).val();
    makeItSo(e);
  }
});

$( "#line-width-slider" ).slider({
  min : 0.1,
  max : 10,
  step : 0.1,
  change : function(e) {
    cLineWidth = $(this).slider("value");
    $("#lineWidthCounter").val($(this).slider("value"));
    makeItSo(e);
  },
  slide : function(e) {
    cLineWidth = $(this).slider("value");
    $("#lineWidthCounter").val($(this).slider("value"));
    makeItSo(e);
  },
  stop : function(e) {
    cLineWidth = $(this).slider("value");
    $("#lineWidthCounter").val($(this).slider("value"));
    makeItSo(e);
  }
});


var slowBurn = function() {
    numPoints = baseNumPoints;
    
    setInterval(function() {
        if (numPoints < $("#numPoints").val()) {
            makeItSo();
            if (slowBurnStatus) {
                numPoints++;
            } else {
                staticDrawing = true;
            }
            $("#numPointsCounter").val(numPoints);
            staticDrawing = false;
        } else {
            return;
        }
    }, 1);
    staticDrawing = true;
}

$("#slow-burn-stop").click(function() {
    slowBurnStatus = false;
    baseNumPoints = $("#numPointsCounter").val();
    $("#undo").prop('disabled', false);
    slowBurn();
});


$("#slow-burn").click(function() {
    slowBurnStatus = true;
    baseNumPoints = 0;
    $("#undo").prop('disabled', true);
    slowBurn();
});

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(rgbArr) {
  var result = "";
  for (var i = 0; i < rgbArr.length; i++) {
      result += componentToHex(parseInt(rgbArr[i]));
  }
  return result;
}

function toHex(rgb) {
  rgb = rgb.slice(4, -1);
  rgb = rgb.split(",");
  return rgbToHex(rgb);
}

$("#random-spiro").click(function() {
  numPoints = Math.floor(Math.random()*20000+1000);
  $("#numPoints, #numPointsBottom").val(numPoints);

  spiroOne = (Math.random()*15).toFixed(2);
  $("#spiroOne, #spiroOneBottom").val(spiroOne);

  spiroTwo = (Math.random()*15).toFixed(2);
  $("#spiroTwo, #spiroTwoBottom").val(spiroTwo);

  spiroThree = (Math.random()*3.5).toFixed(2);
  $("#spiroThree, #spiroThreeBottom").val(spiroThree);

  spiroFour = (Math.random()*-10).toFixed(2);
  $("#spiroFour, #spiroFourBottom").val(spiroFour);

  spiroFive = (Math.random()*10).toFixed(2);
  $("#spiroFive, #spiroFiveBottom").val(spiroFive);

  spiroSix = (Math.random()*0.7).toFixed(2);
  $("#spiroSix, #spiroSixBottom").val(spiroSix);

  randomColor();
  makeItSo();
});

// color
function changeColor(e){
  spiroColor = e.target.value;
  makeItSo(e);
};

function changeBackgroundColor(e){
  spiroBackgroundColor = e.target.value;
  makeItSo(e);
};

function randomColor(e) {
  spiroColor = 'rgb(' + Math.floor(Math.random()*255) + ',' +
                          Math.floor(Math.random()*255) + ',' + Math.floor(Math.random()*255) + ')';
  var newColor = toHex(spiroColor);
  singleColor.color.fromString(newColor);
  makeItSo(e);
}

var singleColor = document.getElementById("single-color");
var backgroundColor = document.getElementById("background-color");
var rando = document.getElementById("random-color");

$(singleColor).bind('blur focus', changeColor);
$(backgroundColor).bind('blur focus', changeBackgroundColor);
$(rando).bind('click', randomColor);

var history = [];

// document.querySelector('input[type="checkbox"]').addEventListener('change', function(e){
//   randomMode = e.target.checked;
// }, false);

// $('button:first').click(function f(e){
//    f.on = !f.on;
//    e.target.innerHTML = f.on ? 'what does it mean?' : 'all the way';
//    RAINBOWZ(f.on);
// });

// $('button:last').click(function f(e){
//    f.on = !f.on;
//    e.target.innerHTML = f.on ? 'nvm.' : '3D';
//    threeD(f.on);
// });


function makeItSo(e){
    // var ctx = document.getElementById('canvas').getContext('2d');
    if (staticDrawing) {
        history.push(cv.toDataURL());
    }
    ctx.beginPath();
    ctx.fillStyle = spiroBackgroundColor;
    ctx.fillRect(0,0,700,700);
    ctx.save();
    ctx.lineWidth = cLineWidth;
    ctx.strokeStyle = spiroColor;
    ctx.translate(350,350);

    drawSpirograph( ctx,
      spiroOne * ( spiroTwo ) / ( spiroThree ),
      spiroFour * ( spiroFive ) / ( spiroSix ),
      spiroSeven );
    ctx.restore();
}

$("#undo").click(function() {
  ctx.beginPath();

  var img = new Image;

  img.onload = function() {
    ctx.clearRect(0, 0, 600, 600);
    ctx.drawImage(img, 0, 0);
  };

  // pop twice since there are two canvases
  if (history.length > 2) {
    img.src = history.pop();
    img.src = history.pop();
  } else {
    img.src = initialImg;
  }
});

function drawSpirograph(ctx,R,r,O){
    var x1 = R-O;
    var y1 = 0;
    var i  = 1;
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    for (i; i < numPoints; i++) {
        var x2 = (R+r)*Math.cos(i*Math.PI/72) - (r+O)*Math.cos(((R+r)/r)*(i*Math.PI/72))
        var y2 = (R+r)*Math.sin(i*Math.PI/72) - (r+O)*Math.sin(((R+r)/r)*(i*Math.PI/72))
        ctx.lineTo(x2,y2);
        x1 = x2;
        y1 = y2;
    }
    ctx.stroke();
}

makeItSo();

var initialImg = cv.toDataURL();

$("#toImage").click(function() {
  spiroBackgroundColor = "rgba(255,255,255,1)";
  makeItSo();
  var canvas = document.getElementById('canvas');
  var img = canvas.toDataURL("image/png");

  var imageDiv = $("#image-preview");
  imageDiv.html('<img id="spiro-img" src="'+img+'"/>');
  imageDiv.slideDown();

  window.setTimeout(function() {
    window.scrollTo(0,document.body.scrollHeight);
  }, 500);

  spiroBackgroundColor = "#F0F0F0";
  makeItSo();
});

$("#code-reveal").click(function() {
    $("#code-display").slideToggle();
});