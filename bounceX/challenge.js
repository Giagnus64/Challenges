let miniCart = document.querySelector(".mini-cart-container")

const cartObject ={
    cartQuantity: miniCart.dataset.quantity,
    cartImages: [],
    cartTotal: miniCart.querySelector('.order-total .order-value').innerText
}
miniCartImages = miniCart.querySelectorAll('.mini-cart-image a');

miniCartImages.forEach((anchorTag) => {
    cartObject.cartImages.push(anchorTag.href)
});