const blogButton = document.getElementById('blog-button');

blogButton.addEventListener('click', function (){

  window.location.href = './home.html';
});


const donateNowButton = document.getElementById('donnate-now-button');

donateNowButton.addEventListener('click', function () {


  const mainSection = document.getElementById('main-section');

  mainSection.classList.remove('hidden');
  donateNowButton.classList.add('bg-btnColor')

  const historyButton = document.getElementById('history-button');
  historyButton.classList.remove('bg-btnColor')

  const historySection = document.getElementById('history-section');
  historySection.classList.add('hidden');

  
})


const historyButton = document.getElementById('history-button');

historyButton.addEventListener('click', function () {
  const mainSection = document.getElementById('main-section');
  historyButton.classList.add('bg-btnColor')
  const donateNowButton = document.getElementById('donnate-now-button');
donateNowButton.classList.remove('bg-btnColor')
  mainSection.classList.add('hidden');


  const historySection = document.getElementById('history-section');
  historySection.classList.remove('hidden');


})





const donateButton = document.getElementById('donate-button');
donateButton.addEventListener('click', function (event) {
  event.preventDefault();


  let donationAmount = document.getElementById('donation-amount').innerText;
  let inputTaka = document.getElementById('input-taka').value;
  let totalAmount = document.getElementById('total-amount').innerText; 


  let inputTakas = parseFloat(inputTaka);
  let donationAmounts = parseFloat(donationAmount);
  let totalAmounts = parseFloat(totalAmount);

  let noakhaliNow = document.getElementById ('Noakhali');


  if (!isNaN(inputTakas) && inputTakas > 0 && inputTakas < totalAmounts) {
  let totalAmountBox = totalAmounts - inputTakas;

  document.getElementById('total-amount').innerText = totalAmountBox.toFixed(2);
  
  let donationAmountBox = inputTakas + donationAmounts;

    document.getElementById('donation-amount').innerText = donationAmountBox.toFixed(2);

    noakhaliNow.innerHTML = ` 
        <p class="text-xs text-gray-500">${inputTakas}  Taka is Donated for Donate for Flood at Noakhali, Bangladesh.
      </p>
        <p class="text-xs text-gray-500">Data: ${new Date().toLocaleDateString()}</p>
        
    
    `;
    
    document.getElementById('input-taka').value = '';

    alert('Successfully');
  
  } else {
       alert(' invalid Number! ')
  }

  
})


const donateButton2 = document.getElementById('donate-button2');

donateButton2.addEventListener('click', function (e) {
  e.preventDefault();

  let donationAmount2 = document.getElementById('donation-amount2').innerText;
  let inputTaka2 = document.getElementById('input-taka2').value;
  let totalAmount2 = document.getElementById('total-amount').innerText;

  let inputTakas2 = parseFloat(inputTaka2);
  let donationAmounts2 = parseFloat(donationAmount2);
  let totalAmounts2 = parseFloat(totalAmount2);

  let noakhaliNow2 = document.getElementById ('Noakhali2');



  if (!isNaN(inputTakas2) && inputTakas2 > 0 && inputTakas2 < totalAmounts2) {
  


  let totalAmountBox2 = totalAmounts2 - inputTakas2;

  document.getElementById('total-amount').innerText = totalAmountBox2;
  
  let donationAmountBox2 = inputTakas2 + donationAmounts2;

    document.getElementById('donation-amount2').innerText = donationAmountBox2;

    noakhaliNow2.innerHTML = ` 
        <p class="text-xs text-gray-500">${inputTakas2}  Taka is Donated for Donate for Flood at Noakhali, Bangladesh.
      </p>
        <p class="text-xs text-gray-500">Data: ${new Date().toLocaleDateString()}</p>
        
    
    `;
    

    
     document.getElementById('input-taka2').value = '';


    alert('Successfully');
  
  } else {
       alert(' invalid Number! ')
  }


  


})


const donateButton3 = document.getElementById('donate-button3');

donateButton3.addEventListener('click', function (en) {
  en.preventDefault();

  let donationAmount3 = document.getElementById('donation-amount3').innerText;
  let inputTaka3 = document.getElementById('input-taka3').value;
  let totalAmount3 = document.getElementById('total-amount').innerText;

  let inputTakas3 = parseFloat(inputTaka3);
  let donationAmounts3 = parseFloat(donationAmount3);
  let totalAmounts3 = parseFloat(totalAmount3);

    let noakhaliNow3 = document.getElementById ('Noakhali3');



  if (!isNaN(inputTakas3) && inputTakas3 > 0 && inputTakas3 < totalAmounts3) {
  


  let totalAmountBox3 = totalAmounts3 - inputTakas3;

  document.getElementById('total-amount').innerText = totalAmountBox3;
  
  let donationAmountBox3 = inputTakas3 + donationAmounts3;

    document.getElementById('donation-amount3').innerText = donationAmountBox3;



    noakhaliNow3.innerHTML = ` 
        <p class="text-xs text-gray-500">${inputTakas3}  Taka is Donated for Donate for Flood at Noakhali, Bangladesh.
      </p>
        <p class="text-xs text-gray-500">Data: ${new Date().toLocaleDateString()}</p>
        
    
    `;
    
    
     document.getElementById('input-taka3').value = '';


    alert('Successfully');
  
  } else {
       alert(' invalid Number! ')
  }


  


})
