var itemArray = [];
//
function pushItemToArray(){
asr = localStorage; 
if ((localStorage.asr !== null) && (localStorage.asr !== "[]")) {              
       itemArray = JSON.parse(localStorage.asr);                                  // get current LS - PARSE
//	   localStorage.getItem("asr",JSON.parse(itemArray));                         // get current LS - PARSE
}
var newItem = document.getElementById("itemInput").value;
     itemArray.push(newItem);
  

localStorage.asr = JSON.stringify(itemArray);                                // set (update) LS - STRINGIFY 
//localStorage.setItem("asr",JSON.stringify(itemArray));                         // set current LS - PARSE

   document.getElementById("itemInput").value = itemArray.length;
  
  var li = document.createElement("li");
      li.innerHTML = newItem;
 var  ul = document.getElementById("itemList");
      ul.appendChild(li);
}

function showListAsString (){
  var delimiter = document.getElementById("delimiterInput").value;
  var newStr = itemArray.join(delimiter);
  if ((localStorage.asr !== null) && (localStorage.asr !== "[]")) {            
       itemArray = JSON.parse(localStorage.asr);                                  // get current LS - PARSE
      document.getElementById("show").innerHTML = newStr;
	  }
}

function localStorage() {
    
 		var itemArray9 = JSON.parse(localStorage.asr);         // get LS - PARSE

		document.getElementById("show2").innerHTML = "";
		document.getElementById("show2").innerHTML = itemArray9;

