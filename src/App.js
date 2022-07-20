import './App.css';
import {useState} from "react";
import MealList from "./MealList";

function App() {

  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2500)

  function handleChange(e){
    setCalories(e.target.value);
  }

  function getMealData(){
    fetch(
      'https://api.spoonacular.com/mealplanner/generate?apiKey=eadff80810d34b1c92ba9a92b18cb9a3&timeFrame=day&rargetCalories=${calories}'
    )
    .then((response)=> response.json())
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
      placeholder="Calories (e.g. 2500)"
      onChange={handleChange}/>
      <button onClick={getMealData}> Get Daily Meal Plan </button>
      {mealData && <MealList mealData={mealData}/>}
      </section>
    </div>
    
      )
}

export default App;
