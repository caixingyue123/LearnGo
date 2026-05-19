const plans = [
  {
    day: 1,
    stage: "第 1 阶段：Go 基础语法",
    title: "环境搭建和 Hello World",
    goal: "安装 Go，理解 Go 程序入口，完成第一个可运行程序。",
    study: ["安装 Go", "配置 GOPATH、GOROOT、Go Modules 的基本概念", "使用 go version、go env、go run、go build", "理解 package main 和 func main()"],
    tasks: ["创建 day01-hello 目录", "写 main.go，输出 Hello, Go!", "使用 go run main.go 运行", "使用 go build 编译成可执行文件"],
    outputs: ["一个能运行的 Hello World 程序", "笔记：Go 程序为什么从 main 包的 main 函数开始执行？"]
  },
  {
    day: 2,
    stage: "第 1 阶段：Go 基础语法",
    title: "变量、常量和基础类型",
    goal: "掌握变量声明、基础类型、零值和显式类型转换。",
    study: ["var、const、短变量声明 :=", "int、float64、bool、string", "零值概念", "类型转换"],
    tasks: ["写一个个人信息打印程序", "定义姓名、年龄、身高、是否在学习 Go", "尝试把数字转换成字符串并打印"],
    outputs: ["day02-basic-types/main.go", "笔记：Go 为什么不允许隐式类型转换？"]
  },
  {
    day: 3,
    stage: "第 1 阶段：Go 基础语法",
    title: "条件、循环和 switch",
    goal: "掌握分支、循环和基础流程控制。",
    study: ["if、else if、else", "for 的三种写法", "switch 的基础用法", "break、continue"],
    tasks: ["写一个成绩评级程序", "输入分数，输出 A、B、C、D", "写一个 1-100 求和程序"],
    outputs: ["day03-control-flow/main.go", "demo：成绩评级器"]
  },
  {
    day: 4,
    stage: "第 1 阶段：Go 基础语法",
    title: "数组、切片和 map",
    goal: "掌握 Go 最常用的数据容器。",
    study: ["数组和切片的区别", "append、len、cap", "切片底层数组的基本理解", "map 的增删改查"],
    tasks: ["用切片保存多个学生成绩，计算平均分、最高分、最低分", "用 map[string]int 保存学生姓名和成绩"],
    outputs: ["day04-slice-map/main.go", "demo：学生成绩统计器"]
  },
  {
    day: 5,
    stage: "第 1 阶段：Go 基础语法",
    title: "函数基础",
    goal: "掌握函数拆分，让代码从一坨 main.go 变成可复用逻辑。",
    study: ["函数定义", "多返回值", "命名返回值", "可变参数", "匿名函数"],
    tasks: ["把 Day 4 的成绩统计器拆成多个函数", "实现 sum、avg、max、min 函数"],
    outputs: ["day05-functions/main.go", "笔记：Go 多返回值适合解决什么问题？"]
  },
  {
    day: 6,
    stage: "第 1 阶段：Go 基础语法",
    title: "指针入门",
    goal: "理解地址、指针和值传递之间的关系。",
    study: ["什么是内存地址", "& 和 *", "值传递和指针传递", "指针的常见使用场景"],
    tasks: ["写一个函数修改用户年龄", "分别用值传递和指针传递实现，对比结果"],
    outputs: ["day06-pointers/main.go", "笔记：什么时候应该传指针？"]
  },
  {
    day: 7,
    stage: "第 1 阶段：Go 基础语法",
    title: "第一个小项目：命令行计算器",
    goal: "综合前 6 天内容，完成一个能接收命令行参数的小工具。",
    study: ["复习 Day 1-6", "命令行参数 os.Args", "字符串转数字 strconv.Atoi"],
    tasks: ["实现一个命令行计算器", "支持加、减、乘、除", "示例：go run main.go add 3 5 输出 8", "处理参数不足、非法数字、除数为 0"],
    outputs: ["demos/cli-calculator/main.go", "demo：命令行计算器"]
  },
  {
    day: 8,
    stage: "第 2 阶段：结构体、接口和错误处理",
    title: "结构体 struct",
    goal: "学会用结构体表达真实业务对象。",
    study: ["定义结构体", "创建结构体实例", "结构体字段访问", "结构体指针", "匿名结构体"],
    tasks: ["定义 User、Article 两个结构体", "写函数打印用户信息和文章信息"],
    outputs: ["day08-struct/main.go", "笔记：结构体和 map 存数据有什么区别？"]
  },
  {
    day: 9,
    stage: "第 2 阶段：结构体、接口和错误处理",
    title: "方法 method",
    goal: "给结构体绑定行为，理解值接收者和指针接收者。",
    study: ["方法和函数的区别", "值接收者和指针接收者", "给结构体绑定行为"],
    tasks: ["给 User 添加 ChangeName、GrowUp 方法", "用值接收者和指针接收者分别实现，观察区别"],
    outputs: ["day09-method/main.go"]
  },
  {
    day: 10,
    stage: "第 2 阶段：结构体、接口和错误处理",
    title: "接口 interface",
    goal: "理解 Go 接口的隐式实现和抽象能力。",
    study: ["接口是什么", "隐式实现接口", "空接口 any", "类型断言", "类型选择 type switch"],
    tasks: ["定义 Notifier 接口", "实现 EmailNotifier 和 SMSNotifier", "写一个函数接收 Notifier 并发送通知"],
    outputs: ["day10-interface/main.go", "笔记：Go 的接口为什么叫隐式实现？"]
  },
  {
    day: 11,
    stage: "第 2 阶段：结构体、接口和错误处理",
    title: "错误处理 error",
    goal: "用 Go 的显式错误处理写出可维护代码。",
    study: ["error 类型", "errors.New", "fmt.Errorf", "错误包装 %w", "errors.Is、errors.As"],
    tasks: ["改造命令行计算器", "输入非法参数时返回明确错误", "练习错误向上返回"],
    outputs: ["day11-error/main.go", "demo：带错误处理的计算器"]
  },
  {
    day: 12,
    stage: "第 2 阶段：结构体、接口和错误处理",
    title: "包、模块和项目拆分",
    goal: "理解 Go Modules 和基本项目拆分方式。",
    study: ["go mod init", "go mod tidy", "包名和目录名", "导出标识符首字母大写", "internal 目录的作用"],
    tasks: ["把计算器拆成 main 包和 calculator 包", "calculator 包只负责计算逻辑", "main 包只负责读取参数和打印结果"],
    outputs: ["day12-module/", "笔记：为什么业务逻辑不应该全部写在 main.go？"]
  },
  {
    day: 13,
    stage: "第 2 阶段：结构体、接口和错误处理",
    title: "泛型入门",
    goal: "掌握泛型函数和基础类型约束。",
    study: ["泛型函数", "类型参数", "类型约束", "comparable"],
    tasks: ["写一个泛型函数 Contains，判断切片中是否包含某个元素", "写一个泛型函数 Max，支持整数和浮点数"],
    outputs: ["day13-generics/main.go"]
  },
  {
    day: 14,
    stage: "第 2 阶段：结构体、接口和错误处理",
    title: "第二个小项目：内存版 Todo",
    goal: "综合结构体、方法、接口、错误处理做一个小项目。",
    study: ["综合结构体、方法、接口、错误处理", "简单分层思想"],
    tasks: ["实现一个内存版 Todo 管理器", "支持新增、完成、删除、列表展示", "Todo 字段包括：ID、标题、是否完成、创建时间"],
    outputs: ["demos/memory-todo/", "demo：内存版 Todo"]
  },
  {
    day: 15,
    stage: "第 3 阶段：文件、测试、并发和网络基础",
    title: "文件读写和 JSON",
    goal: "把内存数据保存到文件，理解 JSON 序列化。",
    study: ["os.ReadFile、os.WriteFile", "encoding/json", "结构体 tag：json:\"name\"", "JSON 序列化和反序列化"],
    tasks: ["把 Day 14 的 Todo 保存到 JSON 文件", "程序启动时从 JSON 文件读取"],
    outputs: ["demos/file-todo/", "demo：文件版 Todo"]
  },
  {
    day: 16,
    stage: "第 3 阶段：文件、测试、并发和网络基础",
    title: "时间、字符串和常用标准库",
    goal: "熟悉后端开发中常用标准库。",
    study: ["time", "strings", "strconv", "sort", "math/rand"],
    tasks: ["给 Todo 增加按创建时间排序", "增加按关键词搜索", "生成随机验证码"],
    outputs: ["day16-stdlib/main.go"]
  },
  {
    day: 17,
    stage: "第 3 阶段：文件、测试、并发和网络基础",
    title: "单元测试",
    goal: "学会用测试保护核心逻辑。",
    study: ["testing 包", "测试文件命名：xxx_test.go", "go test", "表格驱动测试"],
    tasks: ["给计算器写单元测试", "给 Todo 的新增、删除、完成写单元测试"],
    outputs: ["day17-testing/", "至少 5 个测试用例"]
  },
  {
    day: 18,
    stage: "第 3 阶段：文件、测试、并发和网络基础",
    title: "并发 goroutine",
    goal: "理解 goroutine 和 WaitGroup 的基本用法。",
    study: ["并发和并行的区别", "go func()", "sync.WaitGroup", "常见并发错误"],
    tasks: ["写一个并发下载模拟器", "同时启动 5 个任务，每个任务 sleep 随机时间后完成"],
    outputs: ["day18-goroutine/main.go", "笔记：主协程退出后，其他 goroutine 会怎样？"]
  },
  {
    day: 19,
    stage: "第 3 阶段：文件、测试、并发和网络基础",
    title: "channel",
    goal: "用 channel 在 goroutine 之间传递数据。",
    study: ["channel 基础", "无缓冲和有缓冲 channel", "for range 读取 channel", "close(channel)", "select"],
    tasks: ["实现生产者消费者模型", "一个生产者生成数字，三个消费者处理数字"],
    outputs: ["day19-channel/main.go"]
  },
  {
    day: 20,
    stage: "第 3 阶段：文件、测试、并发和网络基础",
    title: "context 和并发控制",
    goal: "掌握超时、取消和 goroutine 生命周期控制。",
    study: ["context.Context", "context.WithCancel", "context.WithTimeout", "超时控制", "goroutine 泄漏概念"],
    tasks: ["写一个模拟接口请求的函数", "如果 2 秒内没有完成，就取消任务"],
    outputs: ["day20-context/main.go", "笔记：为什么后端服务里经常要传 context？"]
  },
  {
    day: 21,
    stage: "第 4 阶段：Web 开发基础",
    title: "HTTP 基础",
    goal: "理解 HTTP 请求响应，并写出第一个 Web 服务。",
    study: ["HTTP 请求和响应", "GET、POST、PUT、DELETE", "状态码", "Header、Body、Query、Path", "Go 标准库 net/http"],
    tasks: ["用标准库写一个 HTTP 服务", "提供 /ping 接口，返回 pong", "提供 /hello?name=xxx 接口"],
    outputs: ["day21-http/main.go"]
  },
  {
    day: 22,
    stage: "第 4 阶段：Web 开发基础",
    title: "RESTful API 设计",
    goal: "用资源视角设计 API。",
    study: ["RESTful 风格", "资源、路径、方法", "JSON 请求和响应", "API 错误格式"],
    tasks: ["用标准库写 Todo API", "支持创建 Todo、查询 Todo 列表、查询单个 Todo"],
    outputs: ["day22-rest-api/"]
  },
  {
    day: 23,
    stage: "第 4 阶段：Web 开发基础",
    title: "Gin 框架入门",
    goal: "用 Gin 快速开发 RESTful API。",
    study: ["Gin 安装和基本使用", "路由", "参数绑定", "JSON 返回"],
    tasks: ["用 Gin 重写 /ping 和 /hello", "用 Gin 重写 Todo API"],
    outputs: ["day23-gin-basic/"]
  },
  {
    day: 24,
    stage: "第 4 阶段：Web 开发基础",
    title: "中间件 middleware",
    goal: "理解请求进入业务逻辑前后的统一处理机制。",
    study: ["Gin 中间件", "请求日志", "panic 恢复", "简单鉴权中间件"],
    tasks: ["写一个日志中间件，打印请求方法、路径、耗时", "写一个简单 token 中间件"],
    outputs: ["day24-middleware/"]
  },
  {
    day: 25,
    stage: "第 4 阶段：Web 开发基础",
    title: "参数校验和统一响应",
    goal: "让接口返回格式稳定，错误更清楚。",
    study: ["请求参数绑定", "validator", "统一响应结构", "统一错误处理"],
    tasks: ["给 Todo 创建接口增加参数校验", "标题不能为空，长度不能超过 100", "封装成功响应和失败响应"],
    outputs: ["day25-validation-response/"]
  },
  {
    day: 26,
    stage: "第 4 阶段：Web 开发基础",
    title: "日志、配置和分层",
    goal: "把 Web 项目拆成 handler、service、repository 三层。",
    study: ["配置文件", "环境变量", "日志级别", "handler、service、repository 分层"],
    tasks: ["把 Todo API 拆成 handler、service、repository 三层", "增加配置文件 config.yaml"],
    outputs: ["day26-layered-api/"]
  },
  {
    day: 27,
    stage: "第 4 阶段：Web 开发基础",
    title: "第三个小项目：内存版博客 API",
    goal: "综合 Gin、路由、中间件、分层和统一响应。",
    study: ["综合 Gin、路由、中间件、分层、统一响应"],
    tasks: ["实现博客 API", "支持文章创建、文章列表、文章详情、文章更新、文章删除", "文章字段包括：ID、标题、内容、作者、创建时间、更新时间"],
    outputs: ["demos/memory-blog-api/", "demo：内存版博客 API"]
  },
  {
    day: 28,
    stage: "第 5 阶段：MySQL、Redis 和鉴权",
    title: "MySQL 基础",
    goal: "理解关系型数据库和基础 SQL。",
    study: ["数据库、表、行、列", "主键、索引、唯一约束", "SQL 基础：insert、select、update、delete", "Docker 启动 MySQL"],
    tasks: ["创建 users 表和 articles 表", "手写 SQL 完成增删改查"],
    outputs: ["day28-mysql-basic/sql/init.sql", "笔记：数据库主键有什么用？"]
  },
  {
    day: 29,
    stage: "第 5 阶段：MySQL、Redis 和鉴权",
    title: "Go 连接 MySQL",
    goal: "用 Go 操作 MySQL，理解连接池和 SQL 注入风险。",
    study: ["database/sql", "MySQL driver", "连接池", "Query、QueryRow、Exec", "SQL 注入基础"],
    tasks: ["用 Go 连接 MySQL", "实现用户新增、查询列表、根据 ID 查询"],
    outputs: ["day29-go-mysql/"]
  },
  {
    day: 30,
    stage: "第 5 阶段：MySQL、Redis 和鉴权",
    title: "GORM 入门",
    goal: "用 ORM 管理模型和 CRUD。",
    study: ["ORM 是什么", "GORM 模型定义", "自动迁移", "CRUD", "CreatedAt、UpdatedAt、软删除"],
    tasks: ["用 GORM 重写用户 CRUD", "定义 User 和 Article 模型"],
    outputs: ["day30-gorm-basic/"]
  },
  {
    day: 31,
    stage: "第 5 阶段：MySQL、Redis 和鉴权",
    title: "数据库设计和分页查询",
    goal: "处理真实接口常见的关系、分页、排序和搜索。",
    study: ["一对多关系", "外键概念", "分页查询", "排序", "模糊搜索"],
    tasks: ["设计用户和文章关系", "实现文章分页列表", "支持按标题关键词搜索"],
    outputs: ["day31-pagination-search/"]
  },
  {
    day: 32,
    stage: "第 5 阶段：MySQL、Redis 和鉴权",
    title: "Redis 基础",
    goal: "掌握 Redis 常见数据类型和后端使用场景。",
    study: ["Redis 是什么", "string、hash、list、set、zset", "过期时间", "Docker 启动 Redis", "缓存、验证码、限流、排行榜"],
    tasks: ["用 redis-cli 练习常用命令", "写 Go 程序连接 Redis", "实现验证码存储，设置 5 分钟过期"],
    outputs: ["day32-redis-basic/"]
  },
  {
    day: 33,
    stage: "第 5 阶段：MySQL、Redis 和鉴权",
    title: "缓存和缓存一致性入门",
    goal: "给接口加缓存，并理解常见缓存问题。",
    study: ["缓存读取流程", "缓存穿透、缓存击穿、缓存雪崩", "删除缓存和更新数据库的顺序问题"],
    tasks: ["给文章详情接口增加 Redis 缓存", "查询文章时先查 Redis，未命中再查 MySQL", "更新文章后删除对应缓存"],
    outputs: ["day33-redis-cache/"]
  },
  {
    day: 34,
    stage: "第 5 阶段：MySQL、Redis 和鉴权",
    title: "登录注册和 JWT",
    goal: "实现后端项目最常见的登录态和接口鉴权。",
    study: ["密码哈希", "bcrypt", "JWT 结构", "登录态", "鉴权中间件"],
    tasks: ["实现用户注册", "实现用户登录", "登录成功返回 JWT", "需要登录才能创建、修改、删除文章"],
    outputs: ["day34-auth-jwt/"]
  },
  {
    day: 35,
    stage: "第 6 阶段：完整项目和工程化",
    title: "完整项目启动：任务管理系统",
    goal: "启动最终项目 TaskFlow API，确定功能、结构和接口草稿。",
    study: ["用户注册、登录", "JWT 鉴权", "项目空间 Project", "任务 Task", "评论 Comment", "MySQL 持久化", "Redis 缓存和限流", "Docker Compose 一键启动"],
    tasks: ["创建 final-project", "初始化 Go Module", "设计基础目录结构", "写项目 README 草稿", "设计接口列表"],
    outputs: ["final-project/README.md", "final-project/docs/api.md"]
  },
  {
    day: 36,
    stage: "第 6 阶段：完整项目和工程化",
    title: "项目数据库设计",
    goal: "设计最终项目的核心数据表和 GORM 模型。",
    study: ["表设计", "字段类型", "索引设计", "唯一约束", "逻辑删除"],
    tasks: ["设计 users、projects、project_members、tasks、comments 表", "写初始化 SQL", "用 GORM model 表达这些表"],
    outputs: ["final-project/internal/model/", "final-project/scripts/init.sql"]
  },
  {
    day: 37,
    stage: "第 6 阶段：完整项目和工程化",
    title: "项目配置、日志和启动",
    goal: "让最终项目具备可配置、可启动的基础框架。",
    study: ["配置加载", "日志初始化", "数据库初始化", "Redis 初始化", "服务优雅启动"],
    tasks: ["增加 config.yaml", "增加配置读取逻辑", "初始化 MySQL 和 Redis", "启动 Gin 服务"],
    outputs: ["final-project/configs/config.yaml", "/ping 接口可访问"]
  },
  {
    day: 38,
    stage: "第 6 阶段：完整项目和工程化",
    title: "用户注册和登录",
    goal: "完成最终项目用户模块的核心接口。",
    study: ["用户模块分层", "密码加密", "JWT 生成", "参数校验"],
    tasks: ["实现注册接口", "实现登录接口", "实现获取当前用户信息接口"],
    outputs: ["POST /api/v1/auth/register", "POST /api/v1/auth/login", "GET /api/v1/users/me"]
  },
  {
    day: 39,
    stage: "第 6 阶段：完整项目和工程化",
    title: "项目 Project 模块",
    goal: "实现项目空间和成员关系。",
    study: ["业务权限", "用户和项目的关系", "repository 查询封装"],
    tasks: ["创建项目", "查询我的项目列表", "查询项目详情", "邀请成员加入项目"],
    outputs: ["Project 模块完整 CRUD 中的创建和查询功能"]
  },
  {
    day: 40,
    stage: "第 6 阶段：完整项目和工程化",
    title: "任务 Task 模块",
    goal: "实现最终项目的核心业务实体。",
    study: ["核心业务建模", "状态机入门", "分页查询"],
    tasks: ["创建任务", "查询任务列表", "查询任务详情", "修改任务状态：todo、doing、done", "按状态筛选任务"],
    outputs: ["Task 模块主要接口"]
  },
  {
    day: 41,
    stage: "第 6 阶段：完整项目和工程化",
    title: "评论 Comment 模块和权限补强",
    goal: "补充子资源接口，并强化项目成员权限。",
    study: ["子资源接口设计", "权限校验", "常见业务错误处理"],
    tasks: ["给任务添加评论", "查询任务评论列表", "只有项目成员能查看任务和评论", "只有任务创建者或项目管理员能删除任务"],
    outputs: ["Comment 模块接口", "权限校验逻辑"]
  },
  {
    day: 42,
    stage: "第 6 阶段：完整项目和工程化",
    title: "Redis 缓存和限流",
    goal: "给最终项目加入缓存和基础限流能力。",
    study: ["热点数据缓存", "接口限流", "Redis key 设计"],
    tasks: ["给项目详情或任务详情增加缓存", "登录接口增加简单 IP 限流", "设计 Redis key 命名规范"],
    outputs: ["Redis 缓存逻辑", "登录限流中间件"]
  },
  {
    day: 43,
    stage: "第 6 阶段：完整项目和工程化",
    title: "测试和接口文档",
    goal: "给核心功能补测试，并整理接口文档。",
    study: ["单元测试", "service 层测试", "接口文档", "curl 示例"],
    tasks: ["给用户注册、登录、任务创建写测试", "整理接口文档", "给每个核心接口写 curl 示例"],
    outputs: ["final-project/docs/api.md", "至少 6 个测试用例"]
  },
  {
    day: 44,
    stage: "第 6 阶段：完整项目和工程化",
    title: "Docker Compose 和部署入门",
    goal: "把 Go、MySQL、Redis 串成可一键启动的项目。",
    study: ["Dockerfile", "Docker Compose", "服务依赖", "环境变量"],
    tasks: ["写 Go 服务 Dockerfile", "写 docker-compose.yaml，包含 Go API 服务、MySQL、Redis", "一条命令启动整个项目"],
    outputs: ["final-project/Dockerfile", "final-project/docker-compose.yaml"]
  },
  {
    day: 45,
    stage: "第 6 阶段：完整项目和工程化",
    title: "项目收尾和复盘",
    goal: "完成项目文档和复盘，让项目能展示、能运行、能讲清楚。",
    study: ["项目复盘", "README 编写", "后端项目面试表达"],
    tasks: ["完善最终项目 README", "写清楚项目功能、技术栈、启动方式、接口示例", "整理你遇到的 10 个问题和解决方法", "给项目打一个 Git tag：v0.1.0"],
    outputs: ["一个完整可运行的 Go 后端项目", "一份清晰的项目 README", "一份个人复盘文档"]
  }
];

const quotes = [
  "今天不用变成高手，只要比昨天多理解一个概念。",
  "基础语法不是小事，它决定你以后写项目时能不能稳。",
  "报错不是失败，报错是编译器在告诉你下一步该看哪里。",
  "真正掌握切片和 map，后面的业务代码会轻松很多。",
  "函数拆得清楚，思路也会跟着清楚。",
  "指针难在第一次理解，一旦理解，它就是很朴素的地址传递。",
  "第一个小工具跑起来，比看十遍语法更有用。",
  "结构体是在代码里给现实世界建模型。",
  "方法让数据和行为站在一起，代码会更像业务本身。",
  "接口不是为了炫技，是为了让变化少影响稳定代码。",
  "错误处理写得认真，线上问题就少一半。",
  "项目拆分的意义，是让明天的自己还能看懂今天的代码。",
  "泛型先学会用在小地方，不急着到处抽象。",
  "小项目是最好的复习，它会暴露你真正没掌握的地方。",
  "数据能保存下来，程序才开始有真实产品的样子。",
  "标准库是 Go 的基本功，多翻文档会越来越快。",
  "测试不是额外负担，它是你敢改代码的底气。",
  "并发不是同时乱跑，而是有秩序地把任务拆开做。",
  "channel 的核心是沟通，不是魔法。",
  "会取消任务的程序，比只会启动任务的程序更接近真实后端。",
  "HTTP 是后端和世界说话的方式。",
  "好接口的路径和返回值，别人一看就知道怎么用。",
  "框架是工具，先理解请求怎么流动。",
  "中间件适合处理所有请求都要经历的事情。",
  "统一响应不是形式主义，它会让调试和前后端协作更顺。",
  "分层不是为了复杂，是为了每层只做自己的事。",
  "能写出完整 CRUD，就已经跨过了后端入门的关键门槛。",
  "SQL 基础越扎实，ORM 用起来越不容易踩坑。",
  "数据库连接、参数传递、错误处理，是后端的日常基本功。",
  "ORM 提高效率，但不要忘了它最终还是在生成 SQL。",
  "分页和搜索看似简单，却是大多数列表接口的核心。",
  "Redis 快，是因为它适合放对的数据。",
  "缓存不是万能药，失效策略才是关键。",
  "登录鉴权做对了，项目才有真实用户系统的骨架。",
  "最终项目从今天开始，不求一次完美，先让骨架跑起来。",
  "表设计是业务理解的镜子，字段不是随便加的。",
  "配置、日志、启动流程，是项目能交给别人运行的基础。",
  "注册登录写完整，你就拥有了多数后端项目的入口能力。",
  "权限逻辑越早理清，后面返工越少。",
  "任务模块是业务核心，先保证状态流转正确。",
  "评论和权限会让项目更接近真实团队协作场景。",
  "缓存和限流是在保护系统，也是在保护用户体验。",
  "文档和测试会让你的项目从能跑变成可信。",
  "能一键启动的项目，才是真正容易交付的项目。",
  "复盘会把 45 天的代码，变成你真正能讲清楚的能力。"
];

const storageKey = "learn-go-45-day-progress";
const courseStartDate = new Date(2026, 4, 19);
const progressPanel = document.querySelector("#progressPanel");
const overviewModal = document.querySelector("#overviewModal");
const closeOverview = document.querySelector("#closeOverview");
const overviewGrid = document.querySelector("#overviewGrid");
const overviewCount = document.querySelector("#overviewCount");
const overviewPercent = document.querySelector("#overviewPercent");
const doneCount = document.querySelector("#doneCount");
const progressBar = document.querySelector("#progressBar");
const progressText = document.querySelector("#progressText");
const stageLabel = document.querySelector("#stageLabel");
const dayTitle = document.querySelector("#dayTitle");
const dayGoal = document.querySelector("#dayGoal");
const statusBadge = document.querySelector("#statusBadge");
const studyList = document.querySelector("#studyList");
const taskList = document.querySelector("#taskList");
const outputList = document.querySelector("#outputList");
const quoteText = document.querySelector("#quoteText");
const newsPanel = document.querySelector("#newsPanel");
const newsHint = document.querySelector("#newsHint");
const newsList = document.querySelector("#newsList");
const refreshNews = document.querySelector("#refreshNews");
const noteInput = document.querySelector("#noteInput");
const saveState = document.querySelector("#saveState");
const completeButton = document.querySelector("#completeButton");
const prevDayButton = document.querySelector("#prevDayButton");
const nextDayButton = document.querySelector("#nextDayButton");

let progress = loadProgress();
let selectedDay = getRecommendedDay();
let saveTimer;
let newsCache = {};

function readStorage(key) {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeStorage(key, value) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    saveState.textContent = "当前浏览器不支持本地保存";
  }
}

function loadProgress() {
  const raw = readStorage(storageKey);
  if (!raw) {
    return {};
  }

  try {
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

function saveProgress() {
  writeStorage(storageKey, JSON.stringify(progress));
}

function getDayState(day) {
  return progress[day] || { status: "pending", note: "" };
}

function setDayState(day, nextState) {
  progress[day] = { ...getDayState(day), ...nextState };
  saveProgress();
}

function getPlan(day) {
  return plans.find((item) => item.day === day);
}

function areAllTasksDone(day) {
  const plan = getPlan(day);
  const checkedTasks = getDayState(day).tasks || {};
  return Boolean(plan && plan.tasks.length > 0 && plan.tasks.every((_, index) => checkedTasks[index]));
}

function getComputedStatus(day) {
  return areAllTasksDone(day) ? "done" : "pending";
}

function getCurrentStudyDay() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const start = new Date(courseStartDate);
  start.setHours(0, 0, 0, 0);
  const diffDays = Math.floor((today - start) / 86400000);
  return Math.min(Math.max(diffDays + 1, 1), plans.length);
}

function getRecommendedDay() {
  const firstUnfinished = plans.find((plan) => getComputedStatus(plan.day) !== "done");
  if (firstUnfinished) {
    return firstUnfinished.day;
  }
  return plans.length;
}

function syncDayStatus(day) {
  const nextStatus = getComputedStatus(day);
  if (getDayState(day).status !== nextStatus) {
    setDayState(day, { status: nextStatus });
  }
  return nextStatus;
}

function getNewsQuery(plan) {
  const base = ["golang", "backend"];
  if (plan.day >= 21) {
    base.push("api");
  }
  if (plan.day >= 28) {
    base.push("database");
  }
  if (plan.day >= 32) {
    base.push("redis");
  }
  if (plan.day >= 35) {
    base.push("docker");
  }
  return base.join(" ");
}

function getYesterdayRange() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);
  return {
    end: Math.floor(today.getTime() / 1000),
    label: yesterday.toLocaleDateString("zh-CN"),
    start: Math.floor(yesterday.getTime() / 1000)
  };
}

function renderList(element, items) {
  element.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    element.appendChild(li);
  });
}

function renderTaskChecklist(element, items) {
  const state = getDayState(selectedDay);
  const checkedTasks = state.tasks || {};
  element.innerHTML = "";
  element.classList.add("check-list");

  items.forEach((item, index) => {
    const li = document.createElement("li");
    const label = document.createElement("label");
    label.className = "check-item";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = Boolean(checkedTasks[index]);
    checkbox.addEventListener("change", () => {
      const nextTasks = { ...getDayState(selectedDay).tasks, [index]: checkbox.checked };
      const wasDone = getComputedStatus(selectedDay) === "done";
      setDayState(selectedDay, { tasks: nextTasks });
      const nextStatus = syncDayStatus(selectedDay);
      li.classList.toggle("is-checked", checkbox.checked);
      renderStatusBadge(nextStatus);
      renderStats();
      renderOverview();
      if (!wasDone && nextStatus === "done") {
        celebrateCompletion();
      }
    });

    const text = document.createElement("span");
    text.textContent = item;

    li.classList.toggle("is-checked", checkbox.checked);
    label.appendChild(checkbox);
    label.appendChild(text);
    li.appendChild(label);
    element.appendChild(li);
  });
}

function renderStatusBadge(status) {
  statusBadge.className = "status-badge";
  if (status === "done") {
    statusBadge.textContent = "已完成";
    statusBadge.classList.add("done");
  } else {
    statusBadge.textContent = "未完成";
    statusBadge.classList.add("pending");
  }
}

function renderDetail() {
  const plan = getPlan(selectedDay);
  const state = getDayState(selectedDay);
  const status = syncDayStatus(selectedDay);

  stageLabel.textContent = plan.stage;
  dayTitle.textContent = `Day ${plan.day}：${plan.title}`;
  dayGoal.textContent = plan.goal;
  quoteText.textContent = quotes[plan.day - 1];
  noteInput.value = state.note || "";

  renderList(studyList, plan.study);
  renderTaskChecklist(taskList, plan.tasks);
  renderList(outputList, plan.outputs);

  renderStatusBadge(status);
  renderNextDayButton();

  renderNews(plan);
}

function renderNextDayButton() {
  if (selectedDay >= plans.length) {
    nextDayButton.textContent = "后一天";
    nextDayButton.disabled = true;
    nextDayButton.hidden = true;
  } else {
    nextDayButton.textContent = "后一天";
    nextDayButton.disabled = false;
    nextDayButton.hidden = false;
  }

  if (selectedDay <= 1) {
    prevDayButton.textContent = "前一天";
    prevDayButton.disabled = true;
    prevDayButton.hidden = true;
  } else {
    prevDayButton.textContent = "前一天";
    prevDayButton.disabled = false;
    prevDayButton.hidden = false;
  }
}

function renderNews(plan, forceRefresh = false) {
  const query = getNewsQuery(plan);
  const range = getYesterdayRange();
  newsPanel.hidden = true;
  newsHint.textContent = `仅展示 ${range.label} 的最新技术动态。`;
  newsList.innerHTML = "";

  if (!forceRefresh && newsCache[plan.day]) {
    renderNewsCards(newsCache[plan.day]);
    return;
  }

  loadLiveNews(plan, query, range);
}

async function loadLiveNews(plan, query, range) {
  try {
    const filters = `created_at_i>=${range.start},created_at_i<${range.end}`;
    const url = `https://hn.algolia.com/api/v1/search_by_date?tags=story&hitsPerPage=6&query=${encodeURIComponent(query)}&numericFilters=${encodeURIComponent(filters)}`;
    const response = await fetch(url);
    if (!response.ok) {
      return;
    }
    const data = await response.json();
    const items = data.hits
      .filter((item) => item.title && (item.url || item.objectID))
      .slice(0, 6)
      .map((item) => ({
        title: item.title,
        meta: `Hacker News · ${new Date(item.created_at).toLocaleDateString("zh-CN")}`,
        url: item.url || `https://news.ycombinator.com/item?id=${item.objectID}`
      }));

    if (items.length > 0 && plan.day === selectedDay) {
      newsCache[plan.day] = items;
      renderNewsCards(items);
    }
  } catch {
    newsPanel.hidden = true;
  }
}

function renderNewsCards(items) {
  if (!items.length) {
    newsPanel.hidden = true;
    return;
  }

  newsPanel.hidden = false;
  newsList.innerHTML = "";
  items.forEach((item) => {
    const card = document.createElement("a");
    card.className = "news-card";
    card.href = item.url;
    card.target = "_blank";
    card.rel = "noopener noreferrer";

    const title = document.createElement("strong");
    title.textContent = item.title;
    const meta = document.createElement("span");
    meta.textContent = item.meta;

    card.appendChild(title);
    card.appendChild(meta);
    newsList.appendChild(card);
  });
}

function renderStats() {
  const completed = plans.filter((plan) => getComputedStatus(plan.day) === "done").length;
  const percent = Math.round((completed / plans.length) * 100);
  doneCount.textContent = String(completed);
  progressBar.style.width = `${percent}%`;
  progressText.textContent = `完成 ${percent}%`;
  overviewCount.textContent = `${completed}/45`;
  overviewPercent.textContent = `完成 ${percent}%`;
}

function render() {
  renderDetail();
  renderStats();
  renderOverview();
  saveState.textContent = "已自动保存";
}

function renderOverview() {
  overviewGrid.innerHTML = "";
  const currentStudyDay = getCurrentStudyDay();

  plans.forEach((plan) => {
    const status = getComputedStatus(plan.day);
    const button = document.createElement("button");
    button.type = "button";
    button.className = "overview-day";
    button.textContent = plan.day;
    button.setAttribute("aria-label", `查看 Day ${plan.day}：${plan.title}`);

    if (status === "done") {
      button.classList.add("is-done");
    } else if (plan.day < currentStudyDay) {
      button.classList.add("is-overdue");
    }

    button.addEventListener("click", () => {
      selectedDay = plan.day;
      closeOverviewModal();
      render();
      document.querySelector(".detail-panel").scrollIntoView({ behavior: "smooth", block: "start" });
    });

    overviewGrid.appendChild(button);
  });
}

function openOverviewModal() {
  renderOverview();
  overviewModal.hidden = false;
  closeOverview.focus();
}

function closeOverviewModal() {
  overviewModal.hidden = true;
  progressPanel.focus();
}

noteInput.addEventListener("input", () => {
  saveState.textContent = "保存中";
  window.clearTimeout(saveTimer);
  saveTimer = window.setTimeout(() => {
    setDayState(selectedDay, { note: noteInput.value });
    saveState.textContent = "已自动保存";
  }, 240);
});

progressPanel.addEventListener("click", openOverviewModal);

closeOverview.addEventListener("click", closeOverviewModal);

overviewModal.addEventListener("click", (event) => {
  if (event.target === overviewModal) {
    closeOverviewModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !overviewModal.hidden) {
    closeOverviewModal();
  }
});

refreshNews.addEventListener("click", () => {
  const plan = getPlan(selectedDay);
  delete newsCache[selectedDay];
  renderNews(plan, true);
});

completeButton.addEventListener("click", () => {
  const plan = getPlan(selectedDay);
  const wasDone = getComputedStatus(selectedDay) === "done";
  const nextTasks = {};

  plan.tasks.forEach((_, index) => {
    nextTasks[index] = true;
  });

  setDayState(selectedDay, { tasks: nextTasks });
  const nextStatus = syncDayStatus(selectedDay);
  const completedDay = selectedDay;
  selectedDay = getRecommendedDay();
  render();

  if (!wasDone && nextStatus === "done") {
    selectedDay = completedDay;
    celebrateCompletion();
    selectedDay = getRecommendedDay();
    render();
  }
});

nextDayButton.addEventListener("click", () => {
  if (selectedDay >= plans.length) {
    return;
  }

  selectedDay += 1;
  render();
  document.querySelector(".detail-panel").scrollIntoView({ behavior: "smooth", block: "start" });
});

prevDayButton.addEventListener("click", () => {
  if (selectedDay <= 1) {
    return;
  }

  selectedDay -= 1;
  render();
  document.querySelector(".detail-panel").scrollIntoView({ behavior: "smooth", block: "start" });
});

function celebrateCompletion() {
  const colors = ["#1f8f55", "#5aa05e", "#bd6b12", "#f2c94c", "#3a7bd5", "#d65472"];
  for (let index = 0; index < 100; index += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    piece.style.left = `${Math.random() * 100}vw`;
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.setProperty("--drift", `${Math.random() * 220 - 110}px`);
    piece.style.setProperty("--fall-time", `${1.2 + Math.random() * 1.2}s`);
    piece.style.animationDelay = `${Math.random() * 0.25}s`;
    document.body.appendChild(piece);
    window.setTimeout(() => piece.remove(), 2600);
  }

  for (let index = 0; index < 56; index += 1) {
    const side = index % 2 === 0 ? "left" : "right";
    const piece = document.createElement("span");
    const direction = side === "left" ? 1 : -1;
    piece.className = `side-confetti ${side}`;
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.setProperty("--start-y", `${30 + Math.random() * 42}vh`);
    piece.style.setProperty("--burst-x", `${direction * (180 + Math.random() * 360)}px`);
    piece.style.setProperty("--burst-y", `${-160 + Math.random() * 320}px`);
    piece.style.setProperty("--spin", `${direction * (360 + Math.random() * 760)}deg`);
    piece.style.setProperty("--burst-time", `${900 + Math.random() * 850}ms`);
    piece.style.animationDelay = `${Math.random() * 160}ms`;
    document.body.appendChild(piece);
    window.setTimeout(() => piece.remove(), 2100);
  }

  const toast = document.createElement("div");
  toast.className = "celebration-toast";
  toast.textContent = "恭喜你完成今天的任务，离成为代码大师又近了一步";
  document.body.appendChild(toast);
  window.setTimeout(() => toast.remove(), 1900);
}

function showBootError(error) {
  const message = document.createElement("div");
  message.className = "boot-error";
  message.textContent = `页面脚本启动失败：${error.message || error}`;
  document.body.prepend(message);
}

try {
  render();
} catch (error) {
  showBootError(error);
}
