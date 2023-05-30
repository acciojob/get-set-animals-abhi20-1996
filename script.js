//complete this code
class Animal {
	constructor (species){}
	makeSound(){
		console.log("a sound the animal makes");
	}
	getter species(){}
}


class Dog extends Animal {
	bark(){
		console.log("woof");
	}
}

class Cat extends Animal {
	purr(){
		console.log("pur")
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
