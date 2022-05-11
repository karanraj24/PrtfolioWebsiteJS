/* Typing Animation */
var typed = new Typed(".typing", {
    strings:["","Mobile Application Developer","Web Developer","UX/UI Designer","Thinker","Solver"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})
/* === Aside === */
const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalnavList = navList.length;
      for(let i=0; i<totalnavList; i++)
      {
          const a = navList[i].querySelector("a");
          a.addEventListener("click", function(){
              for(let j=0; j<totalnavList; j++)
              {
                  navList[j].querySelector("a").classList.remove("active");
              }
              this.classList.add("active")
          })
      }
const navTogglerBtn = document.querySelector(".nav-toggler"),
      aside = document.querySelector(".aside");
      navTogglerBtn.addEventListener("click", () => 
      {
          asideSectionTogglerBtn();
      })
      function asideSectionTogglerBtn()
      {
          aside.classList.toggle("open"); 
          navTogglerBtn.classList.toggle("open");
      }
window.addEventListener("scroll", () => 
{
    if(document.querySelector(".aside").classList.contains("open"))
    {
        document.querySelector(".aside").classList.remove("open");
        document.querySelector(".nav-toggler").classList.remove("open");
    }
})