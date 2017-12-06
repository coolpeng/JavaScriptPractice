// JavaScript 函数
// 函数是由事件驱动的或者当它被调用时执行的可重复使用的代码块

// 1.0 JavaScript 函数语法

// 函数就是包裹在花括号中的代码块，前面使用了关键词 function; 
// JavaScript 对大小写敏感。关键词 function 必须是小写的，并且必须以与函数名称相同的大小写来调用函数
/*
function functionname()
{
执行代码
}
 * */

// 1.1 调用带参数的函数

// 在调用函数时，您可以向其传递值，这些值被称为参数; 可以发送任意多的参数，由逗号 (,) 分隔
// myFunction(argument1,argument2)

// 声明函数时，请把参数作为变量来声明
/*
function myFunction(var1,var2)
{
代码
}

 * */
function nameAndJobFun(name, job) {
	alert("Welcome " + name + ", the " + job);
}
