import './App.css';
import {useState} from "react";
import MealList from "./components/MealList";

function App() {

  const [mealInfo, setMealInfo] = useState(null);
  const [calories, setCalories] = useState(2000)

  function getMealInfo(){
    //pulls API key from key variable in .env.local file
    const key = process.env.REACT_APP_MEAL_KEY
    //fetches data from url
    const url = `https://api.spoonacular.com/mealplanner/generate?apiKey=${key}&timeFrame=day&targetCalories=${calories}`
    fetch(url)
    .then(res => res.json())
    .then((data)=>{
      setMealInfo(data);
      console.log(data);
    })
    .catch(()=>{
      console.log("error");
    })
  }

  // updates the state of the component according to setCalories property using user input
  function handleCalories(e){
    setCalories(e.target.value);
  }

  return (
    <div className="App">
      <section className="controls">
      {/* Forces user input to be a number. Placeholder of 2000 calories used */}
      <input
      type="number"
      placeholder="Insert daily calories"
      onChange={handleCalories}/>
      {/* event handler using button */}
      <button onClick={getMealInfo}> Get Daily Meal Plan </button>
      </section>
      {/* passing over meal info to meal list component */}
      {mealInfo && <MealList mealInfo={mealInfo}/>}
    </div>
    
      )
}

export default App;
