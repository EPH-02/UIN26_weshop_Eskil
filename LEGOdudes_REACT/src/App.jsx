import './style/lego.css'

function App() {

  function Header(){
    return(
      <header>
            <h1>
                <a href="index.html">
                    <img src="website_images/LD_logo.svg" alt="LEGO-DUDES"/>
                </a>
            </h1>
            <button id="cartButton">
                 <div id="itemCounter">0</div>
                 <img src="website_images/legocart.svg" alt="handlevogn"/>
            </button>
        </header>
    )
  }

function Nav(){
  return(
    <nav>
            <a href="#">City</a>
            <a href="#">Ninjago</a>
            <a href="#">Castles and Knights</a>
            <a href="#">Marines and Pirates</a>
            <a href="#">Movie Characters</a>
        </nav>
  )
}

function CategoryTitle(){
  return(
    <h2>Ninjago</h2>
  )
}

function Products(){
  return(
     <div id="productList"></div>
  )
}

  return (
    <div id="container">
      <Header></Header>
      <Nav></Nav>
      <main>
        <CategoryTitle></CategoryTitle>
        <Products></Products>
      </main>

    </div>
  )
}

export default App
