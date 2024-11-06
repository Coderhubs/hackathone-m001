function myFunction():void {
    const x = document.getElementById("skills") as HTMLElement;

    if(x){
        x.style.display = x.style.display === "none"? "block" :"none"
    }

}
myFunction();

function mytoogleFunction():void {
    const y = document.getElementById("tools") as HTMLElement;

    if(y){
        y.style.display = y.style.display === "none"? "block" :"none"
    }


}
mytoogleFunction();

function showWorkExperience() {
    const experienceSection = document.getElementById("work-Experience");
    const icon = document.getElementById("icon") as HTMLImageElement; // Type assertion
  
    if (experienceSection) { // Check if experienceSection is not null
      if (experienceSection.style.display === "none" || experienceSection.style.display === "") {
        experienceSection.style.display = "block";
        icon.src = "icons8-expand-arrow-24 (1).png"; // Update the icon to collapse
      } else {
        experienceSection.style.display = "none";
        icon.src = "icons8-expand-arrow-24 (1).png"; // Update the icon to expand
      }
    } else {
      console.warn("Element with id 'work-Experience' not found.");
    }
  }
  
  showWorkExperience();


  function myeducation() {
    const experienceSection = document.getElementById("education-detail");
    const icon = document.getElementById("icon") as HTMLImageElement; 
  
    if (experienceSection) { 
      if (experienceSection.style.display === "none" || experienceSection.style.display === "") {
        experienceSection.style.display = "block";
        icon.src = "icons8-expand-arrow-24 (1).png"; 
      } else {
        experienceSection.style.display = "none";
        icon.src = "icons8-expand-arrow-24 (1).png"; 
      }
    } else {
      console.warn("Element with id 'work-Experience' not found.");
    }
  }
  
  myeducation();