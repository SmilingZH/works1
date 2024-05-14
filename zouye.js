document.getElementById('toggle-theme').addEventListener('click', function () {
    var content = document.getElementById('content');
    content.classList.toggle('day');
    content.classList.toggle('night');

});