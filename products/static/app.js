document.addEventListener('DOMContentLoaded', function () {
  const wrapper = document.querySelector(".sliderWrapper");
  const menuItems = document.querySelectorAll(".menuItem");

  // Assume this data might be dynamically injected or fetched from an API.
  const products = [
      {
          id: 1,
          title: "Air Force",
          price: 119,
          colors: [
              {
                  code: "black",
                  img: "/static/img/air.png",
              },
              {
                  code: "darkblue",
                  img: "/static/img/air2.png",
              },
          ],
      },
      {
          id: 2,
          title: "Air Jordan",
          price: 149,
          colors: [
              {
                  code: "lightgray",
                  img: "/static/img/jordan.png",
              },
              {
                  code: "green",
                  img: "/static/img/jordan2.png",
              },
          ],
      },
      {
          id: 3,
          title: "Blazer",
          price: 109,
          colors: [
              {
                  code: "lightgray",
                  img: "/static/img/blazer.png",
              },
              {
                  code: "green",
                  img: "/static/img/blazer2.png",
              },
          ],
      },
      {
          id: 4,
          title: "Crater",
          price: 129,
          colors: [
              {
                  code: "black",
                  img: "/static/img/crater.png",
              },
              {
                  code: "lightgray",
                  img: "/static/img/crater2.png",
              },
          ],
      },
      {
          id: 5,
          title: "Hippie",
          price: 99,
          colors: [
              {
                  code: "gray",
                  img: "/static/img/hippie.png",
              },
              {
                  code: "black",
                  img: "/static/img/hippie2.png",
              },
          ],
      },
  ];

  let choosenProduct = products[0];  // Default to the first product.

  const currentProductImg = document.querySelector(".productImg");
  const currentProductTitle = document.querySelector(".productTitle");
  const currentProductPrice = document.querySelector(".productPrice");
  const currentProductColors = document.querySelectorAll(".color");
  const currentProductSizes = document.querySelectorAll(".size");

  menuItems.forEach((item, index) => {
      item.addEventListener("click", () => {
          // Change the current slide
          wrapper.style.transform = `translateX(${-100 * index}vw)`;

          // Change the choosen product
          choosenProduct = products[index];

          // Change texts of currentProduct
          currentProductTitle.textContent = choosenProduct.title;
          currentProductPrice.textContent = `$${choosenProduct.price}`;
          currentProductImg.src = choosenProduct.colors[0].img;

          // Assign new colors
          currentProductColors.forEach((color, idx) => {
              color.style.backgroundColor = choosenProduct.colors[idx].code;
              if (choosenProduct.colors[idx].img) {
                  color.onclick = () => {
                      currentProductImg.src = choosenProduct.colors[idx].img;
                  };
              }
          });
      });
  });

  const productButton = document.querySelector(".productButton");
  const payment = document.querySelector(".payment");
  const close = document.querySelector(".close");

  productButton.addEventListener("click", () => {
      payment.style.display = "flex";
  });

  close.addEventListener("click", () => {
      payment.style.display = "none";
  });
});
