var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function inputLength(){
    return input.value.length;
} 

function listLength(){
    return item.length;
}

function createListElement() {
    var li = document.createElement("li"); // creates an element "li"
    li.appendChild(document.createAttribute(input.value)); //makes text from input field the li text
    ul.appendChild(li); //adds li to ul
    input.value = ""; //Reset text input field


    //START STRIKETHROUGH
    // because it's in the function, it only adds it for new items
    function crossOut() {
        li.classList.toggle("done");
    }

    li.addEventListener("click",crossOut);//when the li is clicked is marked done with the crossOut() function
    //END STRIKETHROUGH


    // START ADD DELETE BUTTON
    var dBtn = document.createElement("button");
    dBtn.appendChild(document.createTextNode("X"));
    li.appendChild(dBtn);
    dBtn.addEventListener("click", deleteListItem);//when X is clicked the li is deleted
    // END ADD DELETE BUTTON


    //ADD CLASS DELETE (DISPLAY: NONE)
    function deleteListItem(){
        li.classList.add("delete") //this is a class that makes display: none; of the li 
    }
    //END ADD CLASS DELETE
}