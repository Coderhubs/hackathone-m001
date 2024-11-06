function myFunction() {
    var x = document.getElementById("skills");
    if (x) {
        x.style.display = x.style.display === "none" ? "block" : "none";
    }
}
myFunction();
function mytoogleFunction() {
    var y = document.getElementById("tools");
    if (y) {
        y.style.display = y.style.display === "none" ? "block" : "none";
    }
}
mytoogleFunction();
function showWorkExperience() {
    var experienceSection = document.getElementById("work-Experience");
    var icon = document.getElementById("icon"); // Type assertion
    if (experienceSection) { // Check if experienceSection is not null
        if (experienceSection.style.display === "none" || experienceSection.style.display === "") {
            experienceSection.style.display = "block";
            icon.src = "icons8-expand-arrow-24 (1).png"; // Update the icon to collapse
        }
        else {
            experienceSection.style.display = "none";
            icon.src = "icons8-expand-arrow-24 (1).png"; // Update the icon to expand
        }
    }
    else {
        console.warn("Element with id 'work-Experience' not found.");
    }
}
showWorkExperience();
function myeducation() {
    var experienceSection = document.getElementById("education-detail");
    var icon = document.getElementById("icon");
    if (experienceSection) {
        if (experienceSection.style.display === "none" || experienceSection.style.display === "") {
            experienceSection.style.display = "block";
            icon.src = "icons8-expand-arrow-24 (1).png";
        }
        else {
            experienceSection.style.display = "none";
            icon.src = "icons8-expand-arrow-24 (1).png";
        }
    }
    else {
        console.warn("Element with id 'work-Experience' not found.");
    }
}
myeducation();
