/* Author:
 David Carter
 much thanks to Paul Irish for his MothereffingHSL

*/
var cv  = $('#canvas').get(0);
var ctx = document.getElementById('canvas').getContext('2d');

var loopOne = 1;
var loopTwo = 1;

// Defaults
var spiroOne = 9;
var spiroTwo = 9;
var spiroThree = .5;
var spiroFour = -8;
var spiroFive = 10;
var spiroSix = 0.7;
var spiroSeven = 10;

var spiroColor = "#EE8857";
var spiroBackgroundColor = "#F9F9F9";

// tell unsupporting browsers to FUCK OFF
// if (!('textShadow' in document.body.style)) {
//   document.querySelector('fieldset').style.display = 'none';
//   document.querySelector('textarea').style.display = 'none';
//   h1.style.marginTop = 0;
//   h1.innerHTML = 'Your browser doesn\'t support text-shadow. <small style="font-size: 20px">It was even in CSS2.0!</small> Just terrible...';
// }

var width = ctx.width;
var height = ctx.height;

// num of elements
var numEl = 5;

var randomMode = false;

$("#spiroOne, #spiroOneBottom").spinner({
  spin : function(e) {
    spiroOne = $(this).val();
    doIt(e);
  },
  stop : function(e) {
    spiroOne = $(this).val();
    doIt(e);
  },
  change : function(e) {
    spiroOne = $(this).val();
    doIt(e);
  }
  // "value" : $(this).val()
});
$("#spiroTwo, #spiroTwoBottom").spinner({
  spin : function(e) {
    spiroTwo = $(this).val();
    doIt(e);
  },
  stop : function(e) {
    spiroTwo = $(this).val();
    doIt(e);
  },
  change : function(e) {
    spiroTwo = $(this).val();
    doIt(e);
  }
  // "value" : $(this).val()
});
$("#spiroThree, #spiroThreeBottom").spinner({
  numberFormat : "n",
  step : 0.1,
  spin : function(e) {
    spiroThree = $(this).val();
    doIt(e);
  },
  stop : function(e) {
    spiroThree = $(this).val();
    doIt(e);
  },
  change : function(e) {
    spiroThree = $(this).val();
    doIt(e);
  }
  // "value" : $(this).val()
});
$("#spiroFour, #spiroFourBottom").spinner({
  spin : function(e) {
    spiroFour = $(this).val();
    doIt(e);
  },
  stop : function(e) {
    spiroFour = $(this).val();
    doIt(e);
  },
  change : function(e) {
    spiroFour = $(this).val();
    doIt(e);
  }
  // "value" : $(this).val()
});
$("#spiroFive, #spiroFiveBottom").spinner({
  spin : function(e) {
    spiroFive = $(this).val();
    doIt(e);
  },
  stop : function(e) {
    spiroFive = $(this).val();
    doIt(e);
  },
  change : function(e) {
    spiroFive = $(this).val();
    doIt(e);
  }
  // "value" : $(this).val()
});
$("#spiroSix, #spiroSixBottom").spinner({
  numberFormat : "n",
  step : 0.1,
  spin : function(e) {
    spiroSix = $(this).val();
    doIt(e);
  },
  stop : function(e) {
    spiroSix = $(this).val();
    doIt(e);
  },
  change : function(e) {
    spiroSix = $(this).val();
    doIt(e);
  }
  // "value" : $(this).val()
});
$("#spiroSeven, #spiroSevenBottom").spinner({
  spin : function(e) {
    spiroSeven = $(this).val();
    doIt(e);
  },
  stop : function(e) {
    spiroSeven = $(this).val();
    doIt(e);
  },
  change : function(e) {
    spiroSeven = $(this).val();
    doIt(e);
  }
  // "value" : $(this).val()
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
//     doIt(e);
//     });
  // }


//   direction = e.target.id.replace('len','');

//   length = e.target.value;
//   //debugger;
//   doIt(e);

// });


// color
function changeColor(e){
  spiroColor = e.target.value;
  doIt(e);
};

function changeBackgroundColor(e){
  spiroBackgroundColor = e.target.value;
  doIt(e);
};

function randomColor(e) {
  spiroColor = 'rgb(' + Math.floor(Math.random()*255) + ',' +
                          Math.floor(Math.random()*255) + ',' + Math.floor(Math.random()*255) + ')';
doIt(e);
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


function doIt(e){
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
  do {
    if (i>20000) break;
    var x2 = (R+r)*Math.cos(i*Math.PI/72) - (r+O)*Math.cos(((R+r)/r)*(i*Math.PI/72))
    var y2 = (R+r)*Math.sin(i*Math.PI/72) - (r+O)*Math.sin(((R+r)/r)*(i*Math.PI/72))
    ctx.lineTo(x2,y2);
    x1 = x2;
    y1 = y2;
    i++;
  } while (x2 != R-O && y2 != 0 );
  ctx.stroke();
}

doIt();

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
  doIt();
  var canvas = document.getElementById('canvas');
  var img    = canvas.toDataURL("image/png");
  var newWindow = window.open();
  newWindow.document.write('<img src="'+img+'"/>');
  newWindow.document.close();
  spiroBackgroundColor = "#F9F9F9";
  doIt();
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






















