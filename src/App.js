import { useState } from "react";
import { data } from "./data";
import './App.css';

function App() {

  const [dog, setDog] = useState(0);

  const {nameDog, image, description, care, price} = data[dog];
  
const nextDog =() => {
  setDog((dog => {
    dog++;
  if (dog > data.length-1) {
    dog=0;
  }
  return dog;
}))
}
const previosDog =()=> {
  setDog((dog => {
    dog--;
    if(dog < 0) {
      return data.length-1;
    }
    return dog;
  }))
}

  return (
   <div>
     <div className="container">
       <h1>Какую собаку выберишь ты?</h1>
     </div>
     <div className="container">
       <img src={image} width="450px" alt="fotoDog"/>
     </div>
     <div className="container">
       <h2>{nameDog}</h2>
     </div>
     <div className="container">
       <p>{description}</p>
     </div>
     <div className="container">
       <p>{care}</p>
     </div>
     <div className="container">
       <h3>Цена щенка от {price}</h3>
     </div>
     <div className="btn">
       <button className="previos" onClick={previosDog}>PREVIOS</button>
       <button className="next" onClick={nextDog}>NEXT</button>
     </div>
   </div>
  );
}

export default App;
