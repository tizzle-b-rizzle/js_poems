var listOfLukesPoems = ["a", "b", "c", "d"] //List full of Luke's poems

var randomNumber = Math.floor(Math.random() * (listOfLukesPoems.length)); //generates a random number between 0 and the length of the list of the poems

function test() {
    var poem = document.getElementById('poem');
    poem.innerHTML = listOfLukesPoems[randomNumber]
}