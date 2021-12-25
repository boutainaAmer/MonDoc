const body = document.body;
let lastScroll=0;

window.addEventListener('scroll',()=>{
  const currentScroll = window.pageYOffset

  
  if (currentScroll<=0){
    body.classList.remove("scroll-up")
  }

  if(currentScroll>lastScroll && !body.classList.contains("scroll-down")){
    body.classList.remove("scroll-up")
    body.classList.add("scroll-down")


  }
  if(currentScroll < lastScroll && body.classList.contains("scroll-down")){
    body.classList.remove("scroll-down")
    body.classList.add("scroll-up")


   
  }
  lastScroll=currentScroll;




})


var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

var a = 2 ;
let b = 2.3;
function test(){
    var a=4;
    let b=9;
}

console.log(`$a  $b`);







