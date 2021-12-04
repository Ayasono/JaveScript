## JavaScript 介绍

### 什么是 JavaScript

JavaScript 一种直译式脚本语言，是一种动态类型、弱类型、基于原型的语言，内置支持类型。它的解释器被称为 JavaScript 引擎，为浏览器的一部分，广泛用于客户端的脚本语言，最早是在 HTML 网页上使用，用来给 HTML 网页增加动态功能。[介绍来源于百科](https://baike.baidu.com/item/javascript/321142?fr=aladdin)

### 发展历史

JavaScript 诞生于**1995 年**。布兰登 • 艾奇（Brendan Eich，1961 年～），1995 年在网景公司，发明的 JavaScript。

JavaScript 是由**网景**公司发明，起初命名为 LiveScript，后来由于 SUN 公司的介入更名为了 JavaScript。

> 备注：由于当时 Java 这个语言特别火，所以为了傍大牌，就改名为 JavaScript。如同“北大”和“北大青鸟”的关系。“北大青鸟”就是傍“北大”大牌。

同时期还有其他的网页语言，比如 VBScript、JScript 等等，但是后来都被 JavaScript 打败了，所以现在的浏览器中，只运行一种脚本语言就是 JavaScript。

### JavaScript 的发展

2003 年之前，JavaScript 被认为“牛皮鲜”，用来制作页面上的广告，弹窗、漂浮的广告。什么东西让人烦，什么东西就是 JavaScript 开发的。所以很多浏览器就推出了屏蔽广告功能。

2004 年，JavaScript 命运开始改变。那一年，**谷歌公司开始带头使用 Ajax 技术**。Ajax 有一些应用场景。比如，当我们在百度搜索框搜文字时，输入框下方的智能提示，可以通过 Ajax 实现。比如，当我们注册网易邮箱时，能够及时发现用户名是否被占用，而不用调到另外一个页面。

2007 年乔布斯发布了第一款 iPhone，这一年开始，用户就多了上网的途径，就是用移动设备上网。
**JavaScript 在移动页面中，也是不可或缺的**。并且这一年，互联网开始标准化，按照 W3C 规则三层分离，JavaScript 越来越被重视。

2010 年，人们更加了解**HTML5 技术**，**HTML5 推出了一个东西叫做 Canvas**（画布），工程师可以在 Canvas 上进行游戏制作，利用的就是 JavaScript。

2011 年，**Node.js 诞生**，使 JavaScript 能够开发服务器程序了。

如今，**WebApp**已经非常流行，就是用**网页技术开发手机应用**。手机系统有 iOS、安卓。比如公司要开发一个“携程网”App，就需要招聘三队人马，比如 iOS 工程师 10 人，安卓工程师 10 人，前端工程师 10 人。共 30 人，开发成本大；而且如果要改版，要改 3 个版本。现在，假设公司都用 web 技术，用 html+css+javascript 技术就可以开发 App。也易于迭代（网页一改变，所有的终端都变了）。

### JavaScript 的组成

JavaScript 基础分为三个部分：

-   **ECMAScript**：JavaScript 的语法标准。包括变量、表达式、运算符、函数、if 语句、for 语句等。

-   **DOM**：文档对象模型，操作**网页上的元素**的 API。比如让盒子移动、变色、轮播图等。

-   **BOM**：浏览器对象模型，操作**浏览器部分功能**的 API。比如让浏览器自动滚动。

### JavaScript 和 ECMAScript 的关系

ECMAScript 是一种由 Ecma 国际（前身为欧洲计算机制造商协会,英文名称是 European Computer Manufacturers Association）制定和发布的脚本语言规范。

JavaScript 是由公司开发而成的，问题是不便于其他的公司拓展和使用。所以欧洲的这个 ECMA 的组织，牵头制定 JavaScript 的标准，取名为 ECMAScript。

简单来说，**ECMAScript 不是一门语言，而是一个标准**。

ECMAScript 在 2015 年 6 月，发布了 ECMAScript 6 版本（ES6），语言的能力更强（也包含了很多新特性）。但是，浏览器的厂商不会那么快去追上这个标准，需要时间。

### JavaScript 的特点

（1）简单易用：可以使用任何文本编辑工具编写，只需要浏览器就可以执行程序。

（2）**解释型语言**：事先不需要被编译为机器码再执行，逐行执行、无需进行严格的变量声明。

（3）基于对象：内置大量现成对象，编写少量程序可以完成目标。

（4）面向过程。

### 编程语言的分类

-   解释型语言：**边解析边执行**，不需要事先编译。例如：JavaScript、php。

-   编译型语言：事先把所有的代码翻译成计算机能够执行的指令，然后整体执行。例如：c、c++。

## JavaScript 的引入和输出方式

### JavaScript 代码的书写位置

（1）内嵌的方式：

页面中，我们可以在`<body>`标签里放入`<script type=”text/javascript”></script>`标签对儿，并在`<script>`里书写 JavaScript 程序：

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<meta http-equiv="X-UA-Compatible" content="ie=edge" />
		<title>Document</title>
	</head>
	<body>
		<!-- 写在所有html标签之后 -->
		<script>
			// 相关代码
		</script>
	</body>
</html>
```

text 表示纯文本，因为 JavaScript 也是一个纯文本的语言。

（2）外链式：引入外部 JavaScript 文件（放到 body 标签里，可以和内嵌的 js 代码并列）

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<meta http-equiv="X-UA-Compatible" content="ie=edge" />
		<title>Document</title>
	</head>
	<body>
		<script src="引用的代码路径"></script>
	</body>
</html>
```

### JavaScript 输出方式

**alert()**（英文翻译为“警报”）的用途：**弹出“警告框”**。

`alert("")`警告框的效果如下：

![](http://doc.bufanui.com/uploads/js/images/m_296c9bf552cd56de0fb69edfa18ac992_r.gif)

这个警告框，在 IE 浏览器中长这样：

![](http://doc.bufanui.com/uploads/js/images/m_3562a1664005f5a08212e204850870c7_r.png)

上面的代码中，如果写了两个 alert()语句的话，网页的效果是：弹出第一个警告框，点击确定后，继续弹出第二个警告框。

**console.log()** ：**控制台输出**。

`console.log("")`表示在控制台中输出。console 表示“控制台”，log 表示“输出”。

控制台在 Chrome 浏览器的 F12 中。控制台是工程师、程序员调试程序的地方。程序员经常使用这条语句输出一些东西，来测试程序是否正确。

`console.log("")`效果如下：

![](http://doc.bufanui.com/uploads/js/images/m_456ad9d7376b3e0d1bf82bc6d5f9bf07_r.gif)

普通人是不会在意控制台的，但是有些网站另藏玄机。有个很有意思的地方是，百度首页的控制台，悄悄地放了一段招聘信息：

![](http://doc.bufanui.com/uploads/js/images/m_c7539a4cc6b5e0748909f3cdf53cf2e2_r.png)

毕竟做前端的人是经常使用控制台的。

**prompt()**：**用户输入语句**

`prompt()`就是专门用来弹出能够让用户输入的对话框。用得少，测试的时候可能会用。

JS 代码如下：

```javascript
var a = prompt("请随便输入点什么东西吧");
console.log(a);
```

上方代码中，用户输入的内容，将被传递到变量 a 里面。

效果如下：

![](http://doc.bufanui.com/uploads/js/images/m_923aa0e905b3ad6d5e8deedb6915a77f_r.gif)

**prompt()语句中，用户不管输入什么内容，都是字符串。**