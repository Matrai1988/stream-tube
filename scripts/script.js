const colorIcons = document.querySelectorAll('.navbar-color-ico');

function setColorScheme() {
    localStorage.setItem("colorScheme", `${this.id == 'dark-icon' ? 'dark' : 'light'}`);
    location.reload();
}

(function () {
    if(colorScheme == 'dark'){
        document.getElementById('dark-icon').remove()
    } else {
        document.getElementById('light-icon').remove()
    }
})();



colorIcons.forEach(icon => icon.addEventListener('click', setColorScheme));

