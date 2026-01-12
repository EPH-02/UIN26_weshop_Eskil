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

//Legg til handlevogn
function addToCart(prodid){
    console.log("Legg til prdukt med ID: " + prodid)
    cart.push(prodid)
    console.log(cart)
    document.getElementById("itemCounter").innerHTML = cart.length
}