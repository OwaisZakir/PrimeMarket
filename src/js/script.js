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
// First Api Calling

async function fetchData(url) {
  const response = await fetch(
    "https://fakestoreapi.com/products/category/electronics"
    // "https://dummyjson.com/carts"
  );
  const data = await response.json();
  return data;
}
let trendingProducts = document.querySelector("#trending-products-holder");

fetchData()
  .then((data) => {
    console.log(data);
    data.map((items, index) => {
      trendingProducts.innerHTML += `
          <div class="swiper-slide">
              <div class="custom-trending-product-card">
                <img
                  src="${items.image}"
                  alt="${items.title}"
                  class="img-fluid"
                />
                <h3>${items.title}</h3>
                <p>$${(items.price + Math.random() * 100).toFixed(2)}</p>
                <button onClick="window.location.href='/src/pages/loginPage.html'" class="btn btn-primary">Add to Cart</button>
              </div>
          </div>`;
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });

// Second Api Calling
async function fetchSecondData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

// let blogContainer = document.querySelector("#blogs-container");

// let postAPI = fetchSecondData("https://dummyjson.com/posts").then((data) => {
//   let { posts } = data;
//   console.log(posts[1]);
//   posts.map((post, idx) => {
//     blogContainer.innerHTML += `
//           <div class="swiper-slide">
//             <div class="testimonial-card">
//               <img
//                 src="https://via.placeholder.com/100"
//                 alt="Customer 1"
//                 class="testimonial-img"
//               />
//               <p class="testimonial-text">
//                 "Amazing product! It exceeded my expectations, and the
//                   customer service was fantastic."
//               </p>
//               <h4>John Doe By JS</h4>
//             <p class="testimonial-role">Regular Customer</p>
//             </div>
//           </div>
//     `;
//   });
// });

// Third Api Calling
