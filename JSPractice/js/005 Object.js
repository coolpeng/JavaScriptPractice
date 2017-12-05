// JavaScript 对象
// JavaScript 对象是拥有属性和方法的数据
// JavaScript 对象是变量的容器


// 1.0 对象定义
//var person = {firstname:"Edward", lastname:"Peng", age:25};
// 定义 JavaScript 对象可以跨越多行，空格跟换行不是必须的
/*
var person = {
	firstname:"Edward", 
	lastname:"Peng", 
	age:25
};
*/

// 1.1 对象属性

// 可以说，JavaScript 对象是变量的容器。
// 我们通常认为 "JavaScript 对象是键值对的容器"。
// 键值对通常写法为 name : value (键与值以冒号分割)。
// 键值对在 JavaScript 对象通常称为 对象属性.

// 访问对象属性

/*
person.lastname;
person["lastname"];
*/

// 1.2 对象方法
//对象的方法定义了一个函数，并作为对象的属性存储。
//对象方法通过添加 () 调用 (作为一个函数)

var person = {
	firstname: "Edward",
	lastname: "Peng",
	id: 123456,
	fullname: function() {
		return this.firstname + " " + this.lastname;
	}
};

document.write(person.fullname());