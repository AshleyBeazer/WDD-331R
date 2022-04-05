function changeImg() {
    let image = document.getElementById('myImg');
    if (image.src.match("./images/icons8-heart-50.png")) {
        image.src = "./images/icons8-heart-48.png";
    }
    else {
        image.src = "./images/icons8-heart-50.png";
    }
}

