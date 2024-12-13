// ambil elemen DOm
const InputTask = document.getElementById("InputData");
const Tasklist = document.querySelector("ul");
const TaskItems = document.getElementsByTagName("li");
const BtnInputTask = document.getElementById("id_item");
const BtnDeleteTask = document.getElementById("delete_item");

// Nambah Item
BtnInputTask.ondblclick = () => {
  const NewItem = document.createElement("li");
  Tasklist.appendChild(NewItem);
  NewItem.appendChild(document.createTextNode(InputTask.value));
  InputTask.value = "";
  console.alert("Berhasil nambah tugas!");
};

// Hapus Item setelah nambah item
BtnDeleteTask.onclick = () => {
  Tasklist.removeChild(TaskItems[0]);
};
