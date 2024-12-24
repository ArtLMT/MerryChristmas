document.addEventListener("DOMContentLoaded", () => {
    const lines = document.querySelectorAll("#animated-text span");
    let currentLine = 0;
  
    const showLine = () => {
        // Hide the previous line
        if (currentLine > 0) {
            lines[currentLine - 1].classList.remove("active");
        }
  
        // Show the current line
        if (currentLine < lines.length) {
            lines[currentLine].classList.add("active");
            currentLine++;
        } else {
            clearInterval(interval); // Stop the interval when all lines are shown
        }
    };
  
    showLine(); // Show the first line immediately
    const interval = setInterval(showLine, 4000); // Switch lines every 4 seconds
  });

  
  particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 400,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#fff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        }
      },
      "opacity": {
        "value": 1,
        "random": false,
        "anim": {
          "enable": false,
          "opacity_min": 0.1
        }
      },
      "size": {
        "value": 10,
        "random": true,
        "anim": {
          "enable": false
        }
      },
      "line_linked": {
        "enable": false
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "bottom",
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
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "repulse"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 0.5
          }
        },
        "bubble": {
          "distance": 100,
          "size": 4,
          "duration": 0.3,
          "opacity": 1,
          "speed": 3
        },
        "repulse": {
          "distance": 100,
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
  