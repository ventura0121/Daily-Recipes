import './App.css';
import {useState} from "react";
import MealList from "./components/MealList";

function App() {

  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000)

  function handleChange(e){
    setCalories(e.target.value);
  }

  function getMealData(){
    const key = process.env.REACT_APP_MEAL_KEY
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

  return (
    <div className="App">
      <section className="controls">
      <input
      type="number"
      placeholder="Calories (e.g. 2000)"
      onChange={handleChange}/>
      <button onClick={getMealData}> Get Daily Meal Plan </button>
      </section>
      {mealData && <MealList mealData={mealData}/>}
    </div>
    
      )
}

export default App;
