const items=document.querySelectorAll('.item');

items.forEach (item =>{
    item.addEventListener ('mouseover', () => {
    removeFocus();
    item.classList.add('selected');
    })

    removeFocus =() =>{
        items.forEach (item => {
        item.classList.remove ('selected');
        })
    }
})




gsap.from(".title", {delay: 0.5, duration: 2, x: 100, opacity:0, stagger: 1})
gsap.from(".photo", {delay: 0.5, duration: 2, x: 100, opacity:0, stagger: 1})
gsap.from(".box", {delay: 0.05, duration: 2, y: 100, opacity:0, stagger: 1})
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 100,
      "density": {
        "enable": true,
        "value_area": 3000
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});


gsap.to("h1", {
  text :"Меня зовут Татьяна.  Я фронтенд - разработчик. ",
  delay: 1,
  duration: 3,
  ease: 'power1.in'
})


const next = document.querySelector("#next");
const back = document.querySelector("#back");

const photos = ['https://cdn.glitch.global/4ae155e9-6da1-4ef1-b592-24cf8b94c5e7/1.png?v=1653585503526', 'https://cdn.glitch.global/4ae155e9-6da1-4ef1-b592-24cf8b94c5e7/2.jpg?v=1653585514103', 'https://cdn.glitch.global/4ae155e9-6da1-4ef1-b592-24cf8b94c5e7/3.png?v=1653585538717', 'https://cdn.glitch.global/4ae155e9-6da1-4ef1-b592-24cf8b94c5e7/1-1.png?v=1653585508798', 'https://cdn.glitch.global/4ae155e9-6da1-4ef1-b592-24cf8b94c5e7/2-2.png?v=1653585531351', 'https://cdn.glitch.global/4ae155e9-6da1-4ef1-b592-24cf8b94c5e7/5.png?v=1653585578108', 'https://cdn.glitch.global/4ae155e9-6da1-4ef1-b592-24cf8b94c5e7/11-1.png?v=1653889557788', 'https://cdn.glitch.global/4ae155e9-6da1-4ef1-b592-24cf8b94c5e7/12-1.png?v=1653889570460'];

let i = 0;


next.addEventListener('click',  () =>  {
i++;  
if (i > photos.length-1) {
  i=0;
}
document.querySelector("#pictures").src = photos[i];

})

back.addEventListener('click', () => {
    i--;
    if (i < 0) {
      i=photos.length-1;
    }
    document.querySelector("#pictures").src = photos[i];
  })
  
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
          document.getElementById("myBtn").style.display = "block";
      } else {
          document.getElementById("myBtn").style.display = "none";
      }
  }
  
  function topFunction() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; 
  }