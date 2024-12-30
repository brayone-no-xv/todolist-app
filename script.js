// ambil elemen DOm
const inputTeks = document.getElementById("InputData");
const Tasklist = document.querySelector("ul");
const TaskItems = document.getElementsByTagName("li");
const BtnInputTask = document.getElementById("id_item");
const BtnDeleteTask = document.getElementById("delete_item");

// Nambah Item
BtnInputTask.addEventListener("click", () => {
  const NewItem = document.createElement("li");
  Tasklist.appendChild(NewItem).append(
    document.createTextNode(inputTeks.value)
  );
  inputTeks.value += Tasklist.target.value;
});

// Hapus Item setelah nambah item
BtnDeleteTask.onclick = () => {
  BtnDeleteTask.classList.add("button");
  Tasklist.removeChild(TaskItems[0]);
};
