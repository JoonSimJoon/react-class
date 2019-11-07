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
          <div className="menu">menu</div>
          <div className="user">J</div>
          <img></img>
        </div>
        
      </header>
      <nav >
        <div className="NON"></div>
      </nav>
      <div className="sec">
        <section className="icon"> 
          <div className="icon-out">
            <div className="icon-in">
             <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"></img>
         
            </div>
          </div>
        </section>
       <section className="sb">
           <input
              type="text"
              align="center"
              placeholder="Search"
              className="searchbar"
            />
       </section>
      </div>
      <footer>footer</footer>
    </div>
  );
}

export default App;
