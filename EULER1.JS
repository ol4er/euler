//Euler Problem 1,
//Stole this from someone else in order to turn it into a DO WHILE loop.
function problem1() {
	var sum = 0;

for (var i=1; i<1000; i++) {
    if(i%3===0) {
        sum += i;
    }
    else if(i%5===0) {
        sum += i;
    }
}

console.log(sum);
}
//////Version 2, using DO WHILE:
function prob2() {
	var summ = 0;
var i = 1;

do {i++;
	if (i%3===0){
		summ += i;
	}
	else if (i%5===0)
		summ += i;
	
	 }
	while(i<999);
	//Since the do while loop automatically does ONE loop before continuing, knock off a loop to produce the correct answer. 
	console.log(summ);
}
problem1();
prob2();