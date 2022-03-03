const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
const cards = document.querySelector(".cards");

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);
    const prophets = jsonObject['prophets'];
    prophets.forEach(displayProphets);

    function displayProphets(prophet) {
    
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let span1 = document.createElement('span');
    let span2 = document.createElement('span');
    let portrait = document.createElement('img');
  
    h2.textContent = prophet.name + " " + prophet.lastname;
    span1.innerHTML = `Date of birth: ${prophet.birthdate}`
    span2.innerHTML = `Place of birth: ${prophet.birthplace}`
  
    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portait of ${prophet.name} ${prophet.lastname} ${prophet.order}th Latter-day President`);
    portrait.setAttribute('loading', 'lazy');
  
    card.appendChild(h2);
    card.appendChild(span1);
    card.appendChild(span2);
    card.appendChild(portrait);
  
    cards.appendChild(card);

}});