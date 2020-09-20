---
title: Button
sidebarDepth: 2
---

#按钮

使用方法

<button-demos></button-demos>


```javascript
<t-button icon="settings">按钮</t-button>
<t-button :loading="loading" @click="loading=!loading">按钮</t-button>
<t-button icon="settings" icon-position="right">按钮</t-button>
<t-button disabled>失效按钮</t-button>
```