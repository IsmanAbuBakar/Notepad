function execCommandWithArg(command, arg){
    document.execCommand(command, false, arg);
}
//autosave
textArea.innerHTML = localStorage.getItem('textArea');
textArea.oninput = () => {
  localStorage.setItem('textArea', textArea.innerHTML)
};

//original save button
function checkWebStorageSupport() {
  if(typeof(Storage) !== "undefined") {
      return(true);
  }
  else {
      alert("Web storage unsupported!");
      return(false);
  }
}

function displaySaveNote() {
  if(checkWebStorageSupport() == true) {
      result = localStorage.getItem('save');
  }
  if(result === null) {
      result = "";
  }
  document.getElementById('textArea').innerHTML =result;
}

function savebtn() {
  if(checkWebStorageSupport() == true) {
      var area = document.getElementById("textArea");
      if(area != '') {
          localStorage.setItem("save", area.innerHTML);
      }
      else {
          alert("Nothing to save");
      }
  }
}

function loadbtn(){
  var answer = window.confirm("This will load your last saved file. It may cause you to lose your current progress. Do still you want to proceed?");
if (answer) {
displaySaveNote();
localStorage.setItem('textArea', textArea.innerHTML);
wordCount ();
  charCount ();
}
}

//Clear Button
function clearbtn() {
  document.getElementById("textArea").innerHTML = "";
  wordCount ();
  charCount ();
}

//Reset Button
function resetbtn() {
var answer = window.confirm("This will result in deleting the local storage also. Do still you want to proceed?");
if (answer) {
  document.getElementById("textArea").innerHTML = "";
  localStorage.setItem("textArea", textArea.innerHTML);
  localStorage.setItem("save", textArea.innerHTML);
  wordCount ();
  charCount ();
}
}
//original reset button code
/*function resetbtn() {
  document.getElementById("textArea").innerHTML = "";
  localStorage.setItem("textArea", textArea.innerHTML);
}*/

//wordcount
var word = document.querySelector('#word-count');
function wordCount () {
  var arr = textArea.textContent.trim().replace(/\s+/g, ' ').split(' ');
  word.textContent = !arr[0] ? 0 : arr.length;
}

textArea.addEventListener('input', wordCount);
wordCount();


//charactercount
var character = document.querySelector('#char-count');
function charCount () {
  var char = textArea.textContent.trim().replace(/ /g,'').length;
  character.textContent = char;
}

textArea.addEventListener('input', charCount);
charCount();