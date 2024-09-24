// element HTML
const Input  = document.getElementById("userInput"); // digunakan untuk mencari elemen dalam HTML berdasarkan 'id' tertentu. 
const ol     = document.querySelector("ol"); // mencari elemen yang cocok berdasarkan selector CSS, jika ada elemen seperti '<ol></ol>'

// tombol
const addItem = document.getElementById("addItem");
const deletes = document.getElementById("deleteItem");

addItem.onclick = () => { 
    var li = document.createElement('li');
    li.textContent = Input.nodevalue; // Menambahkan teks dari input ke dalam <li> 
    ol.appendChild(li);

    Input.nodeValue = " " ; //Mengosongkan input setelah menambahkan item
    li.addEventListener("click", listItem);
}

deletes.onclick = () => {
    this.classList.toggle("delete");
    ol.removeChild(li);
}