const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('.list');

button.addEventListener('click',() => {
    //get the input value
    let chapter = input.value;
    let li = document.createElement('li');
    let listBtn = document.createElement('button');
    li.textContent = `${chapter}`;
    
    listBtn.textContent = `❌`;
    li.appendChild(listBtn);
    list.appendChild(li);
    listBtn.addEventListener("click", () => {

    })

    input.focus();
    input.value = "";
})