const star = function(str) {
	let st = '';
	for(i=0; i<str; i+=1) {
	 st=st+'*';
	}
	return st;
};
const space = function(spc) {
	let sp = '';
	for(i=0; i<spc; i+=1) {
	 sp=sp+' ';
	}
	return sp;
};

const connect = function(p, t) {
	console.log(space(p)+star(t));
};

const diamond = function(d){
   if(d%2 === 0) {
   d = d + 1;
   }
	for(let i=0; i<(d+1)/2; i+=1){
		connect((d-1)/2-i, 1+2*i);
	}
	for(let i=0; i<(d-1)/2; i+=1){
		connect(i+1, d-2-2*i);
	}
}
diamond(22);
