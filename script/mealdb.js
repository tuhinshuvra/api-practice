// const getMeal = () => {
//     fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=rice')
//         // fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
//         .then(response => response.json())
//         .then(data => displayMeals(data.meals))
// }

// const displayMeals = meals => {
//     // console.log(meals)

//     for (let meal of meals) {
//         // console.log(meal);

//         const mealContainer = document.getElementById('meal-container');
//         // mealContainer.innerHTML = '';
//         const mealDiv = document.createElement('div');
//         mealDiv.classList.add('col');
//         mealDiv.innerHTML = `
//             <div class="card">
//                   <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
//                   <div class="card-body">
//                     <h5 class="card-title">${meal.strMeal}</h5>
//                     <p class="card-text">Meal-${meal.idMeal}, Category-${meal.strCategory}, Area-${meal.strArea}, Made of-${meal.strTags} </p>
//                     <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
//                   </div>
//             </div>    
//             `;
//         mealContainer.appendChild(mealDiv);
//     }
// }

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
            console.log(meal);

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
                    <button class="btn btn-info btn-sm" onclick="showDetail()">Detail</button>
                    </div>        
                    `;
            chooseMealContainer.appendChild(chooseDiv);
        }
    }
}

const showDetail = () => {
    console.log('I am clicked');
}

// getMeal();