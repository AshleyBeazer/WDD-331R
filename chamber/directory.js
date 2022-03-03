const request = './data.json';
const cards = document.querySelector(".cards");

fetch(request)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const business = jsonObject['business'];
    business.forEach(displayBusiness);

    function displayBusiness(business) {
    
    let card = document.createElement('section');
    let image = document.createElement('img');
    let h2 = document.createElement('h2');
    let span1 = document.createElement('span');
    let span2 = document.createElement('span');
    let span3 = document.createElement('span');
    
  
    h2.textContent = business.name + " ";
    span1.innerHTML = `Address: ${business.address}`
    span2.innerHTML = `Phone Number: ${business.phone}`
    span3.innerHTML = `Website: ${business.website}`
  
    image.setAttribute('src', business.image);
    image.setAttribute('alt', `Image of ${business.name}`);
    image.setAttribute('loading', 'lazy');
  
    card.appendChild(h2);
    card.appendChild(span1);
    card.appendChild(span2);
    card.appendChild(span3);
    card.appendChild(image);
  
    cards.appendChild(card);

}});