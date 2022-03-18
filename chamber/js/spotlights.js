// store resource URL in a const
const placeURL = "./data.json";
const i = getRandomIntInclusive(0, 9); //gold member random index
const j = getRandomIntInclusive(0, 8); // silver members random index
const k = getRandomIntInclusive(0, 18); // gold + silver members random index

// basic fetch( method) implementation
fetch(placeURL)
    .then(function (response) {
        return response.json();
    })
// validate data received
    .then(function (jsonData) {
        // console.table(jsonData);
        const placeCo = jsonData["business"];
        // console.log(spotCo)
        // filter gold members
        goldMembers = placeCo.filter(members => members.memberLevel === 1);
        // console.log(goldMembers);
        // add to page
        setInterval(function() {
            placeholderLoad()
        }, 2000);

        // filter silver members
        silverMembers = placeCo.filter(members => members.memberLevel === 2);
        allMembers = placeCo;
        
        });
        

function placeholderLoad() {
    // Load random Gold Member to spotlight 1
    document.querySelector(".place1h2").textContent = goldMembers[i].businessname;
    document.querySelector(".place1phone").innerHTML = `Phone: +${goldMembers[i].phone}`;
    document.querySelector(".place1address").textContent = goldMembers[i].website;
    document.querySelector(".place1img").setAttribute("src", goldMembers[i].logourl);
    document.querySelector(".place1img").setAttribute("alt", `${goldMembers[i].businessname} logo`)
    document.querySelector(".placeimg").setAttribute("loading", "lazy"); 

    // Load random Silver to spotlight 2
    document.querySelector(".place2h2").textContent = silverMembers[j].businessname;
    document.querySelector(".place2phone").innerHTML = `Phone: +${silverMembers[j].phone}`;
    document.querySelector(".place2address").textContent = silverMembers[j].website;
    document.querySelector(".place2img").setAttribute("src", silverMembers[j].logourl);
    document.querySelector(".place2img").setAttribute("alt", `${silverMembers[j].businessname} logo`)
    document.querySelector(".place2img").setAttribute("loading", "lazy"); 

    // load spotlight3 only when it is on screen.
    if (document.documentElement.clientWidth >= 1100) {
        document.querySelector(".place3h2").textContent = allMembers[k].businessname;
        document.querySelector(".place3phone").innerHTML = `Phone: +${allMembers[k].phone}`;
        document.querySelector(".place3address").textContent = allMembers[k].website;
        document.querySelector(".place3img").setAttribute("src", allMembers[k].logourl);
        document.querySelector(".place3img").setAttribute("alt", `${allMembers[k].businessname} logo`)
        document.querySelector(".place3img").setAttribute("loading", "lazy"); 
    } 
    false;  
}

// select random member
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
  }