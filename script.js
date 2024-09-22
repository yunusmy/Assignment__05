const blogButton = document.getElementById('blog-button');


blogButton.addEventListener('click', function (event) {
  event.preventDefault();

  window.location.href = './home.html';
})