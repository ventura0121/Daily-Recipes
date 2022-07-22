import {useState, useEffect } from "react"

export default function FoodJoke(){
    const [text, setText] = useState("");
    // used to fetch image
    useEffect(()=>{
        const key = process.env.REACT_APP_MEAL_KEY
        const url = `https://api.spoonacular.com/food/jokes/random?apiKey=${key}`
        
        fetch (url)
        .then(res=> res.json())
        .then((data)=>{
            setText(data.text);
        })
        .catch(()=> {
            console.log("error");
        })
    },[])

    return (
    <article>
        {/* <button onClick={FoodJoke}>Click for a random food joke</button> */}
        <footer>Random joke for you to enjoy. {text}</footer>
    </article>
    )
}