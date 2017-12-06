// JavaScript 字符串
// JavaScript 字符串用于存储和处理文本。

// 1.0 JavaScript 字符串

/*
 * 字符串可以是插入到引号中的任何字符。你可以使用单引号或双引号
var carname = "Volvo XC60";
var carname = 'Volvo XC60';
可以使用索引位置来访问字符串中的每个字符
var character = carname[0];

可以在字符串中使用引号，字符串中的引号不要与字符串的引号相同
var a = "It's me";
var b = 'Hello, "Tom" ';
var c = "Hello, 'Tom' ";

可以在字符串添加转义字符来使用引号
var d = "Hello, \"Tom\" ";

 * 
 */

// 1.1 字符串长度
//可以使用内置属性 length 来计算字符串的长度
/*
var string = "HelloWorld";
var sln = string.length;
*/

// 1.2 特殊字符
// 可以使用反斜杠 (\) 来转义 "" 字符串中的双引号

//var name = "My name is \"Edward\" ";

//  反斜杠是一个转义字符。 转义字符将特殊字符转换为字符串字符

/*
下表中列举了在字符串中可以使用转义字符转义的特殊字符：
代码	输出
\'	单引号
\"	双引号
\\	反斜杠
\n	换行
\r	回车
\t	tab(制表符)
\b	退格符
\f	换页符
*/

// 1.3 字符串可以是对象

/*
var x = ""John;
var y = new String("John");
typeof x // 返回String
typeof y // 返回Object

不要创建 String 对象。它会拖慢执行速度，并可能产生其他副作用
*/

var x = "John";
var y = new String("John");
document.getElementById("p009").innerHTML= x===y;
// === 为绝对相等，即数据类型与值都必须相等; 结果为 false，因为 x 是字符串，y 是对象

// 1.4 字符串属性和方法

// 原始值字符串，如 "John", 没有属性和方法(因为他们不是对象)。
// 原始值可以使用 JavaScript 的属性和方法，
// 因为 JavaScript 在执行方法和属性时可以把原始值当作对象

// 字符串属性

/*
属性	描述
constructor	返回创建字符串属性的函数
length	返回字符串的长度
prototype	允许您向对象添加属性和方法
*/

// 字符串方法

/*
方法	描述
charAt()	返回指定索引位置的字符
charCodeAt()	返回指定索引位置字符的 Unicode 值
concat()	连接两个或多个字符串，返回连接后的字符串
fromCharCode()	将 Unicode 转换为字符串
indexOf()	返回字符串中检索指定字符第一次出现的位置
lastIndexOf()	返回字符串中检索指定字符最后一次出现的位置
localeCompare()	用本地特定的顺序来比较两个字符串
match()	找到一个或多个正则表达式的匹配
replace()	替换与正则表达式匹配的子串
search()	检索与正则表达式相匹配的值
slice()	提取字符串的片断，并在新的字符串中返回被提取的部分
split()	把字符串分割为子字符串数组
substr()	从起始索引号提取字符串中指定数目的字符
substring()	提取字符串中两个指定的索引号之间的字符
toLocaleLowerCase()	根据主机的语言环境把字符串转换为小写，只有几种语言（如土耳其语）具有地方特有的大小写映射
toLocaleUpperCase()	根据主机的语言环境把字符串转换为大写，只有几种语言（如土耳其语）具有地方特有的大小写映射
toLowerCase()	把字符串转换为小写
toString()	返回字符串对象值
toUpperCase()	把字符串转换为大写
trim()	移除字符串首尾空白
valueOf()	返回某个字符串对象的原始值
 */

// 备注

/*
JavaScript == 与 === 区别
1、对于 string、number 等基础类型，== 和 === 是有区别的
a）不同类型间比较，== 之比较 "转化成同一类型后的值" 看 "值" 是否相等，=== 如果类型不同，其结果就是不等。
 b）同类型比较，直接进行 "值" 比较，两者结果一样。
2、对于 Array,Object 等高级类型，== 和 === 是没有区别的
进行 "指针地址" 比较
3、基础类型与高级类型，== 和 === 是有区别的
a）对于 ==，将高级转化为基础类型，进行 "值" 比较
 b）因为类型不同，=== 结果为 false
4、!= 为 == 的非运算，!== 为 === 的非运算

var num=1；

var str="1"；

var test=1；

test == num   //true　相同类型　相同值 

test === num  //true　相同类型　相同值 

test !== num  //false test与num类型相同，其值也相同,　非运算肯定是false 

num == str   //true 　把str转换为数字，检查其是否相等。 

num != str   //false  == 的 非运算 

num === str  //false  类型不同，直接返回false 

num !== str  //true   num 与 str类型不同 意味着其两者不等　非运算自然是true啦

*/
