import logo from './logo.svg';
import './App.css';
import products from './components/adatok';
import Termekek from './components/Termekek';

function App() {
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
                      <i className="fa-solid fa-cart-shopping fixed-top-right" id="cart-icon"></i>
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

      <aside>


      </aside>
    </div>
  );
}

export default App;
