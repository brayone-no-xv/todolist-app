// element HTML
const Input  = document.getElementById("userInput"); // digunakan untuk mencari elemen dalam HTML berdasarkan 'id' tertentu. 
const ol     = document.querySelector("ol"); // mencari elemen yang cocok berdasarkan selector CSS, jika ada elemen seperti '<ol></ol>'

// tombol
const addItem = document.getElementById("addItem");
const deletes = document.getElementById("deleteItem");

// function inputLength(){
//     return Input.nodeValue.length;
// } 

// function listLength(){
//     return item.length;
// }


addItem.onclick = () => { 
        var li = document.createElement('li');
        // li.appendChild(document.createAttribute(Input.nodeValue));
        li.textContent = Input.nodevalue; // Menambahkan teks dari input ke dalam <li> 
        ol.appendChild(li);

        Input.nodeValue = " " ; //Mengosongkan input setelah menambahkan item
        li.addEventListener("click", listItem);
    }


function listItem() {
if(listItem) {
        this.classList.toggle("done");
    }
}

deletes.onclick = () => {
        this.classList.toggle("delete");
        ol.removeChild(li);
    }

    


