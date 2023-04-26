let poster = document.getElementById("name")
let note = document.getElementById("note");
let checkbox = document.getElementById("important");
let notes = document.getElementById("notes");
document.getElementById("add").addEventListener("click",addNote);


function addNote () {
    console.log(poster.value)
    console.log(note.value)
    let h3 = document.createElement("h3");
    let p = document.createElement("p");
    h3.textContent = poster.value;
    p.textContent = note.value;
    
    //onko checkbox täppi
    
    if (checkbox.checked) {
        h3.classList.add("important");
        p.classList.add("important");
    }
    //kaikki elementit bodyn sisälle
    //notes.append(h3,p,document.createElement("notes"));
    notes.appendChild(h3);
    notes.appendChild(p);
    notes.appendChild(document.createElement("hr"));
}