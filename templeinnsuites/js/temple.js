const request = './data.json';
let temple = null;

fetch(request)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    temple = jsonObject['temple'];
    temple.forEach(displayTemple);
  });
    function displayTemple(temple) {
    
    let card = document.createElement('section');
    let image = document.createElement('img');
    let name = document.createElement('h2');
    let address = document.createElement('div');
    let phone = document.createElement('div');
    let email = document.createElement('div');
    let services = document.createElement('div');
    let history = document.createElement('div');
    let ordinance = document.createElement('div');
    let session = document.createElement('div');
    let closed = document.createElement('div');
    
  
    name.textContent = temple.name;
    address.textContent = temple.address;
    phone.textContent = temple.phone;
    email.textContent = temple.email;
    services.textContent = temple.services;
    history.textContent = temple.history;
    ordinance.textContent = temple.ordinance;
    session.textContent = temple.session;
    closed.textContent = temple.closed;
    image.setAttribute('src', temple.image);
    image.setAttribute('alt', `Image of ${temple.name}`);
    image.setAttribute('loading', 'lazy');
  
    
    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(email);
    card.appendChild(services);
    card.appendChild(history);
    card.appendChild(ordinance);
    card.appendChild(session);
    card.appendChild(closed);

   
  
    document.getElementById('cards').appendChild(card);

}