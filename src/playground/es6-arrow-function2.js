
const sum = (a,b) => {
	//console.log(arguments);
	return a + b;
}

console.log(sum(5,15,1000));


const user = {
	name : 'Mike',
	cities : ['India', 'Pakistan', 'Nepal'],
	printPlacelived(){
		return this.cities.map((city) => this.name + ' lived in ' + city); 
	}
}

console.log(user.printPlacelived());

const multiplier = {
	numbers : [1,2,3],
	multiplyby : 2,
	multiply(){
		return this.numbers.map((no) => this.multiplyby * no);
	}
}

console.log(multiplier.multiply());