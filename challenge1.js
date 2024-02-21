let date = 2050;
let position = "parent";
let count = 0;
let month;

console.log(count);

if (date === 2050) {
	console.log("January", "New Year’s Day");
	console.log("March", "Human Rights Day");
	month = "April";
	console.log(month, "Family Day", "Freedom Day");
	count += 4;

	if (position === "student") {
		console.log("June", "Youth Day");
		count += 1;
  }

	console.log("August", "Women's Day");
	console.log("September", "Heritage Day");
	month = "December";
	console.log(month, "Day of Reconciliation");
	count += 3;

	if (position === "parent") {
	  	console.log(date, "Christmas Day");
		count += 1;
  }

	console.log("December", "Day of Goodwill");
	count += 1;
}

console.log('Your status is:', position);
console.log('The year is:', date);
console.log('The total holidays is:', count);