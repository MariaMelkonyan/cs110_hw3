const reverse = function(arr) {
	let A = [];
	for (let i=arr.length-1; i>-1; i-=1) {
		A[A.length]=arr[i];
	}
	return A;
};

const reversedArray = reverse([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(reversedArray);