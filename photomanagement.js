const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const pageStr = urlParams.get('page');

let pageInt = parseInt(pageStr);
let pagesets = [];

// gotta wait for load for this:
function loadfindpage(pageInt) {
    pagesets = document.getElementsByClassName("book");

    // First pageset is the table of contents
    // umm but that starts at 0!!!! because programmererere

    for (let i = 0; i < pagesets.length; i++) {
        if (i == pageInt) {
            pagesets[i].style.display = ""; // default
        } else {
            pagesets[i].style.display = "none";
        }
    }
}

function replacePage(r, n) {
    pagesets[r].style.display = "none";
    pagesets[n].style.display = "";
}

function forward() {
    if (pageInt < pagesets.length - 1) {
        replacePage(pageInt, pageInt + 1);
        pageInt++;
    }
}

function backward() {
    if (pageInt > 0) {
        replacePage(pageInt, pageInt - 1);
        pageInt--;
    }
}

window.onload = function() {
    loadfindpage(pageInt);
}