const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container"); //variable name listContainer from index

function addTask(){
    if(inputBox.value ===''){
        alert("You must write something!");
    }
    else{
        let li =document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = ""; //clear add text after clicking add btn
    saveData(); 
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");//if we clicked on a list, it will check/strike through
        saveData(); 
    }
    else if(e.target.tagName === "SPAN"){ //if we clicked on a span, it will remove
        e.target.parentElement.remove();
        saveData(); 
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");  //whenever you refresh brower, data is not lost
}
showTask() //show evering stored under 'data'