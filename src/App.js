import React from 'react';
import './App.css';

function App(){
  return(
    <div className="root">
      <header>
        <div className="left">
          <div className="about">About  </div>
          <div className="store">Store</div>

        </div>
        <div className="right">
          <div className="gmail">gmail</div>
          <div className="image">image</div>
        
        </div>
      </header>
      <nav >
      <div className="icon">
        <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"></img>
        </div>
      </nav>
      <div>
       <section>
         <div>
         <div>
          </div>
         </div>
         <div>
           <input
              type="text"
              align="center"
              placeholder="search"
            />
         </div>
       
       </section>
      </div>
      <footer>footer</footer>
    </div>
  );
}

export default App;
