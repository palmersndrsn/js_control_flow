var str = 'test'
var output = "";
for( var count = str.length - 1; count >= 0; count -= 1) {
	output =  output  + str[count];
};
console.log(output)