var margarita = {
	nafn: "margarita",
	toppings: "olive oil",
	size: "large",
	price: 2195
};
var pepperoni = {
	nafn: "pepperoni",
	toppings: "pepperoni, oregano",
	size: "large",
	price: 2295
};
var surprize = {
	nafn:"surprize",
	toppings: "minced beef, oregano, mushrooms, extra chesse",
	size:"large",
	price: 3195
};
var hawaian = {
	nafn:"hawaian",
	toppings:"ham and pineapple",
	size:"large",
	price: 2495
};
var italian = {
	nafn:"italian",
	toppings: "spiced salami, pesto, mozarella",
	size: "large",
	price: 3195
};
var meatpizza = {
	nafn:"meatpizza",
	toppings: "pepperoni, ham, minced beef",
	size: "large",
	price: 3095
};
var	bbq = {
	nafn:"bbq",
	toppings: "pulled pork, bbq sauce, mushrooms, pepperoni",
	size: "large",
	price: 3090
};
var mushroomaroni = {
	nafn:"mushroomaroni",
	toppings:"mushrooms, pepperoni",
	size: "large",
	price: 2895	
};



var pizzas = [margarita, pepperoni, surprize, hawaian,italian,meatpizza,bbq,mushroomaroni];


for (var i = 0; i < pizzas.length; i++) {
	console.log(pizzas[i]);
	var div = document.createElement("div");
	div.innerHTML = "á " +pizzas[i].nafn+ " er með " + pizzas[i].toppings +" hún kostar "+pizzas[i].price+"kr og hún er "+pizzas[i].size;
	div.setAttribute('class', 'pizza');
	document.body.appendChild(div);
};
