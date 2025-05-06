function changeTitle() {
    document.title = "Introduction to Javascript DOM";
}
changeTitle();

const title = document.getElementById("title");
title.textContent = "Introduction to Javascript DOM Manipulation";

function removeFromList() {
    let list = document.getElementById("list")
    if (list.children.length > 0) {
        list.removeChild(list.lastElementChild)
    }
}

let skills = ["web development", "Graphics design", "game development"];
let index = 0;
function changeSkill() {
    
    let change = document.getElementById("skills");
    //change.style.opacity = 0; // Fade out effect
            
    setTimeout(() => {
        index = (index + 1) % skills.length; // Loop through array
        change.textContent = skills[index];
        //change.style.opacity = 1; // Fade in effect
    }, 500); // Change after fade out
}
setInterval(changeSkill, 2000); // Change skill every 2 seconds