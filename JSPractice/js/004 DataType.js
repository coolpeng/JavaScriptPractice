// JavaScript 数据类型

/*
字符串（String）、
数字(Number)、
布尔(Boolean)、
数组(Array)、
对象(Object)、
空（Null）、
未定义（Undefined）
*/

// 1.0 JavaScript 拥有动态类型
/*
var x;               // x 为 undefined
var x = 5;           // 现在 x 为数字
var x = "John";      // 现在 x 为字符串
 */

// 1.1 JavaScript 字符串

//字符串是存储字符（比如 "Bill Gates"）的变量。
//字符串可以是引号中的任意文本。可以使用单引号或双引号
//可以在字符串中使用引号，只要不匹配包围字符串的引号即可
/*
 var name = "Edward";
 var name = 'Edward';
 var myName = 'My name is "Edward"';
 var myName = "My name is 'Edward'";
 */

// 1.2 JavaScript 数字
//JavaScript 只有一种数字类型。数字可以带小数点，也可以不带
/*
 var a1 = 4;
 var a2 = 4.00;
 */
// 极大或极小的数字可以通过科学（指数）计数法来书写
/*
 var y=123e5;      // 12300000
 var z=123e-5;     // 0.00123
 */

// 1.3 JavaScript 布尔
// 布尔（逻辑）只能有两个值：true 或 false
/*
 * var flag = true;
 * var ret = false;
 */

// 1.4 JavaScript 数组

/*
var arrayOne = new Array(); //这种是创建空的数组
arrayOne[0] = "a";
arrayOne[1] = "b";
arrayOne[2] = "c";

var arrayTwo = new Array("a","b","c"); //这是一个预定义的数组，在创建时初始化
var arrayThree = ["a","b","c"]; //同样是在创建时初始化，但是这种创建更为便捷直观

var arrayFour = []; //这种是创建空的数组

 */

// 1.5 JavaScript 对象
// 对象由花括号分隔。在括号内部，对象的属性以名称和值对的形式 (name : value) 来定义。属性由逗号分隔

/*
var person = {firstname:"Edward", lastname:"Peng", age:25};
// 对象属性有两种寻址方式
name = person.firstname;
name = person["firstname"];
*/

// 最常用的对象创建方式
function Person() {
	var obj = new Object();
	obj.name = "Edward";
	obj.age = 25;
	obj.firstF = function() {
	}
	obj.secondF = function() {
	}
	return obj
}

var personOne = Person();
document.write("<br />"+personOne.name+"<br />"+personOne.age);

/*
function Person() {
	this.name = "Edward";
	this.age = 25;
	this.firstF = function() {
	}
	this.secondF = function() {
	}
}

var personTwo = new Person();
document.write(personTwo.age);
*/

// 1.6 Undefined 和 Null
//Undefined 这个值表示变量不含有值。
//可以通过将变量的值设置为 null 来清空变量

// 声明变量类型
// 当您声明新变量时，可以使用关键词 "new" 来声明其类型
// JavaScript 变量均为对象。当您声明一个变量时，就创建了一个新的对象
/*
var carname=new String;
var x=      new Number;
var y=      new Boolean;
var cars=   new Array;
var person= new Object;
 */