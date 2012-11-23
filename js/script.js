/* Author:
 David Carter
 much thanks to Paul Irish for his MothereffingHSL

*/
var cv  = $('#canvas').get(0);
var ctx = document.getElementById('canvas').getContext('2d');

var loopOne = 1;
var loopTwo = 1;

// Defaults
var numPoints = 20000;
var spiroOne = 9;
var spiroTwo = 9;
var spiroThree = .5;
var spiroFour = -8;
var spiroFive = 10;
var spiroSix = 0.7;
var spiroSeven = 10;

var spiroColor = "#EE8857";
var spiroBackgroundColor = "#F9F9F9";

var topDiv = $("div.wrapper");

// if (!('canvas' in document.body.style)) {
//   document.querySelector('fieldset').style.display = 'none';
//   document.querySelector('canvas').style.display = 'none';
//   topDiv.innerHTML = 'Your browser doesn\'t support canvas. :(';
// }

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
  // "value" : $(this).val()
});

$("#spiroOne, #spiroOneBottom").spinner({
  numberFormat : "n",
  step : 0.1,
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
  // "value" : $(this).val()
});
$("#spiroTwo, #spiroTwoBottom").spinner({
  numberFormat : "n",
  step : 0.1,
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
  // "value" : $(this).val()
});
$("#spiroThree, #spiroThreeBottom").spinner({
  numberFormat : "n",
  step : 0.1,
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
  // "value" : $(this).val()
});
$("#spiroFour, #spiroFourBottom").spinner({
  numberFormat : "n",
  step : 0.1,
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
  // "value" : $(this).val()
});
$("#spiroFive, #spiroFiveBottom").spinner({
  numberFormat : "n",
  step : 0.1,
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
  // "value" : $(this).val()
});
$("#spiroSix, #spiroSixBottom").spinner({
  numberFormat : "n",
  step : 0.1,
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
  // "value" : $(this).val()
});
// $("#spiroSeven, #spiroSevenBottom").spinner({
//   spin : function(e) {
//     spiroSeven = $(this).val();
//     makeItSo(e);
//   },
//   stop : function(e) {
//     spiroSeven = $(this).val();
//     makeItSo(e);
//   },
//   change : function(e) {
//     spiroSeven = $(this).val();
//     makeItSo(e);
//   }
//   // "value" : $(this).val()
// });

$("#slow-burn").click(function() {
    numPoints = 100;
    // var curNumPoints = numPoints;
    setInterval(function() {
        // while (numPoints < 500) {
            makeItSo();
            if (numPoints < $("#numPoints").val()) {
            numPoints += 100;
            // console.log(numPoints);
    }
        // }
    }, 100);
})

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(rgbArr) {
  // var result = "#";
  var result = "";
  for (var i = 0; i < rgbArr.length; i++) {
      // console.log(parseInt(rgbArr[i]));
      result += componentToHex(parseInt(rgbArr[i]));
      // result = componentToHex(rgbArr[i]);
  }
  return result;
}

var str = 'rgb(138,93,179)';

function toHex(rgb) {
  rgb = rgb.slice(4, -1);
  rgb = rgb.split(",");
  return rgbToHex(rgb);
}

// toHex(str);

// $("#test-box").append(toHex(str));

$("#random-spiro").click(function() {
  numPoints = Math.floor(Math.random()*20000+200);
  $("#numPoints, #numPointsBottom").val(numPoints);
  spiroOne = (Math.random()*15).toFixed(1);
  $("#spiroOne, #spiroOneBottom").val(spiroOne);
  spiroTwo = (Math.random()*15).toFixed(1);
  $("#spiroTwo, #spiroTwoBottom").val(spiroTwo);
  spiroThree = (Math.random()*1.5).toFixed(1);
  $("#spiroThree, #spiroThreeBottom").val(spiroThree);
  spiroFour = (Math.random()*-8).toFixed(1);
  $("#spiroFour, #spiroFourBottom").val(spiroFour);
  spiroFive = (Math.random()*10).toFixed(1);
  $("#spiroFive, #spiroFiveBottom").val(spiroFive);
  spiroSix = (Math.random()*0.7).toFixed(1);
  $("#spiroSix, #spiroSixBottom").val(spiroSix);

  randomColor();
  makeItSo();
});

// var inputValues = {
//   "#spiroOne" : spiroOne,
//   "#spiroTwo" : spiroTwo,
//   "#spiroThree" : spiroThree,
//   "#spiroFour" : spiroFour,
//   "#spiroFive" : spiroFive,
//   "#spiroSix" : spiroSix,
//   "#spiroSeven" : spiroSeven,
// };

// $.each(inputValues, function(key, value) {
//   var foundIt = $("span:contains(" + key + "#)").html(); /*produces string*/
//   // $("span:contains(" + key + "#)").css("background","red");
//   // var find = key;
//   var valueStr = value.toString();
//   // console.log(valueStr);
//   var regex = new RegExp(foundIt, "g");
//   // foundIt.replace(regex, value.toString());
//   // console.log(regex);
//   console.log(foundIt.replace(regex, value.toString()));
//   foundIt.replace(regex, value.toString());


//   // var foundIt = $("span:contains(" + key + "#)");
//   // var foundString = foundIt.toString();
//   // foundString.replace(/#/g, value);
//   // console.log(foundIt + ": " + value);
//   // console.log(typeof(foundIt));
//     // foundIt.css("background","red");
//     // foundIt.replace(/#/g, value);
//   // var foundIt = $(key + "#")
// });

// $('input[type="range"]').change(function(e){

//   // reset so we dont do multiple directions
//   // but only if its a manually triggered change
//   if (e.srcElement && !randomMode){
//     // [].forEach.call( document.querySelectorAll('input[type="range"]') , function(slider, i){
//     //   if (slider == e.target) return;
//     //   slider.value = 0;
//     // $(this).val();
//   }
//     numEl = $(this).val();
//     makeItSo(e);
//     });
  // }


//   direction = e.target.id.replace('len','');

//   length = e.target.value;
//   //debugger;
//   makeItSo(e);

// });


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

// var elColor = document.querySelector('input[type="color"]');
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
    history.push(cv.toDataURL());
    ctx.beginPath();
    ctx.fillStyle = spiroBackgroundColor;
    ctx.fillRect(0,0,600,600);
    // for (var i=0;i<loopOne;i++) {
      // for (var j=0;j<loopTwo;j++) {
        ctx.save();
        ctx.strokeStyle = spiroColor;
        // ctx.translate(50+loopTwo*100,50+loopOne*100);
        // drawSpirograph(ctx,
          // 20*(loopTwo+2)/(loopTwo+1),
          // -8*(loopOne+3)/(loopOne+1),
          // 10);
        ctx.translate(300,300);
        // drawSpirograph(ctx,20*(2)/(1),-8*(3)/(1),10);
        // drawSpirograph(ctx,
        //   20*(2)/(.5)
        //   ,-8*(3)/(.5)
        //   ,10);
        drawSpirograph(ctx,
          spiroOne*(spiroTwo)/(spiroThree)
          ,spiroFour*(spiroFive)/(spiroSix)
          ,spiroSeven);
        ctx.restore();
      // }
    // }  

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
  // do {
    // if (i > numPoints) break;
    for (i; i < numPoints; i++) {
    var x2 = (R+r)*Math.cos(i*Math.PI/72) - (r+O)*Math.cos(((R+r)/r)*(i*Math.PI/72))
    var y2 = (R+r)*Math.sin(i*Math.PI/72) - (r+O)*Math.sin(((R+r)/r)*(i*Math.PI/72))
    ctx.lineTo(x2,y2);
    x1 = x2;
    y1 = y2;
    // i++;
  }
    // if (i < numPoints) {
    //   setTimeout(drawSpirograph, 1000)
    // }
  // } while (x2 != R-O && y2 != 0 );
  ctx.stroke();
}

makeItSo();

var initialImg = cv.toDataURL();

$('.presets a').click(function(){

  var name = window.prompt('what you wanna call it, bro?');

  var obj = {};
  $('input').each(function(i, elem){
    obj[elem.name] = elem.value
  });

  var presets = JSON.parse(localStorage.getItem('mypresets')) || {};
  presets[name] = obj;

  localStorage.setItem('mypresets', JSON.stringify(presets));

  buildPresets();

  return false;
});



applyPreset = function(preset){

  preset = JSON.parse(preset);

  $('input').each(function(i, elem){

    elem.value = preset[elem.name];

  }).change().blur();


};



buildPresets = function(){

  $('ol').empty();

  var mypresets = JSON.parse(localStorage.getItem('mypresets'));

  $.each(mypresets || [], function(name, preset){



    $('<a>',{
      text          : name,
      "data-preset" : JSON.stringify(preset),
      href          : '#',
      click         : function(){
        applyPreset( $(this).attr('data-preset')  );
        return false;
      }
    }).wrap('<li>').parent().appendTo('ol');



  });



}

$("#toImage").click(function() {
  spiroBackgroundColor = "rgba(255,255,255,1)";
  makeItSo();
  var canvas = document.getElementById('canvas');
  var img    = canvas.toDataURL("image/png");
  var newWindow = window.open();
  newWindow.document.write('<img src="'+img+'"/>');
  newWindow.document.close();
  spiroBackgroundColor = "#F9F9F9";
  makeItSo();
});

// $("#code-display").slideToggle();
$("#code-reveal").click(function() {
  $("#code-display").slideToggle();
});

// $(function(){

//   if (!Modernizr.localstorage){
//     $('.presetwrap').remove();
//     return;
//   }


//   buildPresets();
// })

// jQuery(document).ready(function($) {
//   while (numPoints < 20000) {
//    setInterval(makeItSo, 3000);
//    console.log(numPoints);
//    numPoints += 3000;
//    // makeItSo();
//   }
// });
