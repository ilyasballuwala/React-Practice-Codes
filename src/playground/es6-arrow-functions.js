function square(x){
	return x * x;
}
console.log(square(3));

// Regular Arrow function
const squarearrow = (x) => {
	return x * x;
}
console.log(squarearrow(4));

// Arrow function with shorthand method
const squarearrowoneline = (x) => x * x;
console.log(squarearrowoneline(6));



const getFirstName = (name) => {
	return name.split(' ')[0];
}
console.log(getFirstName('Mike Smith'));


const getfirstname = (name) => name.split(' ')[0];
console.log(getfirstname('Jen Sarah'));