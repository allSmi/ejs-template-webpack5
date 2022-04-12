尝试 只使用 ejs-loader 处理模版，图片使用 require 引入

ejs-loader 中使用下面

```js
<%- include('common/header') %>
// 修改为
<%= require('./common/header.ejs')() %>
```

```html
<img src="${require('./img/1.png')}" />
<!-- 或者是待验证 -->
<%= require('./img/1.png') %>
```

```js
{
  test: /\.ejs$/,
  loader: 'ejs-loader',
  options: {
    esModule: false
  }
},
```
