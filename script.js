// Variable Declaration----------------------
const navlinks =document.getElementsByClassName('nav-link');
var services1 = document.getElementById('services1')
var services2 = document.getElementById('services2')
var services3 = document.getElementById('services3')
var services4 = document.getElementById('services4')
var services5 = document.getElementById('services5')
var services6 = document.getElementById('services6')
const cards= document.getElementsByClassName('card')

const pricing =document.getElementsByClassName('package');
const services =document.getElementById('services')

//Intersection Observer API for animations
const options = {};
const observer = new IntersectionObserver(function(entries,observer) {
    // Loop over the entries
    entries.forEach(entry => {
      // If the element is visible
      if (entry.isIntersecting) {
        // Add the animation class
        entry.target.classList.add('slide-in-left');
        observer.unobserve(entry.target);
        //document.querySelector('#services1').classList.add('slide-in-left');
        
      }
    });
  }, options);
  const observerright = new IntersectionObserver(function(entriesright,observerright) {
    // Loop over the entriesright
    entriesright.forEach(entryright => {
      // If the element is visible
      if (entryright.isIntersecting) {
        // Add the animation class
        entryright.target.classList.add('slide-in-right');
        observerright.unobserve(entryright.target);
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




  Array.prototype.forEach.call(pricing, price => {
    observer.observe(price)
    
  });
  observer.observe(services)

  // Array.prototype.forEach.call(cards, card => {
  //   observer2.observe(card)
  // });

  const about =document.getElementById('about');
  const options2 = {
      root:null,
      threshold:0,
      rootMargin: '-35%'
  };

  
  
  

  
  // Navbar active anchor tag (there must be a better way to do this)
  
function link1(){
    navlinks[0].classList.add('active');
    navlinks[1].classList.remove('active');
    navlinks[2].classList.remove('active');
    navlinks[3].classList.remove('active');
    // navlinks[4].classList.remove('active');
    // navlinks[5].classList.remove('active');
    
}
function link2(){
    navlinks[1].classList.add('active');
    navlinks[0].classList.remove('active');
    navlinks[2].classList.remove('active');
    navlinks[3].classList.remove('active');
    // navlinks[4].classList.remove('active');
    // navlinks[5].classList.remove('active');
    
}
function link3(){
    navlinks[2].classList.add('active');
    navlinks[1].classList.remove('active');
    navlinks[0].classList.remove('active');
    navlinks[3].classList.remove('active');
    // navlinks[4].classList.remove('active');
    // navlinks[5].classList.remove('active');
    
}
function link4(){
    navlinks[3].classList.add('active');
    navlinks[2].classList.remove('active');
    navlinks[1].classList.remove('active');
    navlinks[0].classList.remove('active');
    // navlinks[4].classList.remove('active');
    // navlinks[5].classList.remove('active');
    
}
// function link5(){
//     navlinks[4].classList.add('active');
//     navlinks[1].classList.remove('active');
//     navlinks[2].classList.remove('active');
//     navlinks[3].classList.remove('active');
//     navlinks[0].classList.remove('active');
//     navlinks[5].classList.remove('active');
    
// }
// function link6(){
//     navlinks[5].classList.add('active');
//     navlinks[1].classList.remove('active');
//     navlinks[2].classList.remove('active');
//     navlinks[3].classList.remove('active');
//     navlinks[0].classList.remove('active');
//     navlinks[4].classList.remove('active');
    
// }

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


