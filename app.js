const api = "https://www.themealdb.com/api/json/v1/1/categories.php";

const dishlist = document.getElementById("dish");


//async,await
// async function getData(){
//     let response = await fetch(api)
//     let responseData = await response.json();
//     responseData && updateDOM(responseData);
// }
// getData()



//axios         
// axios
// .get(api)
// .then(({data}) =>   //here {} is used to destructuring
// updateDOM(data)).catch((error) => {
//     console.log("error is ", error.message);  
// })   //by default the method is get



//axios invoked with passing an object
axios({
    url: api,   /// there is set params to axios for hitting the target
}).then(({data}) =>   //here {} is used to destructuring
updateDOM(data)).catch((error) => {
    console.log("error is ", error.message);  
})



//DOM manipulation
function updateDOM(data){
    data.categories.forEach(dish => {
        const li = document.createElement("li")
        li.innerHTML = `
        <img src = '${dish.strCategoryThumb}' />
        <h3>${dish.strCategory}</h3>
        `
        dishlist.appendChild(li)
    });
}

// fetch(api)
// .then(function (response) {
//     return response.json();
// })
// .then(function (data){
//     console.log("the data is", data);
//     updateDOM(data)
// })


// fetch(api).then((response)=> response.json())
// .then((data) => updateDOM(data))
