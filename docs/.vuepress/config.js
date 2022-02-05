module.exports = {
    // 站点配置
    lang: "zh-CN",
    title: "前端的设计模式系列",
    description: "前端的设计模式系列 by windliang",

    // 主题和它的配置
    theme: "@qcyblm/vpx",
    themeConfig: {
        search: false,
        lastUpdated: "Last Updated",
        nav: [
            {
                text: "知乎",
                link: "https://www.zhihu.com/people/wang-liang-61-22",
            },
            {
                text: "极客时间优惠",
                link: "https://coursesub.top/",
            },
            { text: "leetcode详细题解", link: "https://leetcode.wang" },
            { text: "windliang博客", link: "https://windliang.wang" },
        ],
        sidebar: [
            {
                title: "结构型",
                collapsable: false, // 不折叠
                children: [
                    {
                        title: "代理模式",
                        path: "/posts/前端的设计模式系列-代理模式",
                    },
                    {
                        title: "装饰器模式",
                        path: "/posts/前端的设计模式系列-装饰器模式",
                    },
                ],
            },
            {
                title: "行为型",
                collapsable: false, // 不折叠
                children: [
                    {
                        title: "策略模式",
                        path: "/posts/前端的设计模式系列-策略模式",
                    },
                    {
                        title: "观察者模式",
                        path: "/posts/前端的设计模式系列-观察者模式",
                    },
                    {
                        title: "发布订阅模式",
                        path: "/posts/前端的设计模式系列-发布订阅模式",
                    },
                    {
                        title: "责任链模式",
                        path: "/posts/前端的设计模式系列-责任链模式",
                    },
                ],
            },
        ],
        footer: {
            // 页脚信息
            createYear: "2022", // 创建年份 (可选，author、authorLink 启动时必选)
            author: "windliang", // 作者 (可选)
            authorLink: "https://windliang.wang", // 作者链接 (可选)
            beianLink: "https://beian.miit.gov.cn/", // 备案链接 (可选)
            beian: "沪ICP备2021019937号-1", // ICP 备号
        },
        repo: {
            platform: 'https://github.com/',  // 填写 Git 服务商链接
            icon: 'fab fa-github',  // 填写 icon 图标 (可选)
            label: 'github',
            owner: 'wind-liang',  //  填写 Git 项目仓库所有者
            repositories: 'design-pattern',  // 填写 Git 项目仓库
        },
    },
};
