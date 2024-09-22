
const homeButton = document.getElementById('home-button');

homeButton.addEventListener('click', function (event) {
  event.preventDefault();
  window.location.href = './index.html';
  
});
