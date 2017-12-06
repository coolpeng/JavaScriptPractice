// JavaScript 运算符

// 1.0 JavaScript 算术运算符

/*
y=5，下面的表格解释了这些算术运算符

运算符	描述		例子		x 运算结果	y 运算结果
+		加法		x=y+2		7			5	
-		减法		x=y-2		3			5	 
*		乘法		x=y*2		10			5	 
/		除法		x=y/2		2.5			5	 
%		取模（余数）	x=y%2	1			5	 
++		自增		x=++y		6			6	 
				x=y++		5			6	 
--		自减		x=--y		4			4	 
				x=y--		5			4

 */

// 1.1 JavaScript 赋值运算符

/*
赋值运算符用于给 JavaScript 变量赋值。
给定 x=10 和 y=5，下面的表格解释了赋值运算符：
运算符	例子		等同于	运算结果
=		x=y	 			x=5	 
+=		x+=y		x=x+y	x=15	 
-=		x-=y		x=x-y	x=5	 
*=		x*=y		x=x*y	x=50	 
/=		x/=y		x=x/y	x=2	 
%=		x%=y		x=x%y	x=0

 */

// 1.2 用于字符串的 + 运算符

// + 运算符用于把文本值或字符串变量加起来（连接起来）。
//如需把两个或多个字符串变量连接起来，请使用 + 运算符

function addStringF() {
	var str1 = "What a nice";
	var str2 = "day !";
	var str3 = str1 + " " +str2;
	document.getElementById("p010").innerHTML= str3;
}

// 1.3 对字符串和数字进行加法运算
// 两个数字相加，返回数字相加的和，如果数字与字符串相加，返回字符串

/*
var x = 5 + 5;         
var y = "5" + 5;
var z = "hello" + 5;
*/

// 10
// 55
// hello5

// 空文本 + 数字得到的运算结果都是把数字转成字符串，
// 无论文本有多少个空格。但是空格会计入长度

/*
var result1= 5+5+"abc"; //结果将是"10abc"
var result2= ""+5+5+"abc"; //结果将是"55abc"

var result1 =""+5;         // 得到的结果是"5"
var result2 =" "+5;        // 得到的结果是" 5"
var result3 ="       "+5;  // 得到的结果是"       5"
*/
// 备注

/*
1. 字符串和数字相加，数字转成字符串
var one="This is a test";
var two=123;
var three=one+two;
// 结果：three:This is a test123

2. 数字和布尔值相加，布尔值 false 转成 0，true 转成 1
var one=13;
var two=true;
var three=one+two;
// 结果 three:14

3. 字符串与布尔值相加，布尔值转化成字符串

4. 取模运算的结果符号只与左边值的符号有关
var x = 7 % 3; // 结果为 1
var y = 7 % (-3); // 结果为 1
var z = (-7) % 3; // 结果为 -1

5. 数字与 null(空值) 相加，null 转化为数字 0
var car=null+3+4;    // 结果为7

6. 字符串与 null(空值) 相加，null 转化为字符串
var car=null+"a";    // 结果为 nulla

 */