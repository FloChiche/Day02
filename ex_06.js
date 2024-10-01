const fruitArray = ["Blackberries", "Mango", "Kiwi", "Peaches", "Apple", "Banana"];

function getIndexFromName (name) {
	return fruitArray.indexOf(name) === -1 ? 'null : You do not have this fruit' : fruitArray.indexOf(name);
}
function displayResult(result) {
	document.write(result);
}
// DO NOT TOUCH, this will display the output of your function if you've done it well
displayResult(getIndexFromName("Mango")); // Remplacez "banana" par n'importe quel fruit pour tester

