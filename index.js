/**
 * Created by rpuorro on 5/29/17.
 */


// function random_dinner(restaurants)
// {
//
//     return restaurants [math.floor(math.random()*restaurants.length)];
//
// var myarray=["Mesa", "Cedar's", "Portland Pie", "Picnic Sandwiches", "Ice Cream", "Feng Shui", "Crane Takeout", "Taco Place"];
//
// console.log(random_dinner(restaurants));
//
//

    var hour = new Date().getHours();
    var greeting;
    if (hour < 12) {
        greeting = "your breakfast destination selector";
    } else if (hour < 19){
        greeting = "your lunch destination selector";
    } else if (hour < 24){
    greeting = "your dinner destination selector";
}
    document.getElementById("which-meal").innerHTML = greeting;


// if (new Date().getHours() < 15) {
//     document.getElementById("which-meal").innerHTML = "Let's get lunch at";
// }
// if (new Date().getHours() < 11) {
//     document.getElementById("which-meal").innerHTML = "Let's get breakfast at";
// }

function getDinner() {

    var foodArray = ["Mesa", "Cedar's", "Portland Pie", "Park 'n Sandwich", "Ice Cream Shoppe", "Feng Shui", "Crane Takeout", "Taco Place", "Deborah's", "Veggie Galaxy", "Qdoba"];

    restaurantSelected = foodArray[Math.floor(Math.random() * foodArray.length)];


    document.getElementById("eat").innerHTML = restaurantSelected;
}