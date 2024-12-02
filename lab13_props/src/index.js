import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import User from './comments'
//import all images
import avataruser1 from './images/women.png';
import avataruser2 from './images/man.png';
import avataruser3 from './images/women0.png';

const App = function(){
  return(
    <>
          <h1 style={{textAlign:"center}"}} className='name'>Tania Akthar</h1>
          <hr></hr>
    <section className='container'>
      <User image={avataruser1} name="Tanya" date="11/12/24" msg="I am a Women"/>
      <User image={avataruser2} name="Peter" date="10/31/24" msg="Need more rest!"/>
      <User image={avataruser3} name="Jessica" date="1-/16/24" msg="Great!"/>
    </section>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

