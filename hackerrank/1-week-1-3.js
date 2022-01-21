function timeConversion(s) {
	// Write your code here
	let timeFields = s.split(":");
	if(timeFields[0] !== "12" && timeFields[2].charAt(2) === "P") {
		timeFields[0] = (Number(timeFields[0]) + 12).toString();
	} else if(timeFields[0] === "12" && timeFields[2].charAt(2) === "A") {
		timeFields[0] = "00"
	}
	let secondsField = timeFields[2].split("");
	timeFields[2] = secondsField[0] + secondsField[1];
	return timeFields.join(":");
}