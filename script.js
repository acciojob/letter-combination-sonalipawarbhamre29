


function func(input_digit,map,arr,asf) {
	if(input_digit.length===0){
		arr.push(asf);
		return;
	}
	let digit = parseInt(input_digit.charAt(0));
	let str = map[digit];
	for(let i=0;i<str.length;i++){
		func(ques.substring(1),map,arr,asf+str.charAt(i));
	}
}

function letterCombinations(input_digit) {
  //Complete the function
	let map = ["0","1","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"];
	let arr = [];
	func(input_digit,map,arr,"");
	return arr;
}

// module.exports = letterCombinations;
