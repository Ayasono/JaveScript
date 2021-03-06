>我们经常需要重复执行一些操作。
>例如，我们需要将列表中的商品逐个输出，或者运行相同的代码将数字 1 到 10 逐个输出。

**循环** 是一种重复运行同一代码的方法。

## while 循环

`while` 循环的语法如下：

```js
while (condition) {
  // 代码
  // 所谓的“循环体” 
}
```

当 `condition` 为 `true` 时，执行循环体的 `code`。

例如，以下将循环输出当 `i < 3` 时的 `i` 值：

```js run
var i = 0;
while (i < 3) { // 依次显示 0、1 和 2
  console.log( i );
  i++;
}
```

循环体的单次执行叫作 **一次迭代**。上面示例中的循环进行了三次迭代。

如果上述示例中没有 `i++`，那么循环（理论上）会永远重复执行下去。

任何表达式或变量都可以是循环条件，而不仅仅是比较。在 `while` 中的循环条件会被计算，计算结果会被转化为布尔值。

例如，`while (i != 0)` 可简写为 `while (i)`：

```js run
var i = 3;
while (i) { // 当 i 变成 0 时，条件为 false，循环终止
  console.log( i );
  i--;
}
```



## do..while 循环

使用 `do..while` 语法可以将条件检查移至循环体 **下面**：

```js
do {
  // 循环体
} while (condition);
```

循环首先执行循环体，然后检查条件，当条件为真时，重复执行循环体。

例如：

```js run
var i = 0;
do {
  console.log( i );
  i++;
} while (i < 3);
```

这种形式的语法很少使用，除非你希望不管条件是否为真，循环体 **至少执行一次**。通常我们更倾向于使用另一个形式：`while(…) {…}`。

#### while 循环举例

**题目**：假如投资的年利率为 5%，试求从 1000 块增长到 5000 块，需要花费多少年？

**代码实现**：

```javascript
/*
 * 假如投资的年利率为5%，试求从1000块增长到5000块，需要花费多少年
 *
 * 1000 1000*1.05
 * 1050 1050*1.05
 */

//定义一个变量，表示当前的钱数
var money = 1000;

//定义一个计数器
var count = 0;

//定义一个while循环来计算每年的钱数
while (money < 5000) {
	money *= 1.05;

	//使count自增
	count++;
}

console.log(money);
console.log("一共需要" + count + "年");
```

打印结果：

```
	5003.18854203379

	一共需要33年
```

## for 循环

`for` 循环看起来就像这样：

```js
for (begin; condition; step) {
  // ……循环体……
}
```

我们通过示例来了解一下这三个部分的含义。下述循环从 `i` 等于 `0` 到 `3`（但不包括 `3`）运行 `console.log(i)`：

```js run
for (var i = 0; i < 3; i++) { // 结果为 0、1、2
  console.log(i);
}
```

我们逐个部分分析 `for` 循环：

| 语句段         |                  |                                                  |
| -------------- | ---------------- | ------------------------------------------------ |
| begin          | `i = 0`          | 进入循环时执行一次。                             |
| condition      | `i < 3`          | 在每次循环迭代之前检查，如果为 false，停止循环。 |
| body（循环体） | `console.log(i)` | 条件为真时，重复运行。                           |
| step           | `i++`            | 在每次循环体迭代后执行。                         |

一般循环算法的工作原理如下：

```
开始运行
→ (如果 condition 成立 → 运行 body 然后运行 step)
→ (如果 condition 成立 → 运行 body 然后运行 step)
→ (如果 condition 成立 → 运行 body 然后运行 step)
→ ...
```

所以，`begin` 执行一次，然后进行迭代：每次检查 `condition` 后，执行 `body` 和 `step`。

> 如果你这是第一次接触循环，那么回到这个例子，在一张纸上重现它逐步运行的过程，可能会对你有所帮助。

以下是在这个示例中发生的事：

```js
// for (var i = 0; i < 3; i++) console.log(i)

// 开始
var i = 0
// 如果条件为真，运行下一步
if (i < 3) { alert(i); i++ }
// 如果条件为真，运行下一步
if (i < 3) { alert(i); i++ }
// 如果条件为真，运行下一步
if (i < 3) { alert(i); i++ }
// ……结束，因为现在 i == 3
```

![](http://doc.bufanui.com/uploads/js/images/m_db09f738304a64a14cebefe4f643a996_r.png)

#### for 循环举例

```javascript
for (var i = 1; i < 13; i = i + 4) {
	console.log(i);
}
```

上方代码的遍历步骤：

```
程序一运行，将执行var i = 1;这条语句， 所以i的值是1。
然后程序会验证一下i < 13是否满足，1<13是真，所以执行一次循环体（就是大括号里面的语句）。
执行完循环体之后，会执行i=i+4这条语句，所以i的值，是5。

程序会会验证一下i < 13是否满足，5<13是真，所以执行一次循环体（就是大括号里面的语句）。
执行完循环体之后，会执行i=i+4这条语句，所以i的值，是9。

程序会会验证一下i < 13是否满足，9<13是真，所以执行一次循环体（就是大括号里面的语句）。
执行完循环体之后，会执行i=i+4这条语句，所以i的值，是13。

程序会会验证一下i < 13是否满足，13<13是假，所以不执行循环体了，将退出循环。

最终输出输出结果为：1、5、9
```

**题目 1**：

```javascript
for (var i = 1; i < 10; i = i + 3) {
	i = i + 1;
	console.log(i);
}
```

输出结果：2、6、10

**题目 2**：

```javascript
for (var i = 1; i <= 10; i++) {}
console.log(i);
```

输出结果：11

**题目 3**：

```javascript
for (var i = 1; i < 7; i = i + 3) {}
console.log(i);
```

输出结果：7

**题目 4**：

```javascript
for (var i = 1; i > 0; i++) {
	console.log(i);
}
```

死循环。

### break 和 continue

#### 跳出循环 break

通常条件为假时，循环会终止。

但我们随时都可以使用 `break` 指令强制退出。

```javascript
for (var i = 0; i < 5; i++) {
	console.log("i的值:" + i);
	if (i == 2) {
		break; 
	// 注意，虽然在 if 里 使用了 break，但这里的 break 是服务于外面的 for 循环。
	}
	// break之后,下边语句也不再执行
}
```

#### 继续下一次迭代 continue

`continue` 指令是 `break` 的“轻量版”。它不会停掉整个循环。而是停止当前这一次迭代，并强制启动新一轮循环（如果条件允许的话）。

如果我们完成了当前的迭代，并且希望继续执行下一次迭代，我们就可以使用它。

下面这个循环使用 `continue` 来只输出奇数：

```js
for (var i = 0; i < 10; i++) {

  //如果为真，跳过循环体的剩余部分。
  if (i % 2 == 0){
  	continue;
  }
  console.log(i); // 1，然后 3，5，7，9
}
```

对于偶数的 `i` 值，`continue` 指令会停止本次循环的继续执行，将控制权传递给下一次 `for` 循环的迭代（使用下一个数字）。因此 `console` 仅被奇数值调用。

显示奇数的循环可以像下面这样：

```js 
for (var i = 0; i < 10; i++) {

  if (i % 2 == 0) {
    console.log( i );
  }

}
```


### 总结与练习

我们学习了三种循环：

- `while` —— 每次迭代之前都要检查条件。
- `do..while` —— 每次迭代后都要检查条件。
- `for (;;)` —— 每次迭代之前都要检查条件，可以使用其他设置。

通常使用 `while(true)` 来构造“无限”循环。这样的循环和其他循环一样，都可以通过 `break` 指令来终止。

如果我们不想在当前迭代中做任何事，并且想要转移至下一次迭代，那么可以使用 `continue` 指令。

#### for循环遍历求和

```js
        // 求 1~100 之间的整数累加和
        // 需要循环100次，我们需要一个计数器  i  
        // 我们需要一个存储结果的变量 sum ，但是初始值一定是 0
        // 核心算法：1 + 2 + 3 + 4 ....   ，sum  =  sum + i;
        var sum = 0; // 求和 的变量
        for (var i = 1; i <= 100; i++) {
            // sum = sum + i;
            sum += i;
        }
        console.log(sum);
```

>题目1:  求1-100之间所有偶数和奇数的和
>题目2:  求1-100之间所有能被3整除的数字的和 

#### for 循环嵌套

```js
		// 1. 双重for循环 语法结构
        // for (外层的初始化变量; 外层的条件表达式; 外层的操作表达式) {
        //     for (里层的初始化变量; 里层的条件表达式; 里层的操作表达式) {
        //         // 执行语句;
        //     }
        // }
        
        // 2. 我们可以把里面的循环看做是外层循环的语句
        
        // 3. 外层循环循环一次， 里面的循环执行全部
        
        // 4. 代码验证
        
        for (var i = 1; i <= 3; i++) {
            console.log('这是外层循环第' + i + '次');
            for (var j = 1; j <= 3; j++) {
                console.log('这是里层的循环第' + j + '次');
            }
        }
```

题目1: 

```js
		// 打印五行五列星星
        var str = '';
        for (var i = 1; i <= 5; i++) { // 外层循环负责打印五行
            for (var j = 1; j <= 5; j++) { // 里层循环负责一行打印五个星星
                str = str + '★';
            }
            // 如果一行打印完毕5个星星就要另起一行 加 \n
            str = str + '\n';
        }
        console.log(str);
```

题目2: 

```js
	// 九九乘法表
   	// 一共有9行，但是每行的个数不一样，因此需要用到双重 for 循环
    // 外层的 for 循环控制行数 i ，循环9次 ，可以打印 9 行  
    // 内层的 for 循环控制每行公式  j  
    // 核心算法：每一行 公式的个数正好和行数一致， j <= i;
    // 每行打印完毕，都需要重新换一行
    var str = '';
    for (var i = 1; i <= 9; i++) { // 外层循环控制行数
        for (var j = 1; j <= i; j++) { // 里层循环控制每一行的个数  j <= i
            // 1 × 2 = 2
            // str = str + '★';
            str += j + '×' + i + '=' + i * j + ';';
        }
        str += '\n';
    }
    console.log(str);
```