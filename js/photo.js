function displayNextImage() {
              y = (y === images.length - 1) ? 0 : y + 1;
              document.getElementById("image").src = images[y];
          }

          function displayPreviousImage() {
              y = (y <= 0) ? images.length - 1 : y - 1;
              document.getElementById("image").src = images[y];
          }

          function startTimer() {
              setInterval(displayNextImage, 3000);
          }
          var images = [], y = -1;
          images[0] = "images/slide1.jpg" ;
          images[1] = "images/slide2.jpg" ;