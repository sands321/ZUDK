let kmap_data=`
功能-分区->
1.非ctx/ctx
全局->
1.⌃+空(切-输入法),⌃+⇧+d(斗图),⌃+⇧+w(手写),⌃+⇧+e(符号-表情),⌘+⌃+空(字符-监视器),⌘+⌃+\\(搜狗-设置)
1.⌘+空(spotlight),⌥+空(终端),fn+空(finder),⌘+⌃+,(设置g),⌘+⌃+k(快捷键g)
  ⌘+⌃+w(微信),⌘+⌃+a(截屏),⌃+ml(右键)
2.⌘+⌃+1(subl),⌘+⌃+2(词霸),⌘+⌃+3(chrome),⌘+⌃+7(vscode),⌘+⌃+8(astudio),⌘+⌃+9(xcode)
  ⌘+⌃+t(任管g),⌘+⌃+s(脚编),⌘+⌃+d(sketch),⌘+⌃+x(emacs),⌘+⌃+i(idea)
  ⌘+⌃+h(测色计),⌘+⌃+c(typora)
1.⌘+⌃+p(睡眠),⌘+⌃+l(锁屏)
1.⌘+⌃+e(词霸+发音),⌘+⌃+0(最佳-尺寸),⌘+⌃+=(最大化),⌘+⌃+←(靠左),⌘+⌃+→(靠右)
1.⌘+tab(切-应用),⌘+⌥+空(搜-finder),⌘+⌃+↩(跑-iterm)
搜->
1.⌘+⇧+p(搜-动作),⌘+p(搜-文件),⌘+o(搜-类),⌘+⇧+o(搜-符号)
1.⌘+f(搜-内),⌘+g(下查)/⌘+⇧+g(下查),⌃+⌥+↑(前-亮),⌃+⌥+↓(后-亮)
  ⌘+⇧+f(路径内-搜),⌘+⇧+r(路径内-换)
2.⌘+r(替换),⌃+g(至-行)
航->
1.⌘+⌥+→(右-tab),⌘+⌥+←(左-tab),⌘+t(新-tab),⌘+n(新-窗口),⌘+q(退出)
  ⌘+1(最左-tab),⌘+\`(最右-tab)
  ⌃+⇧+→(右-子tab),⌃+⇧+←(左-子tab)
1.⌘+w(关-tab),⌘+⌥+w(关-其他tab)
1.⌘+[(上一步),⌘+](下一步),⌃+[(前现),⌃+](后现)
1.⌘+↓(至-底部),⌘+↑(至-顶部)
1.⌘+.(切-折叠),⌘+⇧+-(折-所有),⌘+⇧+=(展-所有),⌃+m(至-括号),⌃+n(至-fn首)
1.⌥+s(映-项目f)
窗口->
1.⌘+⇧+n(新-窗口)
1.⌘+h(隐藏),⌘+⌥+h(隐-其他),⌘+m(最小化),⌘+⌥+m(全-最小化),⌘+-(缩小),⌘+=(放大),⌘+0(原-尺寸)
1.⌘+⇧+w(关-窗口),⌘+⌃+f(全屏)
2.⌘+⇧+/(搜-帮助),⌥+tab(窗口s)
面板->
1.⌘+,(设置),⌘+⇧+k(快捷键)
2.⌘+1(隐-次窗),⌘+2(层次),⌘+3(结构),⌘+4(显-调试),⌘+5(日志/repl)
  ⌘+6(终端),⌘+⌥+6(新-终端),⌘+7(收藏),⌘+8(历史),⌘+9(拓展)
1.⌘+⇧+1(查-布局),⌘+⇧+3(快-结构)
1.⌘+⇧+e(项目),⌘+k(清-面板),⌘+=(展开-所有),⌘+-(折叠-所有)
1.⌃+t(任管)
文件->
1.⌘+o(打开-文件),⌃+⇧+o(打开-最近),⌘+s(保存),⌘+⇧+s(另存为),⌘+⌥+c(复制-全路径),⌘+⌥+r(至-finder)
1.⌘+⌥+d(新-目录),⌘+⌥+n(新-文件),⌘+del(删-文件)
1.⌘+⇧+.(切-隐f)
---
编辑->
1.⌘+c(复制),⌘+v(粘贴),⌘+x(剪切),⌘+a(选-所有)
1.⌘+d(复制-行),⌘+⇧+del(删-行),⌘+del(删-左侧),⌥+del(删-左词),⇧+tab(反-tab),⌃+tab(智能-tab)
  ⇧+↩(下-插行),⌃+⇧+↩(上-插行),⌘+l(选-行),⌘+←(至-行首),⌘+→(至-行末),⌥+←(至-左词),⌥+→(至-右词)
  ⌘+j(连-行)
1.⌘+⌥+l(格式化),⌘+⌥+o(优化-导入),⌘+/(单行-注释),⌘+⌥+/(多行-注释)
1.⌘+z(撤销),⌘+⇧+z(恢复),⌘+y(重做)
1.⌘+⇧+↓(下-全选),⌘+⇧+↑(上-全选),⌥+↓(下移-行),⌥+↑(上移-行),⌘+⌥+↓(下移-语句),⌘+⌥+↑(上移-语句)
1.⌘+i(扩-选区),⌘+⇧+i(缩-选区)
调试->
1.⌃+d(启动-调试),⌃+a(运行),⌃+s(停止),⌃+f(继续)
  ⌃+w(单步),⌃+e(跳入),⌃+r(跳出),⌃+c(至-光标),⌃+c(中断)
1.⌃+j(跑-配置),⌃+k(编辑-配置),⌃+l(eval),⌃+v(改-值)
1.⌃+b(断点s),⌃+x(行-断点),⌃+z(条件-断点),⌃+⇧+x(删-断点s),⌃+.(禁-断点),⌃+⇧+.(禁-断点s)
1.⌘+b(构建),⌥+d(调-ctx),⌥+r(跑-ctx),⌃+u(模拟器)
1.⌃+h(热载),⌃+⇧+h(热载-ac),⌃+y(附至)
辅助->
1.⌘+⇧+↩(补全-句),⌃+/(补全),⌃+'(片段),⌃+p(函数-参数),⌥+↩(快速-修复),⌘+⌥+t(围绕)
1.⌃+i(实现-方法),⌃+o(重写-方法)
1.⌃+1(查-用),⌃+⇧+1(f内-查用),⌃+2(重命名),⌃+7(切-收藏),⌃+0(显-单错),⌃+9(lint-f)
1.⌘+ml(至-定/用),⌘+mr(快-定),⌥+ml(至-类定),⌥+mr(快-类定),⌘+⌥+ml(快-doc)
1.⌥+1(至-定),⌥+⇧+2(快-定),⌥+2(至-类定),⌥+3(快-doc),⌃+↓(子-fn),⌃+↑(父-fn)
1.⌃+\\(反编)
重构->
1.⌘+⌥+v(提-变),⌘+⌥+p(提-参),⌘+⌥+⇧+p(提-函函参)
  ⌘+⌥+f(提-属性),⌘+⌥+g(提-常量),⌘+⌥+m(提-方),⌘+⌥+⇧+m(提-方,选)
---
Finder->
1.⌘+⌥+v(剪至),⌘+⇧+g(至-路径),⌘+↑(上层),⌃+i(合并-窗),⌃+o(独立-窗)
  ⌘+⇧+↑(f-上移),⌃+e(开-f)
浏览器->
1.⌘+l(至-地址),⌘+r(刷新),⌘+⇧+b(显隐-书签),⌘+⇧+del(清数据-页)
1.⌘+⌥+c(检查-元素),⌘+⌥+j(控制台),⌘+⌥+u(显-源码)
1.⌥+f(至-搜索框),⌥+c(拷-链接),⌥+⇧+c(拷-a文本/img),⌥+h(至-首页),⌥+↑(至-上层)
1.⌥+2(切-2倍速)
AcMon->
1.⌘+t(切-树/平)
VSCode->
1.⌃+=(存-ZUDL),⌃+-(删-ZUDL),⌃+0(输-ZUDL)
1.⌃+t(跑-任务),⌃+⇧+t(重跑-任务)
AStudio->
1.⌘+;(项目-配置),⌘+e(最近-fs)
1.⌥+2(切-码/设),⌥+3(显-码+设)
1.⌘+⌥+1(新-项目),⌘+⌥+2(新-ac),⌘+⌥+9(新-f,模),⌘+⌃+↑(相关-fs)
搜狗->
1.⌃+i(导入)
`.trim();
let km_1=`
wx->
1.⌃+](下1-红点),⌃+c(传输)
金山词霸->
1.⌥+f(至-搜索框),⌥+s(发音)
`.trim();

// word
let kmap_wd=`
快捷键->
1.⌃+k(查-快捷键),⌘+⌃+z(切换-绘图)
1.⌘+d(字体-窗),⌘+⌥+m(段-框)
样式->
1.⌘+⌃+v(选-粘),⌘+k(插-链接)
字符->
1.⌘+b(粗),⌘+i(斜),⌘+=(下标),⌘+⇧+=(上标)
  ⌘+u(下划线),⌘+⇧+w(下划线-除空),⌘+⇧+d(双下划线),⌘+⇧+x(删除线)
1.⌘+⇧+.(增-字号),⌘+⇧+,(减-字号),⌘+](增-1点),⌘+[(减-1点)
1.⇧+f3(切-case3),⌘+⇧+a(切-大写)
段->
1.⌘+l(段-居左),⌘+r(段-居右),⌘+e(段-居中),⌃+⇧+m(缩进-段),⌘+⇧+m(反缩-段)
1.⌘+1(单-行间),⌘+2(双-行间),⌘+5(1.5行-间),⌘+0(增删-段前空),⌘+⌥+k(自动-格式)
1.⌘+⇧+n(普通-样式),⌘+⌥+1(头1),⌘+⌥+2(头2),⌘+⌥+3(头3)
插->
1.⌘+↩(断-页),⇧+↩(断-行),⌘+⇧+↩(断-栏)
1.⌥+g(©),⌥+r(®),⌥+2(™),⌥+;(…)
表格->
1.⌘+⌃+i(上-插行),⌥+tab(插-tab)
域->
1.⌃+⇧+d(日期),⌃+⇧+t(时间,时分),⌘+⇧+l(无序-表),⌘+⌥+⇧+l(有序-表),⌃+⇧+p(页号)
1.f9(刷-域)
概述->
1.⌃+⇧+←(升-段),⌃+⇧+→(降-段),⌃+⇧+↑(上移-段),⌃+⇧+↓(下移-段)
其他->
1.⌃+⇧+a(插-评论),⌘+⇧+e(切-改追),⌘+⌥+f(插-脚注),⌘+⌥+e(插-尾注)
`.trim();

// kmap_data+='\n'+km_1;
// kmap_data=kmap_wd;

let kmap_data1=`
1.⌘+4(显-调试),⌘+5(ok)
`.trim();
// kmap_data=kmap_data1;







