## Date 对象的用法

### Date 对象的创建

**写法一**：表示的是当前代码执行的时间（也可以理解成是获取当前时间对象）

```javascript
var date1 = new Date();
console.log(date1);
```

**写法二**：在参数中传递一个表示时间的字符串（兼容性最强）

```javascript
var date2 = new Date("2017/09/06 09:00:00");
console.log(date2);
```

写法三：（不常用）

```javascript
var date3 = new Date("Wed Jan 27 2017 12:00:00 GMT+0800 (中国标准时间)");
console.log(date3);
```

写法四：（不常用）

```javascript
var date4 = new Date(2017, 1, 27); //写法四
console.log(date4);
```

以上四种写法的打印结果是：

![date.png](https://i.loli.net/2020/05/15/QGYeo1jFfzVDyS2.png)

### 获取日期和时间

Date 对象 有如下方法，可以获取日期和时间：

-   `getDate()` **获取日 1-31**

-   `getDay()` **获取星期 0-6**（0 代表周日，1 代表周一）

-   `getMonth()` **获取月 0-11**（0 代表一月）

-   `getFullYear()` 获取年份

-   `getHours()` 获取小时 0-23

-   `getMinutes()` 获取分钟 0-59

-   `getSeconds()` 获取秒 0-59

-   `getMilliseconds()` 获取毫秒 （1s = 1000ms）

代码举例：

```javascript
// 我在执行这行代码时，当前时间为 2019年2月4日，周一，13:23:52
var myDate = new Date();

console.log(myDate); // 打印结果：Mon Feb 04 2019 13:23:52 GMT+0800 (中国标准时间)
console.log(myDate.getDate()); // 打印结果：4
console.log(myDate.getDay()); // 打印结果：1
console.log(myDate.getMonth()); // 打印结果：1
console.log(myDate.getFullYear()); // 打印结果：2019
console.log(myDate.getHours()); // 打印结果：13
console.log(myDate.getMinutes()); // 打印结果：23
console.log(myDate.getSeconds()); // 打印结果：52
console.log(myDate.getMilliseconds()); // 打印结果：393

console.log(myDate.getTime()); // 获取时间戳。打印结果：1549257832393
```

### getTime()：获取时间戳

Date 对象 还有如下方法：

-   `getTime()` 获取当前日期对象的**时间戳**。这个方法在实际开发中，用得比较多。

啥叫时间戳？接下来，我们解释一下。

**时间戳**：指的是从格林威治标准时间的`1970年1月1日，0时0分0秒`到当前日期所花费的**毫秒数**（1 秒 = 1000 毫秒）。

计算机底层在保存时间时，使用的都是时间戳。时间戳的存在，就是为了**统一**时间的单位。

**利用时间戳检测代码的执行时间**：

我们可以在业务代码的前面定义 `时间戳1`，在业务代码的后面定义 `时间戳2`。把这两个时间戳相减，就能得出业务代码的执行时间。

## Math 对象的用法

| 方法              | 描述                                       | 备注  |
| :---------------- | :----------------------------------------- | :---- |
| Math.abs()        | **返回绝对值**                             |       |
| Math.floor()      | **向下取整**（向小取）                     |       |
| Math.ceil()       | **向上取整**（向大取）                     |       |
| Math.round()      | 四舍五入取整（正数四舍五入，负数五舍六入） |       |
| Math.random()     | 生成 0-1 之间的随机数                      | [0,1) |
| Math.max(x, y, z) | 返回多个数中的最大值                       |       |
| Math.min(x, y, z) | 返回多个数中的最小值                       |       |
| Math.pow(x,y)     | 返回 x 的 y 次幂                           |       |
| Math.sqrt()       | 对一个数进行开方运算                       |       |

Math 和其他的对象不同，它不是一个构造函数，不需要创建对象。

Math 属于一个工具类，里面封装了数学运算相关的属性和方法。

```javascript
// Math.ceil  天花板函数  ,向上取整
console.log(Math.ceil(2.3)); // 3
// 注意负数的使用
console.log(Math.ceil(-2.3)); // -2

// Math.floor()  地板函数  向下取整
console.log(Math.floor(2.9)); // 2

console.log(Math.max(2, 3, 5, 7)); // 7
console.log(Math.min(2, 3, 5, 7)); // 2

// random()  范围 [0,1)
console.log(Math.random());
// 随机 0-99 范围
console.log(Math.floor(Math.random() * 100));
// 随机 5-10 范围
// Math.floor(Math.random()*数量 + min)
console.log(Math.floor(Math.random() * 6 + 5));

console.log(Math.pow(3, 4));
console.log(Math.pow(3, 300000000000000000));

console.log(10 / 0); // Infinity

// Math.round()
console.log(Math.round(2.4)); // 2
console.log(Math.round(2.5)); // 3
console.log(Math.round(2.499999999999999999999999999)); // 3
console.log(2.999999999999999999999999999 === 3);
```