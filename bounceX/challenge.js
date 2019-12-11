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

function getPercentScrolled(){
    return ((window.pageYOffset + window.innerHeight) / (document.body.scrollHeight)) * 100
}

function displayCart(){
    if(getPercentScrolled() >= 90){
        console.log("last 10!")
    }
}
document.body.addEventListener('scroll', displayCart)

//design a modal that pops up
//handle multiple scroll events firing
//obscure the background
//get cart link and place in object or variable
