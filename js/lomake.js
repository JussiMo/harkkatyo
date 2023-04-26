let note = document.getElementById("viesti");
let checkbox = document.getElementById("important");
let body = document.querySelector("body");
document.querySelector("button").addEventListener("click",addNote);


function addNote () {
    let h3 = document.createElement("h3");
    let p = document.createElement("p");
    p.textContent = note.value
    
    //onko checkbox täppi
    
    if (checkbox.checked) {
        h3.classList.add("important");
        p.classList.add("important");
    }
    //kaikki elementit bodyn sisälle
    body.append(h3,p,document.createElement("hr"));
}