import './App.css';
import { useState } from 'react';

function App() {
  //OPEN AND CLOSE BUTTON
  const [isOpen, setIsOpen] = useState(false)

  //Function to toggle the isOpen state
  const openreadmore = function(){
    setIsOpen(! isOpen)
  }

  //setState for 'form'
   const[inputs, setInputs] = useState({})

   // function to capture the input username
   const capturename = function(e){
    setName(e.target.value)
   }

   //function to submit the form
   const submitform = function(e){
    e.preventDefault()
    alert(`Welcome to React form ${inputs.username} \nYour age is ${inputs.age}`)
   }

   // function to collect all values in the form
   const handlechage = function(e){
    const name = e.target.name
    const value = e.target.value
    setInputs(values=> ({...values, [name]:value}))
   }
  return (
<div className='App'>
  <h1>Tania Akthar</h1>
  <hr/>
  <div className='info'>
    <p><b>Cat (Felis catus)</b>, commonly referred to as the doestic cat or house cat</p>
    <button className='readmorebtn' onClick={openreadmore}>{isOpen ? "Hide" : "Read More"}</button>
  </div>
  <section>
    {
      isOpen &&
    <div className='readmore'>
      <p>The domestic cat (Felis catus) is a small, carnivorous mammal and one of the world’s most popular pets. Known for their agility, sharp senses, and independence, cats are skilled hunters with excellent night vision and acute hearing. Domesticated around 9,000 years ago in the Near East, they were valued for pest control and became symbols in various cultures, revered in ancient Egypt. Cats are obligate carnivores, requiring a diet rich in animal protein. Though often independent, they form bonds with humans, communicating through vocalizations and body language. Their playful nature and low maintenance make them beloved companions worldwide.</p>
    </div>
    }
  </section>


  <form onSubmit={submitform}>
    <fieldset>
      <legend>User Information</legend>
        <label for="username">Enter a name: </label>
        <input 
        type='text' 
        id='username' 
        name='username'
        placeholder='Type your name...'
        value={inputs.username}
        onChange={handlechage}
        />
        <label for="age"> Enter an age: </label>
        <input 
        type='number'
        name='age'
        id='age'
        value={inputs.age}
        onChange={handlechage}
        />

      {/*submit button */}
      <div>
        <input type='submit'/>
      </div>

    </fieldset>
  </form>
</div>
  );
}

export default App;
