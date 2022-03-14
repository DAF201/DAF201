document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.keyCode === 90) {
        xhr.open("POST", '/register', true);
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
        xhr.send();
    } else {
        document.getElementById('msg1').innerHTML = e.keyCode
    }
})
