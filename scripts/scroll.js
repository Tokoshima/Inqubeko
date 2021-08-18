<!DOCTYPE html>

<html>
   <head>
      <title>change picture</title>
      <script type = "text/javascript">
          function displayNextImage() {
              x = (x === images.length - 1) ? 0 : x + 1;
              document.getElementById("img").src = images[x];
          }

          function displayPreviousImage() {
              x = (x <= 0) ? images.length - 1 : x - 1;
              document.getElementById("img").src = images[x];
          }

          function startTimer() {
              setInterval(displayNextImage, 3000);
          }

          var images = [], x = -1;
          images[0] = "images/home1.jpg";
          images[1] = "images/home2.jpg";
          images[2] = "images/home3.jpg";
      </script>
   </head>

   <body onload = "startTimer()">
       <img id="img" src="startpicture.jpg"/>
       <button type="button" onclick="displayPreviousImage()">Previous</button>
       <button type="button" onclick="displayNextImage()">Next</button>
   </body>
</html>



let images = ['photoFromInternet', 'photoFromInternet2', 'photoFromInternet3'];

let index = 0;
const imgElement = document.querySelector('#mainPhoto');

function change() {
   imgElement.src = images[index];
   index > 1 ? index = 0 : index++;
}

window.onload = function () {
    setInterval(change, 5000);
};