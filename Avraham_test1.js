var itemArray = [];
//
function pushItemToArray(){
if ((localStorage.asr !== null) && (localStorage.asr !== "[]")) {             // &&  was ||
       itemArray = JSON.parse(localStorage.asr);                                  // get current LS - PARSE
}
var newItem = document.getElementById("itemInput").value;
     itemArray.push(newItem);
  
asr = localStorage; 
localStorage.asr = JSON.stringify(itemArray);  // set (update) LS - STRINGIFY 

   document.getElementById("itemInput").value = itemArray.length;
  
  var li = document.createElement("li");
      li.innerHTML = newItem;
 var  ul = document.getElementById("itemList");
      ul.appendChild(li);
}

function showListAsString (){
  var delimiter = document.getElementById("delimiterInput").value;
  var newStr = itemArray.join(delimiter);
      document.getElementById("show").innerHTML = newStr;
}

function localStorage() {
    
 		var itemArray9 = JSON.parse(localStorage.asr);         // get LS - PARSE

		document.getElementById("show2").innerHTML = "";
		document.getElementById("show2").innerHTML = itemArray9;
 }
