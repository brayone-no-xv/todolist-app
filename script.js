// ambil elemen DOm
const BtnAddTask = document.getElementById("InputData");
const Tasklist = document.querySelector("ul");
const TaskItems = document.getElementsByTagName("li");
const InputTask = document.getElementById("id_item");
const BtnDeleteTask = document.getElementById("delete_item");

// Nambah Item
InputTask.ondblclick = () => {
  const newLi = document.createElement("li");
  ulTask.appendChild(newLi);
  newItem.appendChild(document.createTextNode(input.value));
  input.value = "";
  console.alert("tes");
};

// Hapus Item
BtnDeleteTask.onclick = () => {
  Tasklist.removeChild(TaskItems[0]);
};
