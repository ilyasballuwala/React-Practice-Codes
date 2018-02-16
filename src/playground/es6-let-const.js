var namevar = "Mike";
var namevar = "Harry";
console.log(namevar);

let namelet = 'Jen';
namelet = 'Jenny';
console.log(namelet);


const nameconst = 'const1';
console.log(nameconst);


// Block Scoping

var fullName = "Mike Hussy";
let firstName;

if(fullName){
	firstName = fullName.split(' ')[0];
	console.log(firstName)
}

console.log(firstName);