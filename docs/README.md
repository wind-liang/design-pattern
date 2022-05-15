从 `1` 月 `6` 号的第一篇设计模式文章 [策略模式](https://pattern.windliang.wang/posts/%E5%89%8D%E7%AB%AF%E7%9A%84%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E7%B3%BB%E5%88%97-%E7%AD%96%E7%95%A5%E6%A8%A1%E5%BC%8F.html)，截止到 `3` 月 `8`  号的最后一篇 [基本原则](https://pattern.windliang.wang/posts/%E5%89%8D%E7%AB%AF%E7%9A%84%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F%E7%B3%BB%E5%88%97-%E5%9F%BA%E6%9C%AC%E5%8E%9F%E5%88%99.html)，利用两个月的时间把二十三个设计模式都过了一遍，其中在平时开发中用到的都结合实际场景总结了一遍。

之所以开始总结设计模式，还是每篇文章开头所说的：

代码也写了几年了，设计模式处于看了忘，忘了看的状态，最近对设计模式有了点感觉，索性就再学习总结下吧。

大部分讲设计模式的文章都是使用的 `Java`、`C++` 这样的以类为基础的静态类型语言，作为前端开发者，`js` 这门基于原型的动态语言，函数成为了一等公民，在实现一些设计模式上稍显不同，甚至简单到不像使用了设计模式，有时候也会产生些困惑。

设计模式最初的总结来自于 `GoF` 书，但书讲的比较晦涩，就不建议看了，`GoF` 名字的来源是：

> The authors of the [DesignPatternsBook (opens new window)](http://wiki.c2.com/?DesignPatternsBook)came to be known as the "Gang of Four." The name of the book ("Design Patterns: Elements of Reusable Object-Oriented Software") is too long for e-mail, so "book by the gang of four" became a shorthand name for it. After all, it isn't the ONLY book on patterns. That got shortened to "GOF book", which is pretty cryptic the first time you hear it.

大意就是本来的书名太长了，然后就简写为 `book by the gang of four` ，由四个作者共同写的，然后简写为 `GoF` 了，我们常说的「四人帮」设计模式。

总结过程中除了搜索出来的零星的文章，看的比较多的是下边几个：

* `Alloy Team` 曾探的「JavaScript 设计模式开发与实战」，第一章的基础知识将 `js` 有别于其他语言的特性讲的很好，其中设计模式的一些例子也是作者业务开发中实际应用的。

* 张容铭的「JavaScript 设计模式」，虽然每个设计模式都讲了，但很多场景是虚构出来的，只是起到理解设计模式的作用，如果要看的话推荐先看曾探的。

上边两本共同的缺点是作者的时代还是在 `jQuery` ，举的例子也都还是在操纵 `dom` ， `Vue`/`React` 的时代到来后，平常开发中我们已经不去操纵 `dom` 了，这也是我为什么又总结了一遍的原因之一。

* 极客时间王争的 [设计模式之美](http://gk.link/a/11c3G)，总结的很好，但遗憾的是更适合后端来看，很多场景也都是 `java` 开发中的场景。
* 一个 `Youtube` 帅哥总结的 [设计模式系列](https://www.youtube.com/watch?v=BWprw8UHIzA&list=PLZlA0Gpn_vH_CthENcPCM0Dww6a5XYC7f&index=2)，这个比较新了，都是结合 `ES6` 语法，缺点还是没有开发中的实际场景。
* 还有一个 [大而全的网站](https://refactoringguru.cn/design-patterns)， 各种语言都实现了，很多设计模式总结的也非常棒，配图丰富。

设计模式的话，在平常开发中，其实都会有意无意的用到过，只是没有专门总结出来。通过总结，当遇到类似场景的时候，我们就可以更快的编写，提升编程效率。

但设计模式最忌讳的就是过度设计了，但这个度又很难把握，可以结合 `KISS` 原则，我们先以简单、快速的方式实现需求，然后当后边需要修改的时候，贯彻「再一再二没有再三」的原则，再对原有的代码进行重构。

我们也没必要完全去套设计模式，而是去理解它们共同的思想，保持初心--提升代码的可读性、可扩展性、可维护性，最终达到「还记着没有，我现在全忘了，忘得干干净净的了」的境界。

<img src="https://windliangblog.oss-cn-beijing.aliyuncs.com/windliangblog.oss-cn-beijing.aliyuncs.comimage-20220310082243222.png" alt="image-20220310082243222" style="width:50%;" />

我们需要做的就是先有一定理论知识的储备，比如熟练掌握各种设计原则、思想、编码规范、设计模式，然后在平时开发、阅读源码过程中有代码质量意识、设计意识，慢慢的进行巩固、学习。

为了方便大家更好的阅读，我把之前总结的和没有总结的都放到了  [pattern.windliang.wang/](https://pattern.windliang.wang/)  网站和 [github](https://github.com/wind-liang/design-pattern) 上。

![image-20220310090250470](https://windliangblog.oss-cn-beijing.aliyuncs.com/windliangblog.oss-cn-beijing.aliyuncs.comimage-20220310090250470.png)

每个设计模式的原始定义其实很好理解，直接打开维基百科看看定义、看看代码十几分钟估计就能了解一个，最重要的地方在于实际开发场景中的到底有哪些例子。

这方面的话前端相关的例子很少很少，我自己的力量有限，非常欢迎大家在  [github](https://github.com/wind-liang/design-pattern/issues) 给我提 issues，把大家应用过或者见过的设计模式写一下，一起学习，一起进步！
