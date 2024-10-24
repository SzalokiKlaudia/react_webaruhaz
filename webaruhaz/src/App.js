import logo from './logo.svg';
import './App.css';
import products from './components/adatok';
import Termekek from './components/Termekek';
import Aside from './components/Aside';
import { useState } from 'react';


function App() {

  //kell a useState az oldalsáv megjelenítéséhez hogy kezelje az állapotát, és eszerint kapjon active osztályt kattra, majd kattra vegye le
  const [aktivE,setAktivE] =useState(false)//alapjáraton false amit settel állítgatunk


  const kattKosarAside = () =>{ //toggle fgv, kezeli  a kattintást, és setteli az értékeket a cart-iconon

    if(aktivE){
      setAktivE(false)
    }
    else{

      setAktivE(true)
    }


  }

  let asideClass = "aside"

  if(aktivE){
      asideClass += " " + "active" //itt adjuk hozzá az active osztályt
  }



  return (
    <div className="App">
      <header>
      
      </header>

      <nav className="navbar navbar-expand-lg custom">
        <div className="container-fluid">
                <div className="navbar" id="navbarNav">
                      <ul className="navbar-nav w-100 d-flex">
                          <li className="nav-item flex-grow-2 p-1"><a className="nav-link text-info fs-4" href="#">Termékek</a></li>
                          <li className="nav-item flex-grow-2 p-1"><a className="nav-link fs-4" href="#">Admin</a></li>
                          
                       
                      </ul>
                    
                  </div>
                  <div className ="d-flex flex-row-reverse">
                      <i className="fa-solid fa-cart-shopping fixed-top-right" id="cart-icon" onClick={()=>{kattKosarAside()}}>

                      </i>
                </div>
          </div>

      </nav>

      <article>
        <div className="kontener mb-5">
            <div className="galeria row">
              < Termekek lista={products}/>

            </div>

        </div>

      </article>

       <aside className={asideClass} id="kosar-tartalom d-flex"> 
        <Aside/>



     </aside> 
    </div>
  );
}

export default App;
