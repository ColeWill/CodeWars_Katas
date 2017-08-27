//narcissistic numbers

// 153 = 1^3 + 5^3 + 3^3 = 1 + 125 +27 = 153

//node doesnt care about "54" or 54 ...

function narcissistic(value){
	console.log('hajimemashite!');
	var num = value;
	var numString = num.toString();
	var length = numString.length;
	console.log('length:', length);


	var finalArray = [];
	for (var i = 0; i < numString.length; i++) {
		
		finalArray.push(Math.pow(numString[i], length));

	}
	console.log(finalArray);

	var final = finalArray.reduce(function(prev,cur){
		return prev + cur; 
		
	});

	console.log('final:', final);

	if(final === value){
		console.log(true);
	} else{ console.log(false) }
}	

narcissistic(94204591914);
