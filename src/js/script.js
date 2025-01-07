// Countdown Timer Logic
const countdown = document.getElementById("countdown-timer");

function updateCountdown() {
  const endDate = new Date("January 15, 2025 23:59:59").getTime();
  const now = new Date().getTime();
  const remainingTime = endDate - now;

  if (remainingTime <= 0) {
    countdown.innerHTML = "The offer has ended.";
  } else {
    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (remainingTime % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    countdown.innerHTML = `${days}d ${hours}h ${minutes}m <span>${seconds}s</span>`;
  }
}

setInterval(updateCountdown, 1000);

// ===================== Functionality =================
fetch('https://fakestoreapi.com/products/category/electronics')
            .then(res=>res.json())
            .then(json=>console.log(json))