# Ionic 2 SystemJS Skeleton

基于此项目进行的修改 https://github.com/conclurer/ionic2-systemjs

此项目是[Ionic 2](https://github.com/driftyco/ionic) 的一个基本结构, 使用 [SystemJS Builder](https://github.com/systemjs/builder) 打包. SystemJS 用来做模块加载.

## 不同
与[ionic2 start](https://github.com/driftyco/ionic2-app-base) 不同的地方:
* 打包方式
* 依赖和程序代码分离
* 去除了不必要的编译过程
* 添加Karma测试

## 用法

首先安装 Ionic 2 和 cordova 以及其他相关工具:

```
npm install -g ionic@beta cordova typings typescript karma-cli
```

克隆此仓库，进入主目录

第一次使用：
```
npm install
gulp build #将依赖打包成一个文件,编译typescript代码等,比较耗费时间
```

开发时
```
ionic serve 
```

测试,可能需要配置一下环境变量参考[Karma官方文档](https://karma-runner.github.io/1.0/config/browsers.html)
```
gulp test
```

边修改边测试
```
gulp watch-test
```

如果修改代码之前忘记启动了ionic serve或者有时候watch失效，可以手动执行一下：
```
gulp compile # 修改了 scss html ts 文件
tsc # 只修改了typescript文件
```
##注意事项

新增依赖包后需要执行,因为这个比较耗时，不能让他经常执行
```
gulp build 
```
## License

MIT
