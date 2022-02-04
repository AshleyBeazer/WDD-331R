const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('list');

button.addEventListener('click',() => {
    //get the list size
    let size = input(favchap.value);
    //build HTML
    let mylist = '';

    const listItem = document.createElement('li');
    const listText = document.createElement('span');
    const listBtn = document.createElement('button');

    listItem.appendChild(li);
    listText.textContent = myFavChap;
    listItem.appendChild(listBtn);
    listBtn.textContent = 'Delete';
    list.appendChild(listItem);

    listBtn.addEventListener = function(e) {
        list.removeChild(listItem);
    }

    input.focus();
}
