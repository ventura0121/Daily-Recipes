import './App.css';
import {useState} from "react";
import MealList from "./components/MealList";

function App() {

  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000)

  function getMealData(){
    //pulls API key from key variable in .env.local file
    const key = process.env.REACT_APP_MEAL_KEY
    //fetches data from url
    const url = `https://api.spoonacular.com/mealplanner/generate?apiKey=${key}&timeFrame=day&targetCalories=${calories}`
    fetch(url)
    .then(res => res.json())
    .then((data)=>{
      setMealData(data);
      console.log(data);
    })
    .catch(()=>{
      console.log("error");
    })
  }

  // updates the state of the component according to setCalories property using user input
  function handleChange(e){
    setCalories(e.target.value);
  }

  return (
    <div className="App">
      <section className="controls">
      {/* Forces user input to be a number. Placeholder of 2000 calories used */}
      <input
      type="number"
      placeholder="Calories (e.g. 2000)"
      onChange={handleChange}/>
      {/* event handler with a button */}
      <button onClick={getMealData}> Get Daily Meal Plan </button>
      </section>
      {mealData && <MealList mealData={mealData}/>}
    </div>
    
      )
}

export default App;
