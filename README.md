# r
修复浏览器中 RPG 出现  
require is not defined  
Cannot find module 'fs'  
从而造成游戏不能运行的问题 (大误)  
代码贴到index.html 里 <script type="text/javascript" src="js/libs/pixi.js"></script> 上方
```html
    <body style="background-color: black">
        <script>
        if (typeof process !== 'object') {
            var require = new Proxy(function(){}, {
                get: function () { return require; },
                set: function () { return require; },
                apply: function () { return require },
                construct: function () { return require},
                has: function () { return !!1}
            });
        }
        </script>
        <script type="text/javascript" src="js/libs/pixi.js"></script>
```
或者
```html
    <body style="background-color: black">
        <script type="text/javascript" src="https://axutebils74.github.io/r/index.js"></script>
        <script type="text/javascript" src="js/libs/pixi.js"></script>
```
