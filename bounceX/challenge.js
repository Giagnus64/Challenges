let miniCart = document.querySelector(".mini-cart-container")

const cartObject ={
    cartQuantity: miniCart.dataset.quantity,
    cartImages: [],
    cartTotal: miniCart.querySelector('.order-total .order-value').innerText
}
miniCartImages = miniCart.querySelectorAll('.mini-cart-image a img');

miniCartImages.forEach((imgTag) => {
    cartObject.cartImages.push(imgTag.src)
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

// element to add modal
let wrapperDiv = document.querySelector('#wrapper');

//wrapperDiv.appendChild(modal)


let modalBox = document.createElement('div');
modalBox.classList.add("modal-backdrop");
modalBox.style.height = '100vh';
modalBox.style.width = '100vw';
modalBox.style.backgroundColor = 'rgba(0,0,0,.5)';
modalBox.style.position = "fixed";
modalBox.style.top = "0";
modalBox.style.zIndex = "100";
modalBox.style.display = "flex";
modalBox.style.flexDirection = "column";
modalBox.style.justifyContent = "center";
modalBox.style.alignItems = "center";
wrapperDiv.appendChild(modalBox);

modalBox.innerHTML = `

<div style="background:white; display:flex; flex-direction:column; align-items:center; width:70%; font-weight:300; margin:0 auto; padding:20px; max-width:700px;">
    <div style="width:70%; text-align:center;">
        <h2 class="mini-cart-header" style="font-size:2.2rem; margin-bottom:0;">
            Your Cart - <span>${cartObject.cartQuantity} items</span>
        </h2>
    </div>
    <div class="mini-cart-header" style="display:flex; flex-direction:row; justify-content: space-around; width:70%; margin-bottom:5px; padding:20px 0px;">
        <img src="${cartObject.cartImages[0]}">
        <img src="${cartObject.cartImages[1]}">
    </div>
    <h3 class="mini-cart-header" style="text-align:center; border:none; font-size:2rem;margin-bottom:5px;">Estimated Total: ${cartObject.cartTotal}</h3>
    <div class="modal-buttons" style="display:flex; flex-direction:row; justify-content:space-around; align-items:center; width:65%;">
        <a style="margin:10px; background: #cc0001;border: 1px solid #cc0001; color: #fff;" class="mini-cart-link-checkout primary-button" href="#">
        View Cart</a>
        <a style="margin:10px; background: #cc0001; border: 1px solid #cc0001; color: #fff;" class="mini-cart-link-checkout primary-button" href="#">
        Browse Site</a>
    </div>
</div>
`;


//modalBox.appendChild(modal);

//     < div class="mini-cart-content" >
//         <div class="mini-cart-header">
//             <h3>
//                 <span class="hide-for-large">Your Cart</span>
//                 <span class="hide-for-small hide-for-medium show-for-large-up">Item Added to Cart</span>
//                 <span class="hide-for-large total-items">1 items</span>
//             </h3>
//             <a class="mini-cart-link-cart primary-link" href="https://www.marmot.com/cart" title="Go to Cart">Edit Cart</a>
//         </div>
//         <div class="mini-cart-products">
//             <div class="mini-cart-product">
//                 <span class="mini-cart-toggle fa"></span>
//                 <div class="mini-cart-image">
//                     <a href="https://www.marmot.com/mens-guides-down-hoody-785562410282.html">
//                         <img src="https://s7d2.scene7.com/is/image/marmot/73060_001_f?$thumb$" alt="Men's Guides Down Hoody, Black, small">
// </a>
// </div>
//                     <div class="mini-cart-name">
//                         <a href="https://www.marmot.com/mens-guides-down-hoody-785562410282.html" title="Go to Product: Men's Guides Down Hoody">Men's Guides Down Hoody</a>
//                     </div>
//                     <div class="mini-cart-attributes">
//                         <div class="attribute" data-attribute="color">
//                             <span class="label">Color</span> -
// <span class="value">
//                                 Black
// </span>
//                         </div>
//                         <div class="attribute" data-attribute="size">
//                             <span class="label">Size</span> -
// <span class="value">
//                                 L
// </span>
//                         </div>
//                     </div>
//                     <div class="mini-cart-pricing">
//                         <div class="quantity">
//                             <span class="label">Qty:</span>
//                             <span class="value">1</span>
//                         </div>
//                         <div class="price">
//                             <span class="mini-cart-price">
//                                 <span class="price-hidden">Price:</span>
//                                 <span>$250.00</span>
//                             </span>
//                         </div>
//                     </div>
//                     <div class="prop65-message">
//                     </div>
//                 </div>
//             </div>
//             <div class="mini-cart-totals">
//                 <span class="hide-for-small hide-for-medium show-for-large-up total-items">1 items</span>
//                 <div class="mini-cart-subtotals">
//                     <table class="order-totals-table" role="presentation">
//                         <tbody>
//                             <tr class="order-subtotal" tabindex="0">
//                                 <th role="text">Subtotal</th>
//                                 <td>$250.00</td>
//                             </tr>
//                             <tr class="order-shipping" tabindex="0">
//                                 <th role="text">
//                                     Estimated Shipping
                                    
// </th>
//                                 <td>
//                                     <span class="visually-hidden not-applicable">Not Applicable</span>
//                                     <span aria-label="Not Applicable" aria-hidden="true">-</span>
//                                 </td>
//                             </tr>
//                             <tr class="order-sales-tax" tabindex="0">
//                                 <th role="text">Sales Tax</th>
//                                 <td>
//                                     <span class="visually-hidden not-applicable">Not Applicable</span>
//                                     <span aria-label="Not Applicable" aria-hidden="true">-</span>
//                                 </td>
//                             </tr>
//                             <tr class="order-total" tabindex="0">
//                                 <th role="text">Estimated Total</th>
//                                 <td class="order-value">$250.00</td>
//                             </tr>
//                         </tbody>
//                     </table>
//                 </div>
//                 <a class="mini-cart-link-checkout primary-button show-for-large" role="button" href="https://www.marmot.com/checkout">Checkout</a>
//                 <a class="mini-cart-link-checkout primary-button hide-for-large" role="button" href="https://www.marmot.com/expresscheckout">Checkout</a>
//                 <div class="payment-method-buttons">
//                 </div>
//             </div>
//         </div>


//design a modal that pops up
//handle multiple scroll events firing

//obscure the background

//get cart link and place in object or variable

