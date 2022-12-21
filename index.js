var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contains");
    function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link");
        }
        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
        var sidemenu = document.getElementById("sidemenu");
       
   
    }
    let typed = new Typed('.auto-type', 
    {
        strings: ['नमस्ते', 'Hi', 'Hello', 'Holā', 'Nǐn hǎo'],
        typeSpeed: 100,
        backSpeed: 100,
        loop:true
})
function openmenu(){
    sidemenu.style.right = "0";
}
function closemenu(){
    sidemenu.style.right = "-200px";
}