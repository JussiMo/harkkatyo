let poster = document.getElementById("name")
let note = document.getElementById("note");
let checkbox = document.getElementById("important");
let notes = document.getElementById("notes");
document.getElementById("add").addEventListener("click",addNote);



function addNote () {
    let now = new Date();
    let day = now.getDate()
    let month = now.getMonth() + 1;
    let date = day + "." + month + "."
    let dateSpan = document.createElement("span")
    let h3 = document.createElement("h3");
    let p = document.createElement("p");
    dateSpan.textContent = date;
    h3.textContent = poster.value;
    p.textContent = note.value;
    

console.log(dateSpan)
    
    if (checkbox.checked) {
        dateSpan.classList.add("important");
        h3.classList.add("important");
        p.classList.add("important");
    }

    notes.appendChild(dateSpan);
    notes.appendChild(h3);
    notes.appendChild(p);
    notes.appendChild(document.createElement("hr"));
}