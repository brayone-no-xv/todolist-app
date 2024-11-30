// function addTask() {
//     button.addEventListener('click', () => {
//         const ul     = document.querySelector('.listItems');
//         const li     = document.createElement('li');
//         const liTeks = document.createTextNode('Item baru');

const input = document.getElementById("userInput"); // digunakan untuk mencari elemen dalam HTML berdasarkan 'id' tertentu.
const item = document.getElementsByTagName("li"); // menambahkan item, jika ada beberapa elemen '<li></li>'
const ul = document.querySelector("ul"); // mencari elemen yang cocok berdasarkan selector CSS, jika ada elemen seperti '<ul></ul>'

const enter = document.getElementById("enter");
enter.onclick = function() {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(input.Value));
  ul.appendChild(li);
  input.value = " ";
};

li.addEventListener("click", () => {
  li.classList.toggle("done");
});

const deletes = document.getElementById("deleteItem");
deletes.onclick = () => {
  li.classList.toggle("delete");
  ul.removeChild(li);
};



// function RemoveItem() {
//     li.classList.toggle("Done");
//     li.addEventListener("click",addItem);
// }

    


