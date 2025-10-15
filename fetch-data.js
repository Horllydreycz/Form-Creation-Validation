async function fetchUserData() {
  const apiUrl = "https://jsonplaceholder.typicode.com/users";
  const DataContainer = document.getElementById("api-data");
  try {
    const response = await fetch(apiUrl);
    const users = await response.json();
    DataContainer.innerHTML = "";
    const userList = document.createElement("ul");
    array.forEach((users) => {
      const list = document.createElement("li");
      list.textContent = userList;
      userList.appendChild(list);
    });
    DataContainer.appendChild(userList);
  } catch (error) {
    DataContainer.innerHTML = "Failed to load user data.";
  }
}
document.addEventListener("DOMContentLoaded", fetchUserData);
