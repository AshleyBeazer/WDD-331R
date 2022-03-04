const request = './data.json';
let business = null;

fetch(request)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    business = jsonObject['business'];
    business.forEach(displayBusiness);
  });
    function displayBusiness(business) {
    
    let card = document.createElement('section');
    let image = document.createElement('img');
    let name = document.createElement('h2');
    let address = document.createElement('span');
    let phone = document.createElement('span');
    let website = document.createElement('a');
    
  
    name.textContent = business.name;
    address.textContent = business.address;
    phone.textContent = business.phone;
    website.textContent = business.website;
  
    image.setAttribute('src', business.image);
    image.setAttribute('alt', `Image of ${business.name}'s logo`);
    image.setAttribute('loading', 'lazy');
  
    
    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);
   
  
    document.getElementById('cards').appendChild(card);

}

function toogleView() {
  document.getElementById('gridBtn').classList.toggle('active')
  document.getElementById('cards').classList.toggle('active')
}
function toogleView() {
  document.getElementById('listBtn').classList.toggle('active')
  document.getElementById('cards').classList.toggle('active')
}