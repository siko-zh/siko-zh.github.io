function upDate(previewPic) {
    console.log("Event triggered for book:", previewPic.alt);
    document.getElementById('preview').innerHTML = previewPic.alt;
    document.getElementById('preview').style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
    document.getElementById('preview').innerHTML = "Hover over or focus on a book below to display its cover here";
    document.getElementById('preview').style.backgroundImage = "url('')";
}

function initGallery() {
    console.log("Page loaded, initializing book gallery...");
    const books = document.getElementsByClassName('preview');
    for (let i = 0; i < books.length; i++) {
        books[i].setAttribute('tabindex', '0');
        console.log("Added tabindex to book:", books[i].alt);
    }
}