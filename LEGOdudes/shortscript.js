document.getElementById("cartButton").addEventListener("click", function(){
    document.getElementById("shoppingCart").classList.toggle("hidden")
})

//Test funkjson for produktopplisting:
function fetchProducts(){
    let productHTML= ""

    products.map(p => productHTML += `
            <article class="productCard">
            <img src="website_images/PROD_${p.imagefile}" alt="${p.title}">
            <a href="#">${p.category}</a>
            <h3>${p.title}</h3>
            <p>Kr. ${p.price},-</p>
            <button onClick="addToCart(${p.prodid})">Legg til i handlevogn</button>
            </article>`)

    document.getElementById("productList").innerHTML = productHTML
}

fetchProducts()

//Generer handlevogn
function showCart(){
    //Unike produkter
    let uniqueItems = new Set(cart)
    //"..." betyr å spre ut verider med komma separerte verdier
    let uniqueArray = [...uniqueItems]
    //oversikt over antall per produkt
    let cartItems = []
    uniqueArray.map(item => {

        cartItems.push({prodid: item, quantity: cart.filter(i => i === item).length})

    })
    //Gå gjennom cartItems for å lage HTML til handlekurven og renge ut totalpris
    let cartHTML = ""
    let totalPrice = 0 
    
    cartItems.map(ci => {
        //Hente produktinformasjon
        let product =  products.find(i => i.prodid === ci.prodid)
       //SKrive ut HTML
       cartHTML += `
            <tr>
                <td class="title">
                    ${product.title}
                </td>
                <td class="price">
                    ${product.price},-
                </td>
                <td class="quantity">
                    x${ci.quantity}
                </td>
                <td class="delete">
                    <button>
                        X
                    </button>
                </td>
            </tr>`
    })
    document.getElementById("cartItems").innerHTML = cartHTML

    
}



//Legg til handlevogn
function addToCart(prodid){
    console.log("Legg til prdukt med ID: " + prodid)
    cart.push(prodid)
    console.log(cart)
    document.getElementById("itemCounter").innerHTML = cart.length

    //Oppdater handlevogn visning
    showCart()
}