import Header from "./Header";
import Nav from "./Nav";
import Cart from "./Cart";

export default function Layout({setIsOpen, cartQunatity, children, isOpen, cart, setCart, totalSum}){
    return (
        <div id="container">
        <Header setIsOpen={setIsOpen} cartQuantity={cartQunatity}></Header>
        <Nav></Nav>
        {children} 
            <Cart isOpen={isOpen} cart={cart} setCart={setCart} totalSum={totalSum} />

        </div>
        

    )
}