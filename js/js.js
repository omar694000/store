

 // اخفاء شاشة التحميل بعد ما الصفحة تحمل
    window.onload = function() {
      document.getElementById("preloader").style.display = "none";
    }



const menuBtn = document.querySelector(".menu-icon span");
         const searchBtn = document.querySelector(".search-icon");
         const cancelBtn = document.querySelector(".cancel-icon");
         const items = document.querySelector(".nav-items");
         const form = document.querySelector("form");
         menuBtn.onclick = ()=>{
           items.classList.add("active");
           menuBtn.classList.add("hide");
           searchBtn.classList.add("hide");
           cancelBtn.classList.add("show");
         }
         cancelBtn.onclick = ()=>{
           items.classList.remove("active");
           menuBtn.classList.remove("hide");
           searchBtn.classList.remove("hide");
           cancelBtn.classList.remove("show");
           form.classList.remove("active");
           cancelBtn.style.color = "#ff3d00";
         }
         searchBtn.onclick = ()=>{
           form.classList.add("active");
           searchBtn.classList.add("hide");
           cancelBtn.classList.add("show");
         }







          const toggleBtn = document.querySelector('.filter-toggle');
    const sidebar = document.getElementById('sidebar');

    toggleBtn.addEventListener('click', ()=>{
      sidebar.classList.toggle('active');
    });












new Swiper(".wrapper", {
  loop: true,
  spaceBetween: 30,
  // Autoplay
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  // Pagination bullets
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});



let count = 0;
//if add to cart btn clicked
$('.cart-btn').on('click', function (){
  let cart = $('.cart-nav');
  // find the img of that card which button is clicked by user
  let imgtodrag = $(this).parent('.buttons').parent('.content').parent('.card').find("img").eq(0);
  if (imgtodrag) {
    // duplicate the img
    var imgclone = imgtodrag.clone().offset({
      top: imgtodrag.offset().top,
      left: imgtodrag.offset().left
    }).css({
      'opacity': '0.8',
      'position': 'absolute',
      'height': '150px',
      'width': '150px',
      'z-index': '100'
    }).appendTo($('body')).animate({
      'top': cart.offset().top + 20,
      'left': cart.offset().left + 30,
      'width': 75,
      'height': 75
    }, 1000, 'easeInOutExpo');

    setTimeout(function(){
      count++;
      $(".cart-nav .item-count").text(count);
    }, 1500);

    imgclone.animate({
      'width': 0,
      'height': 0
    }, function(){
      $(this).detach()
    });
  }
});






   function toggleFilter() {
      document.getElementById("filterSidebar").classList.toggle("active");
    }


















   function changeImage(img) {
      document.getElementById("mainImage").src = img.src;
      document.querySelectorAll(".thumbs img").forEach(e => e.classList.remove("active"));
      img.classList.add("active");
    }
    function increase() {
      let qty = document.getElementById("quantity");
      qty.value = parseInt(qty.value) + 1;
    }
    function decrease() {
      let qty = document.getElementById("quantity");
      if (parseInt(qty.value) > 1) {
        qty.value = parseInt(qty.value) - 1;
      }
    }









    

     function changeImage(smallImg) {
      document.getElementById("mainImage").src = smallImg.src;
    }
    function increase(btn) {
  let num = btn.parentElement.querySelector(".num");
  num.textContent = parseInt(num.textContent) + 1;
}

function decrease(btn) {
  let num = btn.parentElement.querySelector(".num");
  let current = parseInt(num.textContent);
  if (current > 1) {
    num.textContent = current - 1;
  }
}

  // Example function to add a new review dynamically
    const reviews = document.getElementById("reviews");
    function addReview(name, email, rating, message, avatarUrl=""){
      const review = document.createElement("div");
      review.className = "review";
      const initial = name.charAt(0).toUpperCase();
      const avatar = avatarUrl ? `<img src="${avatarUrl}" class="review-avatar" />` : `<div class=\"review-avatar\">${initial}</div>`;
      review.innerHTML = `
        ${avatar}
        <div class="review-content">
          <div class="review-header">
            <div>
              <div class="review-user">${name}</div>
              <div class="review-email">${email}</div>
            </div>
            <div class="review-rating">${rating}</div>
          </div>
          <div class="review-message">${message}</div>
        </div>
      `;
      reviews.appendChild(review);
    }






    