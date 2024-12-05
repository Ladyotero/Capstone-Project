'use strict'

// array of hobbies
const hobbies = ["Pickleball", "Tennis", "Cycling", "Breweries", "Foodies","Hiking"];
const hobbyList = document.getElementById('hobby-list');

hobbies.forEach(hobby => {
    const listItem = document.createElement('li');
    listItem.className = "list-group-item"  //adding the  bootstrap class

    listItem.textContent = hobby; // setting the hobby txt
    hobbyList.appendChild(listItem); // appending to the list
    
});
