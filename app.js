function swapTiles(cell1,cell2) {
  var temp = document.getElementById(cell1).className;
  document.getElementById(cell1).className = document.getElementById(cell2).className;
  document.getElementById(cell2).className = temp;
}

function shuffle() {
//Use nested loops to access each cell of the 3x3 grid
for (var row=1;row<=3;row++) { //For each row of the 3x3 grid
   for (var column=1;column<=3;column++) { //For each column in this row
  
    var row2=Math.floor(Math.random()*3 + 1); //Pick a random row from 1 to 3
    var column2=Math.floor(Math.random()*3 + 1); //Pick a random column from 1 to 3
     
    swapTiles("cell"+row+column,"cell"+row2+column2); //Swap the look & feel of both cells
  } 
} 
document.getElementById("btnEmpezar").onclick = function() {
  //disable
  this.disabled = true;

  //do some validation stuff
}
chronoStart();
}

function clickTile(row,column) {
  var cell = document.getElementById("cell"+row+column);
  var tile = cell.className;
  if (tile!="tile9") { 
       //Checking if white tile on the right
       if (column<3) {
         if ( document.getElementById("cell"+row+(column+1)).className=="tile9") {
           swapTiles("cell"+row+column,"cell"+row+(column+1));
           return;
         }
       }
       //Checking if white tile on the left
       if (column>1) {
         if ( document.getElementById("cell"+row+(column-1)).className=="tile9") {
           swapTiles("cell"+row+column,"cell"+row+(column-1));
           return;
         }
       }
         //Checking if white tile is above
       if (row>1) {
         if ( document.getElementById("cell"+(row-1)+column).className=="tile9") {
           swapTiles("cell"+row+column,"cell"+(row-1)+column);
           return;
         }
       }
       //Checking if white tile is below
       if (row<3) {
         if ( document.getElementById("cell"+(row+1)+column).className=="tile9") {
           swapTiles("cell"+row+column,"cell"+(row+1)+column);
           return;
         }
       } 
  }
  
}











const inpFile = document.getElementById("inpFile")
// const preview_cont = document.getElementById("entorno");

const previewImage = document.querySelector(".image-preview__image");

// const previewDefaultText = preview_cont.querySelector(".image.preview__default-text");

 const t1 = document.getElementById("cell11");
const t2 = document.getElementById("cell12");
const t3 = document.getElementById("cell13");
const t4 = document.getElementById("cell21");
const t5 = document.getElementById("cell22");
const t6 = document.getElementById("cell23");
const t7 = document.getElementById("cell31");
const t8 = document.getElementById("cell32");
const t9 = document.getElementById("cell33");


// inpFile.addEventListener("change",(e) =>{
//   const file =e.target.files[0];

//   if(file){
//       const reader = new FileReader();

//     //   previewDefaultText.style.display="none";
//       // previewImage.style.display="block";

//       reader.addEventListener("load", function(){
//          var foto=previewImage.setAttribute("src", this.result);
//       //    var imagen =previewImage.src;
//       //    console.log(imagen);
        
//       //  t1.style.backgroundImage=("src",);
//       });
//       reader.readAsDataURL(file);
      
//   document.getElementById("cbox1").checked = true;
//         //   t2.style.background="url('foto')";
//         //   t3.style.background="url('foto')";
//         //   t4.style.background="url('foto')";
//         //   t5.style.background="url('foto')";
//         //   t6.style.background="url('foto')";
//         //   t7.style.background="url('foto')";
//         //   t8.style.background="url('foto')";
//         //   t9.style.background="url('foto')";
//       const tw= document.getElementById("ttt").innerHTML="Hello World";
//   }else{
      
//     previewDefaultText.style.display="null";
//     previewImage.style.display="null";
  
 
//   }
// });

var sheet = document.styleSheets[1];

function fileReader(e) {
  if(window.FileReader) {
    var file  = e.target.files[0];
    var reader = new FileReader();
    if (file && file.type.match('image.*')) {
      reader.readAsDataURL(file);
      document.getElementById("cbox1").checked = true;
    } else {
      console.log('please add an image')
    }
    reader.onloadend = function (e) {
      sheet.insertRule(".tile1, .tile2, .tile3, .tile4, .tile5, .tile6, .tile7, .tile8, .tile9 { background:url(" + reader.result + "); display: table-cell;      width: 120px;      height: 120px;border: 1px solid white; cursor: pointer;} ", 0);
      // sheet.insertRule(".tile1 {background-position: left top;}.tile2 {background-position: center top;}      .tile3 {background-position: right top;}      .tile4 {background-position: left center;}      .tile5 {background-position: center center;}      .tile6 {background-position: right center;}      .tile7 {background-position: left bottom;}     .tile8 {background-position: center bottom;}.tile9 {background: white; cursor: default;")
   
    }
  }
}

document.getElementById('add-img').addEventListener('change', fileReader, false);



var startTime = 0
var start = 0
var end = 0
var diff = 0
var timerID = 0
function chrono(){
    end = new Date()
    diff = end - start
    diff = new Date(diff)
    var msec = diff.getMilliseconds()
    var sec = diff.getSeconds()
    var min = diff.getMinutes()
    var hr = diff.getHours()-1
    if (min < 10){
        min = "0" + min
    }
    if (sec < 10){
        sec = "0" + sec
    }
    if(msec < 10){
        msec = "00" +msec
    }
    else if(msec < 100){
        msec = "0" +msec
    }
    document.getElementById("chronotime").innerHTML = min + ":" + sec 
    timerID = setTimeout("chrono()", 10)
}
function chronoStart(){
    document.chronoForm.startstop.value = "stop!"
    document.chronoForm.startstop.onclick = chronoStop
    document.chronoForm.reset.onclick = chronoReset
    start = new Date()
    chrono()
}
function chronoContinue(){
    document.chronoForm.startstop.value = "stop!"
    document.chronoForm.startstop.onclick = chronoStop
    document.chronoForm.reset.onclick = chronoReset
    start = new Date()-diff
    start = new Date(start)
    chrono()
}
function chronoReset(){
    document.getElementById("chronotime").innerHTML = "00:00:"
    start = new Date()
    shuffle();
}
function chronoStopReset(){
    document.getElementById("chronotime").innerHTML = "0:00:00:000"
    document.chronoForm.startstop.onclick = chronoStart
}
function chronoStop(){
    document.chronoForm.startstop.value = "start!"
    document.chronoForm.startstop.onclick = chronoContinue
    document.chronoForm.reset.onclick = chronoStopReset
    clearTimeout(timerID)
}
