function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();

    m = checkTime(m);
    document.getElementById('time').innerHTML = h + ":" + m;
    setTimeout(startTime, 500);
}

startTime();

document.addEventListener('DOMContentLoaded', () => {
    const profile = document.querySelector('.profile');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    profile.addEventListener('click', (event) => {
        event.preventDefault();
        dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
    });

    // Close the dropdown if clicked outside
    window.addEventListener('click', (event) => {
        if (!profile.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.style.display = 'none';
        }
    });
});
const dropdown = document.querySelector(".dropdown");
const select = dropdown.querySelector(".select");
const caret = dropdown.querySelector(".caret");
const menu = dropdown.querySelector(".menu");
const options = dropdown.querySelectorAll(".menu li");
const selected = dropdown.querySelector(".selected");
select.addEventListener("click", () => {
    select.classList.toggle("dropdown-clicked");
    caret.classList.toggle("caret-rotate");
    menu.classList.toggle("menu-open")
})
options.forEach(option => {
    option.addEventListener("click", () => {
        selected.innerText = option.innerText;
        select.classList.remove("dropdown-clicked");
        caret.classList.remove("caret-rotate");
        menu.classList.remove("menu-open");
        options.forEach(option => {
            option.classList.remove("active")
        })
        option.classList.add("active")
    })
})
