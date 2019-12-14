const addModalFunctionality = () => {
    
    const getCartDetails = () => {
        let miniCart = document.querySelector(".mini-cart-container")

        const cartObject = {
            cartQuantity: miniCart.dataset.quantity,
            cartImages: [],
            cartTotal: miniCart.querySelector('.order-total .order-value').innerText
        }
        miniCartImages = miniCart.querySelectorAll('.mini-cart-image a img');

        miniCartImages.forEach((imgTag) => {
            cartObject.cartImages.push(imgTag.src)
        });

        return cartObject;
    }

    const cartObject = getCartDetails();
    

    const addModal = () => {
        // element to add modal
        let wrapperDiv = document.querySelector('#wrapper');

        let modalBox = document.createElement('div');
        modalBox.classList.add("modal-main");
        modalBox.style.height = '100vh';
        modalBox.style.width = '100vw';
        modalBox.style.backgroundColor = 'rgba(0,0,0,.5)';
        modalBox.style.position = "fixed";
        modalBox.style.top = "0";
        modalBox.style.zIndex = "100";
        modalBox.style.display = "none";
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
            <a style="margin:10px; background: #cc0001;border: 1px solid #cc0001; color: #fff;" class="mini-cart-link-checkout primary-button view-cart-button" href="https://www.marmot.com/cart">
            View Cart</a>
            <a style="margin:10px; background: #cc0001; border: 1px solid #cc0001; color: #fff; pointer-events:none;" class="mini-cart-link-checkout primary-button" href="">
            Browse Site</a>
        </div>
    </div>
    `;
    }

    const addModalEventHandlers = () => {
        const modal = document.querySelector(".modal-main")
        function getPercentScrolled() {
            return ((window.pageYOffset + window.innerHeight) / (document.body.scrollHeight)) * 100
        }

        function displayModal() {
            if (getPercentScrolled() >= 90) {
                console.log('last 10!');
                triggerModal();
            }
        }
        const clearModal = (event) => {
            if(!event.target.classList.contains('view-cart-button')){
                modal.style.display = "none";
            }
        }

        const triggerModal = () => {
            modal.style.display = "flex";
        }

        document.addEventListener('scroll', displayModal);
        modal.addEventListener('click', clearModal);
    }
    

    addModal();
    addModalEventHandlers();
}
addModalFunctionality();


