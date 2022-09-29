**JS是区分大小写的语言**

## 为什么要写注释

1、对于一些复杂的算法或者正则表达式，需要通过注释来记录、解释它们在此的作用；

2、用于解释代码本身无法包含的信息，比如注意事项、业务逻辑、业务流程和背后的决策推理。

## 变量的命名规则

* 只能由数字、字母、下划线和美元符号($)组成
* 只能以字母、下划线和美元符号($)开头，不能以数字开头
* 变量命中不能出现空格、中划线(-)
* 严格区分大小写
* 不能使用JS保留的关键字
* 变量名长度不能超过255个字符
* 汉字可以作为变量名

> 命名要有语义性、可读性
>
> 使用小驼峰命名法，比如：getElementById

## 变量的数据类型

基本数据类型（值类型）：String 字符串类型、Number 数字类型、Boolean 布尔类型、Null 空值、Undefined 未定义、BigInt 大型数值(ES6)、Symbol(ES6)

引用数据类型（引用类型）：Object 对象

> 引用数据类型只有 Object 一种
>
> Function、Array、Date、Error、RegExp等都属于 Object 类型，除了七种基本类型以外，其他都属于 Object 类型

### 基本数据类型和引用数据类型的区别

* 基本数据类型：参数赋值是传递的数值
* 引用数据类型：参数赋值是传递的地址

## 堆内存和栈内存

> JS中所有变量都是保存在栈内存

* 基本数据类型：

  值都是直接保存在栈内存中，值与值之间是互相独立、互不影响

* 引用数据类型：

  对象是保存在堆内存中，变量保存的是对象的内存地址（对象的引用），保存到变量的栈内存当中，**如果多个变量同时保存了同一个对象，当通过一个变量进行修改时，其他的也同时受到影响**。

## NaN

NaN是一个特殊的数字，表示Not a Number，非数值

``` javascript
console.log('abc' / 18); //结果是NaN
console.log('abc' * 'abcd'); //按理说，字符串相乘是没有结果的，但JS会得出一个结果，结果是NaN
```

> `typeof NaN`返回的结果是Number
>
> Undefined和任何数值计算都是NaN
>
> NaN和任何数值都不相等，包括其本身

## 连字符和加号的区别

> +可以是连字符也可以加号，取决于+两边的值的类型，如果都是数字则是加号相加，否则就是连字符（字符串拼接）

``` javascript
var a = 1;
var b = 2;
console.log("a" + b);	//"a"就不是变量了！所以就是"a"+2 输出a2
```

> 在变量中加入字符串进行拼接，可以被同化为字符串

## 隐式转换

`"2"+1`得到的结果其实是字符串，但是`"2"-1`得到的结果是数值 1，这是因为进行了相应的“隐式转换”。

`-`、`*`、`/`、`%`这几个符号会自动进行隐式转换

``` javascript
var a = '4' + 3 - 6;
console.log(a); // 结果是37
```

## Null和Undefined

### Null：空对象

null专门用来定义一个空对象，例如：`let a = null`或者`Object.create(null)`，null相当于是一个地址为空的object。

``` javascript
let a = null;
console.log(typeof a); // 结果为object
```

> Null类型的值只有一个，就是null
>
> `typeof null`会返回object

### Undefined：未定义类型

* 变量已声明但未赋值，此时变量的值就为undefined

  ``` javascript
  let a;
  console.log(a); // 结果为undefined
  console.log(typeof a); // 结果为undefined
  ```

  > Undefined类型的值只有一个，就是undefined
  >
  > 使用`typeof`检查一个undefined的值，返回undefined

* 变量未声明（未定义）就使用会报错，`typeof`检查会返回`undefined`

  ``` javascript
  console.log(a); // 报错：Uncaught ReferenceError: a is not defined
  console.log(typeof a); // undefined
  ```

* 函数没有return返回语句，那么这个函数的返回值就是undefined，相当于是`return undefined`

  ``` javascript
  function f() {};
  console.log(f()); // 结果为undefined
  ```

* 调用函数没有传参，此时参数的值就是undefined

  ``` javascript
  function f(name) {
    console.log(name);
  };
  f(); // 调用函数时，未传参。执行函数后的打印结果：undefined
  ```

  > 实际开发中，如果调用函数时没有传参，我们可以根据需要给形参设置一个默认值：
  >
  > ``` javascript
  > function f(name) {
  > 	name = name || '张三';
  >   console.log(name);
  > }
  > f();
  > ```

### Null和Undefined的其他区别

`null == undefined`的结果为`true`，但是`null === undefined`的结果为`false`；

`null`与任何值运算，null都可看做`0`；

`undefined`与任何值运算，结果都是`NaN`

## typeof 运算符

`typeof`表示获取变量的数据类型，返回值是小写，字符串

``` javascript
// 写法1
typeof 变量;
// 写法2
typeof(变量);
```

`typeof`无法区分数组，`instanceof`可以：

``` javascript
console.log([] instanceof Array); // 结果为true
console.log({} instanceof Array); // 结果为false
```

## 使用 parseInt()函数：字符串 -> 整数

将传入的数据当作**字符串**来处理，从左至右提取数值, 一旦遇到非数值就立即停止；停止时如何还没有提取到数值, 那么就返回NaN。

**情况一：字符串 --> 数字**

（1）**只保留字符串最开头的数字**，后面的中文自动消失。

（2）如果字符串不是以数字开头，则转换为 NaN。

（3）如果字符串是一个空串或者是一个全是空格的字符串，转换时会报错。

**情况二：Boolean --> 数字**，结果为：NaN

**情况三：Null --> 数字**，结果为：NaN

**情况四：Undefined --> 数字**，结果为：NaN

> parseInt()、parseFloat()会将传入的数据当作**字符串**来处理。如果对**非 String**使用 parseInt()、parseFloat()，则会**先将其转换为 String** 然后再操作。

* **只保留字符串最开头的数字**，后面的中文自动消失：

  ``` javascript
  console.log(parseInt('2017年')); //打印结果：2017
  console.log(parseInt('2017.01年')); //打印结果仍是：2017   （说明只会取整数）
  console.log(parseInt('aaa2017.01年')); //打印结果：NaN （因为不是以数字开头）
  ```

* 自动截断小数：**取整，不四舍五入**：

  ```javascript
  var a = parseInt(5.8) + parseInt(4.7);
  console.log(a); // 9
  ```

* 带两个参数时，表示在转换时，包含了进制转换:

  ```javascript
  var a = '110';
  var num = parseInt(a, 16); // 【重要】将 a 当成 十六进制 来看待，转换成 十进制 的 num
  console.log(num); // 272
  ```

## 转换为 Boolean

* 数字 --> 布尔。 0 和 NaN是 false，其余的都是 true
* 字符串 ---> 布尔。空串是false，其余的都是 true。全是空格的字符串，转换结果也是 true。字符串`'0'`的转换结果也是 true
* null 和 undefined 都会转换为 false
* 引用数据类型会转换为 true。**空数组`[]`和空对象`{}`，转换结果也是 true**

### !!显式转换为 Boolean

使用 `!!`可以显式转换为 Boolean 类型。比如 `!!3`的结果是 true

## 运算符：`-`、`*`、`/`、`%`

任何非 Number 类型的值做`-`、`*`、`/`、`%`运算时，会将这些值转换为 Number 然后再运算(内部调用的是 Number() 函数），运算结果是 Number 类型。

## 非布尔值的与或运算

* **与运算**的返回结果：（以多个非布尔值的运算为例）
  - 如果第一个值为 false，则执行第一条语句，并直接返回第一个值；不会再往后执行。
  - 如果第一个值为 true，则继续执行第二条语句，并返回第二个值（如果所有的值都为 true，则返回的是最后一个值）。

* **或运算**的返回结果：（以多个非布尔值的运算为例）
  - 如果第一个值为 true，则执行第一条语句，并直接返回第一个值；不会再往后执行。
  - 如果第一个值为 false，则继续执行第二条语句，并返回第二个值（（如果所有的值都为 false，则返回的是最后一个值）。

```javascript
var result = 5 && 6; // 运算过程：true && true;
console.log('result：' + result); // 打印结果：6（也就是说最后面的那个值。）
```

### 容错处理

```javascript
if (result.resultCode == 0) {
    var a = result && result.data && result.data.imgUrl || 'http://img.smyhvae.com/20160401_01.jpg';
}
```

获取返回结果中的`result.data.imgUrl`这个图片资源；如果返回结果中没有 `result.data.imgUrl` 这个字段，就用 `http://img.smyhvae.com/20160401_01.jpg` 作为**兜底**图片。

## switch 语句（条件分支语句）

语法格式：

```javascript
switch(表达式) {
	case 值1：
		语句体1;
		break;

	case 值2：
		语句体2;
		break;
	...
	...
	default：
		语句体 n+1;
		break;
}
```

switch的执行流程：

* 首先，计算出表达式的值，和 case 依次比较，一旦有对应的值，就会执行相应的语句，在执行的过程中，遇到 break 就会结束。
* 如果所有的 case 都和表达式的值不匹配，就会执行 default 语句体部分。

### *switch 语句的结束条件*【重要】

* 遇到`break`就结束了执行，而不是遇到`default`
* 执行到程序的末尾结束

### case 穿透

switch 语句中的`break`可以省略，但会出现case穿透现象。

* ```javascript
  var num = 4;
  
  //switch判断语句
  switch (num) {
      case 1:
          console.log('星期一');
          break;
      case 2:
          console.log('星期二');
          break;
      case 3:
          console.log('星期三');
          break;
      case 4:
          console.log('星期四');
      //break;
      case 5:
          console.log('星期五');
      //break;
      case 6:
          console.log('星期六');
          break;
      case 7:
          console.log('星期日');
          break;
      default:
          console.log('你输入的数据有误');
          break;
  }
  ```

  上方代码执行的结果为：

  ``` javascript
  星期四
  星期五
  星期六
  ```

  因为在 case 4 和 case 5 中都没有 break，那语句走到 case 6 的 break 才会停止。

* ```javascript
  //switch判断语句
  var number = 5;
  
  switch (number) {
      default:
          console.log('我是defaul语句');
      // break;
      case 2:
          console.log('第二个呵呵:' + number);
      //break;
      case 3:
          console.log('第三个呵呵:' + number);
          break;
      case 4:
          console.log('第四个呵呵:' + number);
          break;
  }
  ```

  上方代码执行的结果为：

  ``` javascript
  我是defaul语句
  第二个呵呵:5
  第三个呵呵:5
  ```

  代码走到 default 时，因为没有遇到`break`，所以会继续往下走，直到遇见`break`或者走到程序的末尾。
