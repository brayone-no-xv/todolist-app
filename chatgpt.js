const Input  = document.getElementById('userInput');
const items  = document.getElementsByTagName("li");
const ul     = document.querySelector('ul');

function inputLength(){
    return Input.value.length;
} 

function listLength(){
    return items.length;
}

const enter = document.getElementById("enter");
enter.onclick = () => { 
    const li = document.createElement('li');
    li.textContent = Input.value; // Menambahkan teks dari input ke dalam <li>
    ul.appendChild(li);

    Input.value = ""; // Mengosongkan input setelah menambahkan item

    li.addEventListener("click", listItem); // Mengatur event listener untuk item baru
}

function listItem() {
    this.classList.toggle("done"); // Menandai item sebagai "done" saat diklik
}

var deletes = document.getElementById('deleteItem');
if(deletes) {
    deletes.onclick = () => {
        if(ul.children.length > 0) {
            ul.removeChild(ul.lastElementChild); // Menghapus elemen terakhir dari list
        }
    }
}
