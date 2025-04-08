function upDate(previewPic) {
    console.log("onmouseover event triggered");

    console.log("Alt:", previewPic.alt);
    console.log("Source:", previewPic.src);

    document.getElementById('image').innerHTML = previewPic.alt;

    document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";

    console.log("New background image:", document.getElementById('image').style.backgroundImage);
}

function unDo() {
    document.getElementById('image').innerHTML = "Hover over an image below to display it here";

    document.getElementById('image').style.backgroundImage = "url('')";
}