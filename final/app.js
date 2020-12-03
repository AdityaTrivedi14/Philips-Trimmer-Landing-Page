function change(color,image){
    document.querySelector('body').style.background = color;
    document.querySelector('#btn').style.color = color;
    document.querySelector('#image').src = image;
}