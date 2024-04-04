const search = document.getElementById("search");
search.addEventListener("keydown", function(event){
    if(event.key === 'Enter'){
        window.open(search.value, '_blank');
    }
});
document.addEventListener('DOMContentLoaded', function(event) {
  document.body.style.opacity = 1;
});
function offline(){
  document.body.style.opacity = 0;
  setTimeout(function() {
    window.location.href= "offline.html";
}, 500);
}
function menu() {
    const x = document.querySelector('.menu');
    const y = document.querySelector('.storems');
    if (x.style.height === y.style.height) 
        {
          x.style.height = "600px";
          x.style.transition = ".5s ease-in-out";
        } 
    else {
          if(x.style.height === "0px")
            { 
              if(y.style.height === "600px")
              {
                y.style.height='0px';
                y.style.transition='.5s ease-in-out';
                x.style.height = '600px';
                x.style.transition = ".5s ease-in-out";
              }
            }
            else{
              x.style.height='0px';
              x.style.transition = ".5s ease-in-out";
            }
         }
  }
  
  function storems() {
    const y = document.querySelector('.menu');
    const x = document.querySelector('.storems');
    const z=document.getElementById('storems')
    if (x.style.height === y.style.height) 
        {
          x.style.height = "600px";
          x.style.transition = ".5s ease-in-out";
        } 
    else {
          if(x.style.height === "0px")
            { 
              if(y.style.height === "600px")
              {
                y.style.height='0px';
                y.style.transition='.5s ease-in-out';
                x.style.height = '600px';
                x.style.transition = ".5s ease-in-out";
              }
            }
            else{
              x.style.height='0px';
              x.style.transition = ".5s ease-in-out";
            }
          }
          if(z.style.height==='600px'){
              z.style.backgroundColor="rgba(238,174,90,.5)"
          }
  }