const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const pageStr = urlParams.get('page');

let pageInt = parseInt(pageStr);

// nonexistent: curb / too small curb
if (isNaN(pageInt) || pageInt < 0) {
    pageInt = 0;
    updateURL(pageInt);
}

let pagesets = [];

// gotta wait for load for this:
function loadfindpage(pageInt) {
    pagesets = document.getElementsByClassName("book");

    // First pageset is the table of contents
    // umm but that starts at 0!!!! because programmererere

    // too large curb
    if (pageInt >= pagesets.length) {
        pageInt = pagesets.length - 1;
        updateURL(pageInt);
    }

    for (let i = 0; i < pagesets.length; i++) {
        if (i == pageInt) {
            pagesets[i].style.display = ""; // default
            loadPageImages(pagesets[i]);
        } else {
            pagesets[i].style.display = "none";
        }

        let idx;
        if (i > 0) idx = i;
        else idx = "index";

        const topRight = document.createElement('div');
        topRight.textContent = idx;
        topRight.className = 'page-index-marker';
        topRight.style.position = 'absolute';
        topRight.style.top = '0';
        topRight.style.right = '0';

        const bottomRight = document.createElement('div');
        bottomRight.textContent = idx;
        bottomRight.className = 'page-index-marker';
        bottomRight.style.position = 'absolute';
        bottomRight.style.bottom = '0';
        bottomRight.style.right = '0';


        pagesets[i].appendChild(topRight);
        pagesets[i].appendChild(bottomRight);
    }
}

// also assign page numbers

function updateURL(page) {
    const newUrl = `${window.location.pathname}?page=${page}`;
    history.replaceState(null, "", newUrl);
}

function replacePage(r, n) {
    pagesets[r].style.display = "none";
    pagesets[n].style.display = "";

    loadPageImages(pagesets[n]);
}

function tryforward() {
    if (pageInt < pagesets.length - 1) {
        replacePage(pageInt, pageInt + 1);
        pageInt++;
        updateURL(pageInt);
    }
}

function trybackward() {
    if (pageInt > 0) {
        replacePage(pageInt, pageInt - 1);
        pageInt--;
        updateURL(pageInt);
    }
}

window.onload = function () {
    loadfindpage(pageInt);
}

function loadPageImages(bookpagesetEL) {
    const imgs = bookpagesetEL.querySelectorAll("img[data-src]");
    console.log("bookpagesetEL:", bookpagesetEL);
    console.log("videos found:", bookpagesetEL.querySelectorAll("video"));


    imgs.forEach(img => {
        if (img.dataset.src) {
            img.src = img.dataset.src; // load
            img.removeAttribute("data-src");
        }

    });

    const vids = bookpagesetEL.querySelectorAll("video");
    vids.forEach(vid => {

        const source = vid.querySelector("source");

        if (source.dataset.src) {
            source.src = source.dataset.src;
            source.removeAttribute("data-src");
            vid.load();
        }
    });
}


window.addEventListener('keydown', (event) => {
    console.log("Pressed:", event.key);

    if (event.key === 's' || event.key === 'S') {
        trybackward();
    }

    if (event.key === 'f' || event.key === 'F') {
        tryforward();
    }
});
