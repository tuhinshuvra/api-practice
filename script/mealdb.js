const chooseMeal = () => {

    const searchMeal = document.getElementById('search-meal');
    const searchText = searchMeal.value;
    // console.log('I am choose Meal Detail', searchText)

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
        .then(response => response.json())
        .then(data => displayChooseMeals(data.meals))
    searchMeal.value = ''

    const chooseMealContainer = document.getElementById('choose-meal-container');
    chooseMealContainer.innerHTML = '';

    const displayChooseMeals = (meals) => {
        // console.log(meals)
        for (let meal of meals) {
            // console.log(meal);

            const chooseDiv = document.createElement('div');
            chooseDiv.innerHTML = `
                    <div class="card card-area">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">Meal id-${meal.idMeal}, Category-${meal.strCategory}, Area-${meal.strArea},
                    Made of-${meal.strTags} </p>
                    <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
                    </div>
                    <button class="btn btn-info btn-sm" onclick="getMealDetail(${meal.idMeal})">Detail</button>
                    </div>        
                    `;
            chooseMealContainer.appendChild(chooseDiv);
        }
    }
}

const getMealDetail = (mealId) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
        .then(resposne => resposne.json())
        .then(meal => showMealDetail(meal.meals[0]))
}

const showMealDetail = (meal) => {
    // console.log(meal)

    const mealDetailsContainer = document.getElementById('meal-details-container');
    mealDetailsContainer.innerHTML = `
    <h1>Meal Details</h1>
    <div class="w-50">
                    <div class="card card-area">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">Meal id-${meal.idMeal}, Category-${meal.strCategory}, Area-${meal.strArea},

    </div>    
    `;

}