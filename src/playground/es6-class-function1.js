class Person{
	constructor(name = "Default", age = 0){
		this.name = name;
		this.age = age;
	}
	getPersonName(){
		return `Hi! My name is ${this.name}`;
	}
	getPersonDetails(){
		return `${this.name} is ${this.age} year(s) old`;
	}
}

class Student extends Person{
	constructor(name,age,major){
		super(name,age);
		this.major = major;
	}
	checkMajor(){
		return !!this.major;
	}
	getPersonDetails(){
		let finalstring = super.getPersonDetails();
		if(this.checkMajor()){
			finalstring += `. Their Major is ${this.major}`;
		}
		return finalstring;
	}
}

class Traveller extends Person{
	constructor(name,age,location){
		super(name,age);
		this.location = location;
	}
	getPersonName(){
		let finalstring = super.getPersonName();
		if(this.location){
			finalstring += `. i am from ${this.location}`;
		}
		return finalstring;
	}
}

const me = new Traveller('Ilyas balluwala', 'Switzerland');
console.log(me.getPersonName());

const another = new Traveller();
console.log(another.getPersonName());