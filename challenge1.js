let date = 2050;
let position = "parent";
let count = 0;

console.log(count);

if (date === 2050) {
	console.log("January", "New Year’s Day");
	console.log("March", "Human Rights Day");
	console.log("April", "Family Day", "Freedom Day");
	count += 4;

	if (position === "student") {
		console.log("June", "Youth Day");
		count += 1;
  }

	console.log("August", "Women's Day");
	console.log("September", "Heritage Day");
	console.log("December", "Day of Reconciliation");
	count += 3;

	if (position === "parent") {
	  	console.log("December", "Christmas Day");
		count +=+ 1;
  }

	console.log("December", "Day of Goodwill");
	count +=+ 1;
}

console.log('Your status is:', position)
console.log('The year is:', date)
console.log('The total holidays is:', count)