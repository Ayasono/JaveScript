`switch` 语句可以替代多个 `if` 判断。

`switch` 语句为多分支选择的情况提供了一个更具描述性的方式。

## 语法

`switch` 语句有至少一个 `case` 代码块和一个可选的 `default` 代码块。

就像这样：

```javascript
switch(x) {
  case 'value1':  // if (x === 'value1')
    ...
    break

  case 'value2':  // if (x === 'value2')
    ...
    break

  default:
    ...
    break
}
```

- 比较 `x` 值与第一个 `case`（也就是 `value1`）是否严格相等，然后比较第二个 `case`（`value2`）以此类推。
- 如果相等，`switch` 语句就执行相应 `case` 下的代码块，直到遇到最靠近的 `break` 语句（或者直到 `switch`语句末尾）。
- 如果没有符合的 case，则执行 `default` 代码块（如果 `default` 存在）。

## 举个例子

`switch` 的例子（高亮的部分是执行的 `case` 部分）：

```javascript
var a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Too small' );
    break;
  case 4:
    alert( 'Exactly!' );
    break;
  case 5:
    alert( 'Too large' );
    break;
  default:
    alert( "I don't know such values" );
}
```

这里的 `switch` 从第一个 `case` 分支开始将 `a` 的值与 `case` 后的值进行比较，第一个 `case` 后的值为 `3` 匹配失败。

然后比较 `4`。匹配，所以从 `case 4` 开始执行直到遇到最近的 `break`。

**如果没有 `break`，程序将不经过任何检查就会继续执行下一个 `case`。**

无 `break` 的例子：

```javascript
var a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Too small' );
  case 4:
    alert( 'Exactly!' );
  case 5:
    alert( 'Too big' );
  default:
    alert( "I don't know such values" );
}
```

在上面的例子中我们会看到连续执行的三个 `alert`：

```javascript
alert( 'Exactly!' );
alert( 'Too big' );
alert( "I don't know such values" );
```

## 类型很关键

强调一下，这里的相等是严格相等。被比较的值必须是相同的类型才能进行匹配。

比如，我们来看下面的代码：

```javascript
var arg = prompt("Enter a value?")
switch (arg) {
  case '0':
  case '1':
    alert( 'One or zero' );
    break;

  case '2':
    alert( 'Two' );
    break;

  case 3:
    alert( 'Never executes!' );
    break;
  default:
    alert( 'An unknown value' )
}
```

1. 在 `prompt` 对话框输入 `0`、`1`，第一个 `alert` 弹出。
2. 输入 `2`，第二个 `alert` 弹出。
3. 但是输入 `3`，因为 `prompt` 的结果是字符串类型的 `"3"`，不严格相等 `===` 于数字类型的 `3`，所以 `case 3`不会执行！因此 `case 3` 部分是一段无效代码。所以会执行 `default` 分支。

## 任务

### 将 "switch" 结构重写为 "if" 结构

将下面 `switch` 结构的代码写成 `if..else` 结构：

```javascript
switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}
```

### 将 "if" 结构重写为 "switch" 结构

用 `switch` 重写以下代码：

```javascript
var a = +prompt('a?', '');

if (a == 0) {
  alert( 0 );
}
if (a == 1) {
  alert( 1 );
}

if (a == 2 || a == 3) {
  alert( '2,3' );
}
```