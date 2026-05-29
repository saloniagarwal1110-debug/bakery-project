function addToCart(name, image) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({ name: name, image: image });

    localStorage.setItem("cart", JSON.stringify(cart));

    window.location.href = "cart.html";
}
// var cart = [];

// // Add item
// function addToCart(item) {
//     cart.push(item);
//     updateCart();
// }

// // Update cart UI
// function updateCart() {
//     var cartItems = document.getElementById("cart-items");
//     var cartCount = document.getElementById("cart-count");

//     if (cartItems == null || cartCount == null) return;

//     cartItems.innerHTML = "";

//     for (var i = 0; i < cart.length; i++) {
//         var li = document.createElement("li");
//         li.innerText = cart[i];
//         cartItems.appendChild(li);
//     }

//     cartCount.innerText = cart.length;
// }

// // Open/close cart
// function toggleCart() {
//     var sidebar = document.getElementById("cart");
//         sidebar.classList.toggle("active");
//     }


// // Clear cart
// function clearCart() {
//     cart = [];
//     updateCart();
// }
