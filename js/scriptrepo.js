/* Author:
  ME.
  and david desandro (for all the way)
  and markdotto (for 3d)


  YAH BITCHEZ
*/


// var canvas = document.querySelector('canvas');
var ctx = document.getElementById('canvas').getContext('2d');

var i,j;

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

/* Transformation */
// scale()
var scaleFloatX = 1;
var scaleFloatY = 1;

// rotate()
var rotateFloatAngle = 1;

// translate()
var translateFloatX = 1;
var translateFloatY = 1;

// transform()
var traM11 = 1;
var traM12 = 1;
var traM21 = 1;
var traM22 = 1;
var traMdx = 1;
var traMdy = 1;

// setTransform()
var setTraM11 = 1;
var setTraM12 = 1;
var setTraM21 = 1;
var setTraM22 = 1;
var setTraMdx = 1;
var setTraMdy = 1;

/* Colors, styles and shadows */
// attributes
var cStrokeStyle = "#62A9F9"; /*any*/
var cFillStyle = "#EDA73D"; /*any*/
var cShadowOffsetX = 0.0; /*float*/
var cShadowOffsetY = 0.0; /*float*/
var cShadowBlur = 0.0; /*float*/
var cShadowColor = "#2C2C2C"; /*string*/

var randomColor = 'rgb(' + Math.floor(Math.random()*255) + ',' +
                        Math.floor(Math.random()*255) + ',' + Math.floor(Math.random()*255) + ')';

// methods
// createLinearGradient() - float
var linGradientFloatXzero = 1.0;
var linGradientFloatYzero = 1.0;
var linGradientFloatXone = 1.0;
var linGradientFloatYone = 1.0;

// createRadialGradient() - float
var radGradientFloatXzero = 1.0;
var radGradientFloatYzero = 1.0;
var radGradientFloatXone = 1.0;
var radGradientFloatYone = 1.0;
var radGradientFloatRone = 1.0;
var radGradientFloatRone = 1.0;

// createPattern()
var patternImage; /*object*/
var patternRepetition = "repeat"; /*string*/
/*Argument "image" can be of type HTMLImageElement,
HTMLCanvasElement or HTMLVideoElement
"repetition" supports any of the following values:
[repeat (default), repeat-x, repeat-y, no-repeat]*/


/* CanvasGradient interface */
// addColorStop()
var colorStopOffset = 1.0; /*float*/
var colorStopColor = "#51D64E";

/* Paths */
// methods
// moveTo()
var cMoveToX = 1.0;
var cMoveToY = 1.0;

// lineTo()
var cLineToX = 1.0;
var cLineToY = 1.0;

// quadraticCurveTo()


/* Rectangles */
// methods
// clearRect()
var clearFloatX = 50.0;
var clearFloatY = 50.0;
var clearFloatW = 50.0;
var clearFloatH = 50.0;

// fillRect()
var fillFloatX = 50.0;
var fillFloatY = 50.0;
var fillFloatW = 50.0;
var fillFloatH = 50.0;

// strokeRect()
var strokeFloatX = 50.0;
var strokeFloatY = 50.0;
var strokeFloatW = 50.0;
var strokeFloatH = 50.0;


// possible values 1 or -1
// var offset = {
//   x : 1,
//   y : 1
// }

// var color = '#ffffff';

// var length = 11;
// var string = '';

var randomMode = false;

// var directionMap = {
//   SE : { x: 1 , y: 1 },
//   SW : { x: -1, y: 1 },
//   NW : { x: -1, y: -1},
//   NE : { x: 1 , y: -1}
// };

// var direction = 'SE';
$("#floatX").change(function(e) {
  fillFloatX = $(this).val();
  doIt(e);
});
$("#floatY").change(function(e) {
  fillFloatY = $(this).val();
  doIt(e);
});
$("#floatW").change(function(e) {
  fillFloatW = $(this).val();
  doIt(e);
});
$("#floatH").change(function(e) {
  fillFloatH = $(this).val();
  doIt(e);
});
$('input[type="range"]').change(function(e){

  // reset so we dont do multiple directions
  // but only if its a manually triggered change
  if (e.srcElement && !randomMode){
    // [].forEach.call( document.querySelectorAll('input[type="range"]') , function(slider, i){
    //   if (slider == e.target) return;
    //   slider.value = 0;
    // $(this).val();
  }
    numEl = $(this).val();
    doIt(e);
    });
  // }


//   direction = e.target.id.replace('len','');

//   length = e.target.value;
//   //debugger;
//   doIt(e);

// });


// color
function changeColor(e){
  cFillStyle = e.target.value;
  doIt(e);
};

var singleColor = document.getElementById("single-color");

var elColor = document.querySelector('input[type="color"]');
$(singleColor).bind('blur focus', changeColor);

document.querySelector('input[type="checkbox"]').addEventListener('change', function(e){
  randomMode = e.target.checked;
}, false);

$('button:first').click(function f(e){
   f.on = !f.on;
   e.target.innerHTML = f.on ? 'what does it mean?' : 'all the way';
   RAINBOWZ(f.on);
});

$('button:last').click(function f(e){
   f.on = !f.on;
   e.target.innerHTML = f.on ? 'nvm.' : '3D';
   threeD(f.on);
});


function doIt(e){

  if (numEl > 1) {
   for (var i=0;i<numEl;i++){
     for (var j=0;j<numEl;j++){
      ctx.lineWidth = 1;
       ctx.fillStyle = (randomMode) ? 'rgb(' + Math.floor(Math.random()*25.5*(i+10)) + ',' +
                        Math.floor(Math.random()*25.5*(j+10)) + ',' + Math.floor(Math.random()*5.5*(i+10)) + ')' : cFillStyle;
        ctx.strokeStyle = (randomMode) ? 'rgb(' + Math.floor(Math.random()*25.5*(i+10)) + ',' +
                        Math.floor(Math.random()*25.5*(j+10)) + ',' + Math.floor(Math.random()*5.5*(i+10)) + ')' : cStrokeStyle;

        ctx.strokeRect(fillFloatX*j, fillFloatY*i, fillFloatW, fillFloatH);
        // ctx.fillRect(j*25,i*25,25,25);
        ctx.fillRect(fillFloatX*j+2.5, fillFloatY*i+2.5, fillFloatW-5, fillFloatH-5);
     }
   }
   } else {
      canvas.width = canvas.width;
      ctx.strokeStyle = cStrokeStyle;
      // ctx.translate(100, 100);
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.fillStyle = cFillStyle;
      ctx.fillRect(fillFloatX, fillFloatY, fillFloatW, fillFloatH);
      ctx.strokeRect(fillFloatX, fillFloatY, fillFloatW, fillFloatH);
   }

  // function draw() {
    // var ctx = document.getElementById('canvas').getContext('2d');
    // ctx.fillRect(0,0,300,300);
    // for (var i=0;i<3;i++) {
    //   for (var j=0;j<3;j++) {
    //     ctx.save();
    //     ctx.strokeStyle = "#9CFF00";
    //     ctx.translate(50+j*100,50+i*100);
    //     drawSpirograph(ctx,20*(j+2)/(j+1),-8*(i+3)/(i+1),10);
    //     ctx.restore();
    //   }
    // }
  // }
  

  // h1.style.textShadow = '';
  string = '';

  // offset = directionMap[direction];

  var sliders = document.querySelectorAll('input[id^="len"]');


  // if ((e && !e.srcElement) || randomMode){
  //   for (var j = 0; j < sliders.length; j++){

  //     offset = directionMap[sliders[j].id.replace('len','')];
  //     var value = sliders[j].value;

  //     for (var i = -1; ++i < value; ){
  //      string += color +  ' ' + (i+1) * offset.x + 'px ' + (i+1) * offset.y + 'px, ';
  //     }
  //   }
  // } else {
  //   for (var i = -1; ++i < length; ){
  //    string += color +  ' ' + (i+1) * offset.x + 'px ' + (i+1) * offset.y + 'px, ';
  //   }
  // }


  // string = string.slice(0,string.length-2);

  // setShadow(string);
}

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


function setShadow(string){
  h1.style.textShadow = string;

  document.querySelector('textarea').value = 'text-shadow: ' + string + ';';

}


var RAINBOWZ = function(bool) {

  if (!bool) {
    doIt();
    return;
  }

  var maxCount = 400;
      shadows = '-1px -1px hsl(0,100%,50%)';

  for ( var i = 1; i < maxCount; i++ ) {
    var normI = i / maxCount,
        hue = Math.round( normI * 360 * 6 * 10 ) / 10 ,
        x = parseInt( Math.sin( normI * Math.PI * 2 * 2 )  * 60 );

    shadows += ', ' + x + 'px ' + i + 'px hsl(' + hue + ', 100%, 50%)'
  }

  setShadow(shadows)
};


// thx http://markdotto.com/playground/3d-text/
var threeD = function(bool){

  if (!bool) {
    doIt();
    return;
  }
  var shadows = '0 1px 0 #ccc, \
0 2px 0 #c9c9c9, \
0 3px 0 #bbb, \
0 4px 0 #b9b9b9, \
0 5px 0 #aaa, \
0 6px 1px rgba(0,0,0,.1), \
0 0 5px rgba(0,0,0,.1), \
0 1px 3px rgba(0,0,0,.3), \
0 3px 5px rgba(0,0,0,.2), \
0 5px 10px rgba(0,0,0,.25), \
0 10px 10px rgba(0,0,0,.2), \
0 20px 20px rgba(0,0,0,.15)';

  setShadow(shadows);
}


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

$("input").change(function(e) {
  canvas.width = canvas.width;
  doIt(e);
});

$(function(){

  if (!Modernizr.localstorage){
    $('.presetwrap').remove();
    return;
  }


  buildPresets();
})






















