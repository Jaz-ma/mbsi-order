
var services1 = document.getElementById('services1')
var services2 = document.getElementById('services2')
var services3 = document.getElementById('services3')
var services4 = document.getElementById('services4')
var services5 = document.getElementById('services5')
var services6 = document.getElementById('services6')
const cards= document.getElementsByClassName('card')
const action =document.getElementById('action')
const pricing =document.getElementsByClassName('prc-single');
const services =document.getElementById('services')
const options = {};
const observer = new IntersectionObserver(function(entries,observer) {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('slide-in-right');
        observer.unobserve(entry.target);
        //document.querySelector('#services1').classList.add('slide-in-left');
        
      }
    });
  }, options);
  observer.observe(services1);
  observer.observe(services4);
  observer.observe(services2);
  observer.observe(services3);
  observer.observe(services5);
  observer.observe(services6);
  observer.observe(action);


  const observer2 = new IntersectionObserver(function(entries2,observer2) {
    // Loop over the entries
    entries2.forEach(entry2 => {
      // If the element is visible
      if (entry2.isIntersecting) {
        // Add the animation class
        
        entry2.target.classList.add('slide-in-down');
        observer2.unobserve(entry2.target);
        //document.querySelector('#services1').classList.add('slide-in-left');
        
      }
    });
  }, options);
  Array.prototype.forEach.call(pricing, price => {
    observer2.observe(price)
    
  });
  observer2.observe(services)

  Array.prototype.forEach.call(cards, card => {
    observer2.observe(card)
  });

  const about =document.getElementById('about');
  const options2 = {
      root:null,
      threshold:0,
      rootMargin: '-35%'
  };
const observer3 = new IntersectionObserver(function(entries3,observer3) {
    // Loop over the entries
    entries3.forEach(entry3 => {
      // If the element is visible
      if (entry3.isIntersecting) {
        // Add the animation class
        
        entry3.target.classList.add('slide-in-down');
        console.log(entry3.target)
        observer3.unobserve(entry3.target);
        //document.querySelector('#services1').classList.add('slide-in-left');
        
      }
    });
  }, options2);
  observer3.observe(about);
  
  
  const navlinks =document.getElementsByClassName('nav-link');

  
function link1(){
    navlinks[0].classList.add('active');
    navlinks[1].classList.remove('active');
    navlinks[2].classList.remove('active');
    navlinks[3].classList.remove('active');
    navlinks[4].classList.remove('active');
    navlinks[5].classList.remove('active');
    navlinks[6].classList.remove('active');
}
function link2(){
    navlinks[1].classList.add('active');
    navlinks[0].classList.remove('active');
    navlinks[2].classList.remove('active');
    navlinks[3].classList.remove('active');
    navlinks[4].classList.remove('active');
    navlinks[5].classList.remove('active');
    navlinks[6].classList.remove('active');
}
function link3(){
    navlinks[2].classList.add('active');
    navlinks[1].classList.remove('active');
    navlinks[0].classList.remove('active');
    navlinks[3].classList.remove('active');
    navlinks[4].classList.remove('active');
    navlinks[5].classList.remove('active');
    navlinks[6].classList.remove('active');
}
function link4(){
    navlinks[3].classList.add('active');
    navlinks[2].classList.remove('active');
    navlinks[1].classList.remove('active');
    navlinks[0].classList.remove('active');
    navlinks[4].classList.remove('active');
    navlinks[5].classList.remove('active');
    navlinks[6].classList.remove('active');
}
function link5(){
    navlinks[4].classList.add('active');
    navlinks[1].classList.remove('active');
    navlinks[2].classList.remove('active');
    navlinks[3].classList.remove('active');
    navlinks[0].classList.remove('active');
    navlinks[5].classList.remove('active');
    navlinks[6].classList.remove('active');
}
function link6(){
    navlinks[5].classList.add('active');
    navlinks[1].classList.remove('active');
    navlinks[2].classList.remove('active');
    navlinks[3].classList.remove('active');
    navlinks[0].classList.remove('active');
    navlinks[4].classList.remove('active');
    navlinks[6].classList.remove('active');
}
function link7(){
    navlinks[6].classList.add('active');
    navlinks[1].classList.remove('active');
    navlinks[2].classList.remove('active');
    navlinks[3].classList.remove('active');
    navlinks[0].classList.remove('active');
    navlinks[4].classList.remove('active');
    navlinks[5].classList.remove('active');
}
window.addEventListener('scroll', function(){
    var scroll = document.querySelector('.Back-to-top');
    scroll.classList.toggle("active-btn",this.window.scrollY > 750 )
})
function scrollToTop(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
       
    })
}
