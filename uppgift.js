function fizzBuzz(number, i = 0, fizzNumber, buzzNumber){
	for(i;i<=number;i++){
        output = '';
		if(i%3 === 0){
			output+='Fizz';
		} 
		if(i%5 === 0){
			output+='Buzz';
		} 
		if(i%3 !== 0 && i%5 !== 0) {
			output+=i;
		}
		print(output);
	}
}


