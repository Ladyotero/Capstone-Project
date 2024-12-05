
'use strict';

//Example of a loop

 const hobbies = ["Pickleball", "Tennis", "Hiking", "Road Trips"];
 const hobbyList = document.getElementById("hobby-list");

 hobbies.forEach((hobby) => {
  const listItem = document.createElement("li");
  listItem.className = "list-group-item";
  listItem.textContent = hobby;
  hobbyList.appendChild(listItem);

});





'use strict';


const eventos = [
  {
    name: 'Diversity and Inclusion',
    subject: 'A Tech Necessity',
    Resolution:'Research consistently shows that diverse teams are more creative,solve problems faster',
    need: true
  },
  {
    name: 'Women in Tech',
    subject: 'Leading the Charge',
    Resolution:'Women continue to make significant strides in technology, yet they remain underrepresented in leadership roles and certain technical fields',
    need: true
  },
  {
    name: 'The Role of Technology in Empowerment',
    subject: 'Is a Powerful Tool',
    Resolution:'Advocate for inclusive hiring and workplace policies.'
  }
];



function renderEvent1() {
  const list = document.getElementById('worklifeLists');

  if (!list) {
    console.error('Element with id "worklifeLists" not found in the document.');
    return;
  }

  list.innerHTML = ''; // clear any existing content

  eventos.forEach(event => {
    const listItem = document.createElement('li');

    listItem.innerHTML =
      `<h5>${event.name}</h5>
       <p>Subject: ${event.subject}</p>
       <p>Resolution: ${event.Resolution}</p>
    `;
    
    list.appendChild(listItem);
  });


}
renderEvent1();






'use strict';

function showAlert() {
  alert("Cheers!");
}

//adding an event to trigger the function when the button is clicked

const alertButton = document.getElementById('alertButton');
alertButton.addEventListener('click', showAlert);
