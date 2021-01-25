# snowpackErr
+ there are some err on snowpack with form-render 

初始化项目
```
npm i
```
启动项目
```
npm run start
```
最小模块位置
/src/App.tsx
对于部分form的配置项模块，会导致错误
Uncaught Error: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: object.
Check the render method of ForwardRef(InternalSelect).
