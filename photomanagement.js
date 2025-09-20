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
    }
}

function updateURL(page) {
    const newUrl = `${window.location.pathname}?page=${page}`;
    history.replaceState(null, "", newUrl);
}

function replacePage(r, n) {
    pagesets[r].style.display = "none";
    pagesets[n].style.display = "";

    loadPageImages(pagesets[n]);
}

function forward() {
    if (pageInt < pagesets.length - 1) {
        replacePage(pageInt, pageInt + 1);
        pageInt++;
        updateURL(pageInt);
    }
}

function backward() {
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
  imgs.forEach(img => {
    img.src = img.dataset.src; // load
    img.removeAttribute("data-src"); // clean ?
  });
}