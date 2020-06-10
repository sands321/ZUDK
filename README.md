# ZUDK

🖖 Unified Keymap, 用于统一设计快捷键，可视化查找快捷键！[DEMO](https://sands321.github.io/ZUDK/kmap.html)



## 解决问题

- 不同软件相同功能快捷键不同，如VSCode搜索命令的快捷键为⌘+⇧+P，IDEA中为⌘+⇧+A；VSCode中搜索文件命令为⌘+P，IDEA中为⌘+⇧+O。ZUDK可以辅助统一设计一套快捷键。
- 修改快捷键时，特别是快捷键比较多时，不易分析哪些快捷键能被使用。ZUDK可视化地展示键盘布局，所见即所得。
- 快捷键不易查找。ZUDK集中收藏所有快捷键，便于检索。



## 使用方法

1. 下载项目后，直接点开kmap.html即可看到效果。
2. 点击功能键或功能键组合，如'⌘+⇧'，显示其对应快捷键。
3. kmap.js中为快捷键数据，可根据自己的需求更改。



## 数据格式

1. 功能键：

   | 按键 | command | option | control | shift |
   | ---- | ------- | ------ | ------- | ----- |
   | 编码 | ⌘       | ⌥      | ⌃       | ⇧     |

2. 特殊按键：

   | 按键     | enter  | space    | delete   | 鼠标左键  | 鼠标右键 |
   | -------- | ------ | -------- | -------- | --------- | -------- |
   | 编码     | ↩      | sp       | del      | ml        | mr       |
   | **按键** | **up** | **down** | **left** | **right** |          |
   | 编码     | ↑      | ↓        | ←        | →         |          |

3. 快捷键间用半角逗号','分隔

4. 示例：

   ⌘+c(复制),⌘+⇧+w(关闭窗口)



## 相关文章

-  [【ZUDK】统一快捷键](https://zhuanlan.zhihu.com/p/146891931)



## 效果

![image](https://github.com/sands321/ZUDK/blob/master/screenshots/img1.png)

![image](https://github.com/sands321/ZUDK/blob/master/screenshots/img2.png)

![image](https://github.com/sands321/ZUDK/blob/master/screenshots/img3.png)

![image](https://github.com/sands321/ZUDK/blob/master/screenshots/img4.png)

![image](https://github.com/sands321/ZUDK/blob/master/screenshots/img5.png)

