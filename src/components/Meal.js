import { useState, useEffect } from "react";

export default function Meal({meal}){
    const [image, setImage] = useState("");
    // used to fetch image
    useEffect(()=>{
        const key = process.env.REACT_APP_MEAL_KEY
        const url = `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=${key}&includeNutrition=false`
        fetch (url)
        .then(res=> res.json())
        .then((data)=>{
            setImage(data.image);
        })
        .catch(()=> {
            console.log("error");
        })
        //tells useEffect to trigger the function only when the meal.id changes
    }, [meal.id])
    
    return (
    <article>
        {/* display meal title */}
        <h1>{meal.title}</h1>
        {/* display images */}
        <img src= {image} alt="recipe"/>
        <ul className="instructions">
            <li>Number of servings: {meal.servings}</li>
            <li>Preparation time: {meal.readyInMinutes} minutes</li>
            <li>Vegan Status: {meal.vegan} </li>
        </ul>
        <a href={meal.sourceUrl}>Go to Recipe</a>
    </article>
    )
}