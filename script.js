// Function for Download E-Ticket
function downloadETicket() {
    alert("E-Ticket downloaded successfully!");
  }
  
  // Function for Cancel Booking
  function cancelBooking() {
    const reason = document.getElementById('reason').value;
    if (!reason) {
      alert("Please select a reason for cancellation.");
      return;
    }
  
    const refundStatus = document.getElementById('refund-status');
    refundStatus.textContent = "Refund initiated. 50% will be refunded within 5-7 business days.";
    refundStatus.style.color = "green";
  }
  
  // Function for Redeem Points
  function redeemPoints() {
    alert("Points redeemed successfully! You get 10% off on your next booking.");
  }
  document.getElementById('bookingForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
  
    const bookingStatus = document.getElementById('booking-status');
    bookingStatus.textContent = `Booking confirmed for ${name} on ${date}. Confirmation sent to ${email}.`;
    bookingStatus.style.color = "green";
  });
  function calculatePoints() {
    const amount = document.getElementById('amount').value;
    if (!amount || amount < 0) {
      alert("Please enter a valid amount.");
      return;
    }
  
    const points = Math.floor(amount) * 100; // 100 points per $100
    const pointsResult = document.getElementById('points-result');
    pointsResult.textContent = `You will earn ${points} points!`;
    pointsResult.style.color = "green";
  }
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;
const icon = darkModeToggle.querySelector('i');

darkModeToggle.addEventListener('click', function () {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
    darkModeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
  } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
    darkModeToggle.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
  }
});
