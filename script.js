const localStorageKey = "TOTAL TUGAS";

if (typeof Storage !== "undefined") {
  if (sessionStorage.getItem(sessionStorageKey) === null) {    
    // Jika item pada local storage belum ada
    sessionStorage.setItem(sessionStorageKey, 0);
  }

  // ambil elemen 
  const inputTeks = document.getElementById("InputData");
  const Tasklist = document.querySelector("ul");
  const TaskListItem = document.getElementsByTagName("li");
  const BtnInputTask = document.getElementById("id_item");
  const BtnDeleteTask = document.getElementById("delete_item");

  Tasklist.innerText = sessionStorage.getItem(sessionStorageKey);

  // Nambah Item
  BtnInputTask.addEventListener("click", () => {
    const NewItem = document.createElement("li");
    TaskListItem.appendChild(NewItem).append(document.createTextNode(inputTeks.value));
    sessionStorage.setItem(sessionStorageKey, TaskListItem);
    inputTeks.value += Tasklist.value;
  });

  // Hapus Item setelah nambah item
  BtnDeleteTask.addEventListener("click", () => {
    sessionStorage.removeItem(sessionStorageKey);
    BtnDeleteTask.classList.add("button");
    Tasklist.removeChild(TaskListItem[0]);
  });
}



