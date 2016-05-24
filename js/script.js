
/*
многострочный коммент
*/ 

var b = ++a; //сначала увеличивает переменную, а потом присваивает
console.log(b); 
var b = a++; // a++ => a=a+1; a += 1  Сначала присваивает, а потом увеличивает
console.log(b); 
var obj = {
	'test':12,
	'test1':'hello',
	"test-one": 'Hi!',
	'test2': 'test"test',
	'test3': 'Sania',
	test4: this.test1 + ', ' + this.test3
};

console.log(obj);
console.log(obj.test);
console.log(obj['test']);
console.log(obj['test-one']);
console.dir(obj['test-one']);
console.log(obj.test4);

// if else
var i = "0"; // => truev
if (i) {
	console.log('HI1')
}

var j= 0; 
if (!j) {
	console.log('HI2')
}

var i = 'test3'; 
var j = 'test1'; 
if (i > j) {
	console.log('HI3')
}

var i = '10'; 
var j = 10; 
if (i == j) {
	console.log('HI4')
}

var i = {}; 
var j = {}; 
if (i === j) {
	console.log('HI5') // ссылки на разные места в памяти
}

var i = 'тест'; 
var j = true; 
console.log("j = ", j, "(", typeof j, ")");
console.log("i = ", i, "(", typeof i, ")");

var i = "test";
var j = "тест";
var q = typeof i;
var v = typeof j;
if (q = v) {
	console.log("write if typeof i = typeof j")
};

// <, >, >=, <=, !=, ==, ===
var i = "sasha",
	j = "Misha";
if (( i == "Misha" || i == "sasha") || j == "Sasha") {
	console.log("write if i = sasha")};
if (( i == "Misha" || i == "sasha") && j == "Misha") {
	console.log("write if i = sasha && j = misha")
};

var a = true,
	b = 1,
	c = null,
	d = "1",
	w = Number(d);
if (a == d && (c != b && b === w)) {
	console.log("WIn1!")
};


var a = true,
	b = 1,
	c = null,
	d = "number",
	q = typeof b,
	w = Boolean(d);
if (w == a && (c != b && q === d)) {
	console.log("WIn2!")
};

var a = 10,
	b = 15;
if (a == 10) {
	console.log('ok, it\'s ' + a);
} else if (b == 15) {
	console.log("Fine!");
} else {
	console.log("Not Fine")
};

switch(a) {
	case 10:
		console.log("test10");
	break;
	case 11: 
		console.log("test11");
	break;
	default:
		console.log("oooops");
	break;
};

var a = false,
	w = a ? a : b; // если а существует, то w присваивается a, иначе w присваивается b.
console.log(w);

for (var i = 0; i < 10; i++) {
	console.log(i);
}


var b = [];
console.log("четные");
for (var i = 0; i < 100; i++) {
	b[i] = Math.ceil(Math.random() * 100);
	if (b[i] % 2 == 0) {console.log(b[i]);}
};
console.log("нечетные");
for (var i = 0; i < 100; i++) {
	if (b[i] % 2) {console.log(b[i]);}
};

var b = [];
for (var i = 0; i < 100; i++) {
	b[i] = Math.ceil(Math.random() * 100);
	if (b[i] % 2 == 0) {
		console.log(b[i],' - четное');
	}
	else {
		console.log(b[i]," - нечетное");
	};
};

var chet = [],
	nechet = [],
	i = 0;
for (i; i < 100; i++) {
	if (i % 2 == 0) {
		chet.push(i);
	}
	else {
		nechet.push(i);
	};
};
console.log(chet);
console.log(nechet);


// var b = [];
// for (var i = 0; i < 100; i++) {
// 	if (b[i] % 2 != 0) {console.log(b[i]);}
// };

// for (var i = 0; i < 100; i++) {
// 	if (i % 2 == 0) { // % - остаток от деления нацело
// 		console.log(i);
// 	}
// }


