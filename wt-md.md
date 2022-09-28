**JS是区分大小写的语言**

### 为什么要写注释

1、对于一些复杂的算法或者正则表达式，需要通过注释来记录、解释它们在此的作用；

2、用于解释代码本身无法包含的信息，比如注意事项、业务逻辑、业务流程和背后的决策推理。

### 变量的命名规则

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

### 变量的数据类型

基本数据类型（值类型）：String 字符串类型、Number 数字类型、Boolean 布尔类型、Null 空值、Undefined 未定义、BigInt 大型数值(ES6)、Symbol(ES6)

引用数据类型（引用类型）：Object 对象

> 引用数据类型只有 Object 一种
>
> Function、Array、Date、Error、RegExp等都属于 Object 类型，除了七种基本类型以外，其他都属于 Object 类型

#### 基本数据类型和引用数据类型的区别

* 基本数据类型：参数赋值是传递的数值
* 引用数据类型：参数赋值是传递的地址

### 堆内存和栈内存

> JS中所有变量都是保存在栈内存

* 基本数据类型：

  值都是直接保存在栈内存中，值与值之间是互相独立、互不影响

* 引用数据类型：

  对象是保存在堆内存中，变量保存的是对象的内存地址（对象的引用），保存到变量的栈内存当中，**如果多个变量同时保存了同一个对象，当通过一个变量进行修改时，其他的也同时受到影响**。

### NaN

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

### 连字符和加号的区别

> +可以是连字符也可以加号，取决于+两边的值的类型，如果都是数字则是加号相加，否则就是连字符（字符串拼接）

``` javascript
var a = 1;
var b = 2;
console.log("a" + b);	//"a"就不是变量了！所以就是"a"+2 输出a2
```

> 在变量中加入字符串进行拼接，可以被同化为字符串

### 隐式转换

`"2"+1`得到的结果其实是字符串，但是`"2"-1`得到的结果是数值 1，这是因为进行了相应的“隐式转换”。

`-`、`*`、`/`、`%`这几个符号会自动进行隐式转换

``` javascript
var a = '4' + 3 - 6;
console.log(a); // 结果是37
```

### Null和Undefined

#### Null：空对象

null专门用来定义一个空对象，例如：`let a = null`或者`Object.create(null)`，null相当于是一个地址为空的object。

``` javascript
let a = null;
console.log(typeof a); // 结果为object
```

> Null类型的值只有一个，就是null
>
> `typeof null`会返回object

#### Undefined：未定义类型

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

#### Null和Undefined的其他区别

`null == undefined`的结果为`true`，但是`null === undefined`的结果为`false`；

`null`与任何值运算，null都可看做`0`；

`undefined`与任何值运算，结果都是`NaN`

### typeof 运算符

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

