import Meal from "./Meal"

export default function MealList({mealInfo}){
    const nutrients = mealInfo.nutrients;

    return(
        <main>
            <section className ="nutrients">
                {/* obtains nutritional breakdown to whole number */}
                <h1>Total Daily Macros</h1>
                    <ul>
                        <li>Calories: {nutrients.calories.toFixed(0)}</li>
                        <li>Protein: {nutrients.protein.toFixed(0)}</li>
                        <li>Fat: {nutrients.fat.toFixed(0)}</li>
                        <li>Carbohydrates: {nutrients.carbohydrates.toFixed(0)}</li>
                    </ul>   
            </section>
            <section className="meals">
                {/* for each meal we want to return the meal component */}
                {mealInfo.meals.map((meal)=> {
                    return <Meal key={meal.id} meal={meal}/>;
                })}
            </section>
        </main>
    )
}