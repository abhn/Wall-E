let currentSearchTerm = '';

onload = function () {
   var e = document.getElementById('search-input');
   e.oninput = changeHandler;
   e.onpropertychange = e.oninput; // for IE8
    document.getElementById('search-input').addEventListener('keyup', handleKeyPress);
};

function changeHandler(e) {
    currentSearchTerm = e.target.value;
}

function handleKeyPress(e) {
    if (e && e.key === 'Enter') {
        handleSubmit();
    }
}

function handleSubmit() {
    window.open('https://www.google.com/search?q=site:' + window.location.hostname + ' ' + currentSearchTerm);
}