function handleFormSubmit(event) {
    event.preventDefault();
    const Details = {
        amount: document.getElementById("amount").value,
        description: document.getElementById("description").value,
        category: document.getElementById("category").value
    };
    document.getElementById("amount").value = "";
    document.getElementById("description").value = "";
    document.getElementById("category").value = "";
    
    localStorage.setItem(Details.description, JSON.stringify(Details));
    addToList(Details);
}

function addToList(Details) {
    const li = document.createElement("li");
    li.innerHTML = `Amount: ${Details.amount} Description-${Details.description} Category-${Details.category} <button onclick="deleteItem(this,'${Details.description}')">Delete</button> <button onclick="editItem(this,'${Details.description}')">Edit</button>`;
    const list = document.querySelector("ul");
    list.appendChild(li);
}

function deleteItem(button,description){
    const liItem=button.parentNode;
    liItem.parentNode.removeChild(liItem);
    //local storage remove item
    localStorage.removeItem(description);
}
// module.exports=handleFormSubmit

function editItem(button,description) {
    var userData =JSON.parse(localStorage.getItem(description)) ; 
    const liItem=button.parentNode;
    liItem.parentNode.removeChild(liItem);
    //local storage remove item
    localStorage.removeItem(description);
    document.getElementById("amount").value=userData.amount;
    document.getElementById("description").value=userData.description;
    document.getElementById("category").value=userData.category;

}

function loadList() {
    // 
    
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const Details = JSON.parse(localStorage.getItem(key));
      addToList(Details);
    }
  }
  
  // Call populateList when the page loads to show existing items
  
    document.addEventListener("DOMContentLoaded", loadList);
