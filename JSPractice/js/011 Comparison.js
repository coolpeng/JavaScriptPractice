// JavaScript 比较 和 逻辑运算符
// 比较和逻辑运算符用于测试 true 或者 false

// 1.0 比较运算符
// 比较运算符在逻辑语句中使用，以测定变量或值是否相等

/*
x=5，下面的表格解释了比较运算符：
运算符	描述		比较		返回值	 
==		等于		x==8		false	 
				x==5		true	 
===		绝对等于（值和类型均相等）	x==="5"	false	 
				x===5	true	 
!=	 	不等于	x!=8		true	 
!==	 	不绝对等于（值和类型有一个不相等，或两个都不相等）	x!=="5"	true	 
				x!==5	false	 
>		 大于	x>8		false	 
<	 	小于		x<8		true	 
>=	 大于或等于	x>=8		false	 
<=	 小于或等于	x<=8		true
 
 */

// 1.1 逻辑运算符
// 逻辑运算符用于测定变量或值之间的逻辑

/*
给定 x=6 以及 y=3，下表解释了逻辑运算符

运算符	描述		例子
&&		and		(x < 10 && y > 1) 为 true
||		or		(x==5 || y==5) 为 false
!		not		!(x==y) 为 true
  
 */

// 1.2 条件运算符
// JavaScript 还包含了基于某些条件对变量进行赋值的条件运算符

// 语法: variablename=(condition)?value1:value2

function myFunction() {
	var age, voteable;
	age = document.getElementById("age").value;
	voteable = (age < 18)?"年龄太小未达到要求":"年龄已达到要求";
	document.getElementById("p011").innerHTML = voteable;
}



