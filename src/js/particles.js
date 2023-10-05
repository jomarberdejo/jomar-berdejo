
      
particlesJS('particles-js', {
  "particles": {
    "number": {
      "value": 5,
      "density": {
        "enable": true,
        "value_area": 900
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0.8,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      }
    },
    "opacity": {
      "value": 0.9,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 5,
        "opacity_min": 0,
        "sync": true
      }
    },
    "size": {
      "value": 5,
      "random": true,
      "anim": {
        "enable": false, 
        "speed": 2,    
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false
    },
    "move": {
      "enable": false,
      "speed": 2,
      "direction": "top-right",
      "random": false,
      "straight": true,
      "out_mode": "out",
      "bounce": false
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "repulse"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    }
  },
  "retina_detect": true
});



particlesJS('particles-js2', {
  "particles": {
    "number": {
      "value": 3,
      "density": {
        "enable": true,
        "value_area": 900
      }
    },
    "color": {
      "value": "#ffffff"
    },
          "shape": {
            "type": "image",
            "image": {
              "src": "images/planet.png",
              "width": 50,
              "height": 50
            }
    },
    "opacity": {
      "value": 0.5,
      "random": false
    },
    "size": {
      "value": 20,
      "random": true
    },
    "line_linked": {
      "enable": false
    },
    "move": {
      "enable": true,
      "speed": 0.8,
      "direction": "right",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": false
      },
      "resize": true
    }
  },
  "retina_detect": true
});

  