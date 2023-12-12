function upadte() {
    var uid = document.getElementById('id').value;
    var upw = document.getElementById('pass').value;
    var button = document.getElementById('button');

    if (uid != false && upw != false) {
        button.removeAttribute('disabled', 'true');
    }
    else
    {
        button.setAttribute('disabled', 'true');
    }
}

setInterval(upadte, 100);


