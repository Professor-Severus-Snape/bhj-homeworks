"use strict";

const products = document.querySelector(".products"); // товары
const cartProducts = document.querySelector(".cart__products"); // товары в корзине

// добавление товара в корзину:
function addCartProduct(item) {
  const img = item.querySelector(".product > img");
  const quantity = item.querySelector(".product .product__quantity-value");
  const cartProduct = document.createElement("div");
  cartProduct.className = "cart__product";
  cartProduct.dataset.id = item.dataset.id;
  cartProduct.insertAdjacentHTML("beforeend", `<img class="cart__product-image" src="${img.src}">`);
  cartProduct.insertAdjacentHTML("beforeend", `<div class="cart__product-count">${quantity.textContent}</div>`);
  cartProducts.append(cartProduct);
}

// изменение количества уже имеющегося в корзине товара:
function changeQuantity(item, index) {
  const cartProduct = cartProducts.children[index];
  const previousQuantity = +cartProduct.querySelector(".cart__product-count").textContent;
  const addQuantity = +item.querySelector(".product .product__quantity-value").textContent;
  cartProduct.querySelector(".cart__product-count").textContent = previousQuantity + addQuantity;
}

// делегирование события "клик":
products.addEventListener("click", event => {
  if (event.target.classList.contains("product__quantity-control_dec")) {
    const productQuantityValue = event.target.nextElementSibling;
    if (productQuantityValue.textContent > 1) {
      productQuantityValue.textContent--;
    }
  } else if (event.target.classList.contains("product__quantity-control_inc")) {
    const productQuantityValue = event.target.previousElementSibling;
    productQuantityValue.textContent++;
  } else if (event.target.classList.contains("product__add")) {
    const product = event.target.closest(".product"); // выбранный товар
    const index = [...cartProducts.children].findIndex(child => child.dataset.id === product.dataset.id);
    // если выбранный товар уже есть в корзине:
    if (~index) {
      changeQuantity(product, index);
    } else {
      addCartProduct(product);
    }
  }
});
