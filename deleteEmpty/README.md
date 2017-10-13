> 清除对象中的空值  

###### 以下值被认为是空值，将被删除:   
''(空字符串), ' '(无内容的字符串), null, [ ] (空数组), { } (空对象)  
###### 以下值不认为是空值:  
false, 0

> 使用  

```js
  npm install --save abel.delempty
```  
```js
  const removeEmpty = require('abel.delempty')
  let noEmptyResult = removeEmpty(target)
```
