# number-running-chi

# 基于vue的滚动数字插件

## 当前版本：v1.0.1
```bash
优点：支持正数、小数、负数，任意三者间切换滚动；
只需要传入一个数字，会自动和上次入参数字对比滚
动，首次输入和0对比；使用简单，滚动顺畅，性能
超好，体验极佳！
```

## 安装
```bash
# 安装项目依赖包
npm install number-running-chi -S
```
## 使用
```bash
1.全局使用
    import VueRunningNumber from 'number-running-chi';//插件导入
    Vue.use(VueRunningNumber);//全局注册
    <VueRunningNumber
          :duration="2000"
          :is-split="true"
          :in-number="number"
          :width-scale="1"
          style="color: darkgreen;"></VueRunningNumber>
    
    
2.局部使用
    import VueRunningNumber from 'number-running-chi';//插件导入
    <VueRunningNumber
          :duration="2000"
          :is-split="true"
          :in-number="number"
          :width-scale="1"
          style="color: darkgreen;"></VueRunningNumber>
```

## 参数说明
```bash
in-number: 当前输入数字(type:Number, defalt: 0)
size: 数字尺寸(type:Number, defalt: 40)
duration: 滚动动画执行时间(type:Number, defalt: 2000)
width-scale: 数字宽度缩放比,主要用于调整数字间隙(type:Number, defalt: 1)
is-split: 是否使用逗号千位分割数字(type:Boolean, defalt: false)
```
