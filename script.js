const input = document.getElementById("userInput"); // digunakan untuk mencari elemen dalam HTML berdasarkan 'id' tertentu.
const item = document.getElementsByTagName("li"); // menambahkan item, jika ada beberapa elemen '<li></li>'
const ul = document.querySelector("ul"); // mencari lemen yang cocok berdasarkan selector CSS, jika ada elemen seperti '<ul></ul>'

const enter = document.getElementById("enter");
enter.onclick = function() {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(input.Value));
  ul.appendChild(li);
  input.value = " ";
};

li.addEventListener("click", function() {
  li.classList.toggle("done");
});

export const deletes = document.getElementById("deleteItem");
deletes.onclick = () => {
  li.classList.toggle("delete");
  ul.removeChild(li);
};