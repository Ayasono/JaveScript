**假设我们有一个复杂的对象，我们希望将其转换为字符串，以通过网络发送，或者只是为了在日志中输出它。当然，这样的字符串应该包含所有重要的属性。**

> `JSON`(JavaScript Object Notation) 是一种轻量级的网络间数据交换格式。

[JSON](http://en.wikipedia.org/wiki/JSON)（JavaScript Object Notation）是表示值和对象的通用格式。在 [RFC 4627](http://tools.ietf.org/html/rfc4627) 标准中有对其的描述。最初它是为 `JavaScript` 而创建的，但许多其他编程语言也有用于处理它的库。因此，当客户端使用 `JavaScript` 而服务器端是使用 `Ruby/PHP/Java` 等语言编写的时，使用 `JSON` 可以很容易地进行数据交换。

`JavaScript` 提供了如下方法：

- `JSON.stringify` 将对象转换为 `JSON`。
- `JSON.parse` 将 `JSON` 转换回对象。

## `JSON.stringify`

例如，在这里我们 `JSON.stringify` 一个 `student` 对象：

```js
var student = {
  name: 'John',
  age: 30,
  isAdmin: false,
  courses: ['html', 'css', 'js'],
  wife: null
};


var json = JSON.stringify(student);


alert(typeof json); // string

alert(json);

/* JSON 编码的对象：
{
  "name": "John",
  "age": 30,
  "isAdmin": false,
  "courses": ["html", "css", "js"],
  "wife": null
}
*/
```

> 方法 `JSON.stringify(student)` 接收对象并将其转换为字符串。

> 得到的 `json` 字符串是一个被称为 **`JSON 编码（JSON-encoded）`** 或 **`序列化（serialized）`** 或 **`字符串化（stringified）`** 或 **`编组化（marshalled）`** 的对象。


请注意，`JSON` 编码的对象与对象字面量有几个重要的区别：

- 字符串使用双引号。`JSON` 中没有单引号或反引号。所以 `'John'` 被转换为 `"John"`。
- 对象属性名称也是双引号的。这是强制性的。所以 `age:30` 被转换成 `"age":30`。



## `JSON.parse`

要解码 `JSON` 字符串，我们需要另一个方法 `JSON.parse`。

语法：

```js
var value = JSON.parse(str);
// str 要解析的 JSON 字符串。
```



例如：

```js
// 字符串化数组
var numbers = "[0, 1, 2, 3]";

numbers = JSON.parse(numbers);

alert( numbers[1] ); // 1
```

对于嵌套对象：

```js
var userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';

var user = JSON.parse(userData);

alert( user.friends[1] ); // 1
```

**举例**

```javascript
// 对象类型是不能通过网络进行传输的,只能是文本形式
var movie = {
	title: "我不是药神",
	casts: [
		{
			name: "徐峥",
			avatar: "http://xxxx.jpg",
			age: 45,
		},
		{
			name: "黄渤",
			avatar: "http://xxxx2.jpg",
			age: 42,
		},
	],
	pubDate: "2017-10-1",
	rate: 5,
};
console.log(movie);
// 1. 通过JSON.stringify(jsonObj) ==> 可以把json类型的对象转换为文本
var jsonStr = JSON.stringify(movie);
console.log(jsonStr);

//2. json字符串转换为对象
var movieStr = '{"name":"张三","age":20}';
var movieObj = JSON.parse(movieStr);
console.log(movieObj);
//转换为对象 即可通过.的形式调用属性的值
console.log(movieObj.name);

// 对象和json类型的对象都可以通过 JSON.stringify() 转换为字符串,
// 但是如果希望字符串转换json对象 必须是json字符串
var user = {
	name: "张三",
	age: 20,
};
var userStr = JSON.stringify(user);
// {"name":"张三","age":20}
// {name:'张三',age:20}
console.log(userStr);
var str = "{name:'张三',age:20}";
var obj = JSON.parse(str); // 失败
console.log(obj);
```