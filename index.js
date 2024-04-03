const btn = document.querySelectorAll(".button")
const body = document.querySelector("body")

btn.forEach(function(button){
    button.addEventListener('click', function(event){
        body.style.backgroundColor = event.target.id;
    });
});