# Go 后端开发 45 天学习计划

这份计划适合刚开始学习计算机和 Go 语言的新手。每天学习时间控制在 2-3 小时，目标不是“看完很多内容”，而是每天都写代码、运行代码、改错、总结，最后完成一个接近真实后端开发流程的项目。

## 学习目标

完成本计划后，你应该能够：

- 掌握 Go 基础语法、函数、结构体、接口、错误处理、泛型和并发。
- 理解 Go 项目结构、Go Modules、包管理、测试、日志和配置。
- 能用 Gin 写 RESTful API。
- 能使用 MySQL、Redis 完成常见后端功能。
- 能完成登录注册、JWT 鉴权、CRUD、分页、缓存、限流、日志、参数校验等后端常见需求。
- 能用 Docker 启动 MySQL、Redis 和自己的 Go 服务。
- 能独立完成一个完整后端项目，并写出基本项目文档。

## 每日学习节奏

建议每天按下面节奏学习：

- 30-45 分钟：看文档、视频或文章，理解当天知识点。
- 60-90 分钟：跟着写代码，必须自己敲。
- 30-45 分钟：完成当天 demo 或项目任务。
- 10-20 分钟：写学习笔记，总结今天遇到的问题。

每天至少提交一次代码到 Git。提交信息可以简单一些，例如：

```bash
git add .
git commit -m "day01: learn go setup and hello world"
```

## 推荐工具

- Go：主语言环境。
- VS Code 或 GoLand：代码编辑器。
- Git：代码版本管理。
- Docker Desktop：启动 MySQL、Redis 等服务。
- MySQL：关系型数据库。
- Redis：缓存、验证码、限流、分布式锁基础。
- Postman、Apifox 或 curl：测试接口。
- TablePlus、DBeaver 或 DataGrip：查看数据库。

## 推荐目录结构

学习时可以按照下面结构组织代码：

```text
LearnGo/
  day01-hello/
  day02-basic-types/
  day03-control-flow/
  ...
  demos/
    cli-calculator/
    file-todo/
    http-server/
  final-project/
    cmd/
    internal/
    pkg/
    configs/
    docs/
    scripts/
```

## 阶段总览

| 阶段 | 天数 | 主题 | 目标 |
| --- | --- | --- | --- |
| 第 1 阶段 | Day 1-7 | Go 基础语法 | 能写简单命令行程序 |
| 第 2 阶段 | Day 8-14 | 函数、结构体、接口、错误处理 | 能写结构清晰的小程序 |
| 第 3 阶段 | Day 15-20 | 文件、测试、并发、网络基础 | 能写可测试、有并发的程序 |
| 第 4 阶段 | Day 21-27 | Web 开发基础 | 能写 RESTful API |
| 第 5 阶段 | Day 28-34 | MySQL、Redis、鉴权 | 能写常见业务后端 |
| 第 6 阶段 | Day 35-45 | 完整项目和工程化 | 完成一个可运行后端项目 |

## Day 1：环境搭建和 Hello World

学习内容：

- 安装 Go。
- 配置 GOPATH、GOROOT、Go Modules 的基本概念。
- 学会使用 `go version`、`go env`、`go run`、`go build`。
- 理解 Go 程序入口：`package main` 和 `func main()`。

任务：

- 创建 `day01-hello` 目录。
- 写一个 `main.go`，输出 `Hello, Go!`。
- 使用 `go run main.go` 运行。
- 使用 `go build` 编译成可执行文件。

输出：

- 一个能运行的 Hello World 程序。
- 笔记：Go 程序为什么从 `main` 包的 `main` 函数开始执行？

## Day 2：变量、常量和基础类型

学习内容：

- `var`、`const`、短变量声明 `:=`。
- `int`、`float64`、`bool`、`string`。
- 零值概念。
- 类型转换。

任务：

- 写一个个人信息打印程序。
- 定义姓名、年龄、身高、是否在学习 Go。
- 尝试把数字转换成字符串并打印。

输出：

- `day02-basic-types/main.go`。
- 笔记：Go 为什么不允许隐式类型转换？

## Day 3：条件、循环和 switch

学习内容：

- `if`、`else if`、`else`。
- `for` 的三种写法。
- `switch` 的基础用法。
- `break`、`continue`。

任务：

- 写一个成绩评级程序。
- 输入分数，输出 A、B、C、D。
- 写一个 1-100 求和程序。

输出：

- `day03-control-flow/main.go`。
- demo：成绩评级器。

## Day 4：数组、切片和 map

学习内容：

- 数组和切片的区别。
- `append`、`len`、`cap`。
- 切片底层数组的基本理解。
- `map` 的增删改查。

任务：

- 用切片保存多个学生成绩，计算平均分、最高分、最低分。
- 用 `map[string]int` 保存学生姓名和成绩。

输出：

- `day04-slice-map/main.go`。
- demo：学生成绩统计器。

## Day 5：函数基础

学习内容：

- 函数定义。
- 多返回值。
- 命名返回值。
- 可变参数。
- 匿名函数。

任务：

- 把 Day 4 的成绩统计器拆成多个函数。
- 实现 `sum`、`avg`、`max`、`min` 函数。

输出：

- `day05-functions/main.go`。
- 笔记：Go 多返回值适合解决什么问题？

## Day 6：指针入门

学习内容：

- 什么是内存地址。
- `&` 和 `*`。
- 值传递和指针传递。
- 指针的常见使用场景。

任务：

- 写一个函数修改用户年龄。
- 分别用值传递和指针传递实现，对比结果。

输出：

- `day06-pointers/main.go`。
- 笔记：什么时候应该传指针？

## Day 7：第一个小项目：命令行计算器

学习内容：

- 复习 Day 1-6。
- 命令行参数 `os.Args`。
- 字符串转数字 `strconv.Atoi`。

任务：

- 实现一个命令行计算器。
- 支持加、减、乘、除。
- 示例：`go run main.go add 3 5` 输出 `8`。
- 处理参数不足、非法数字、除数为 0。

输出：

- `demos/cli-calculator/main.go`。
- demo：命令行计算器。

## Day 8：结构体 struct

学习内容：

- 定义结构体。
- 创建结构体实例。
- 结构体字段访问。
- 结构体指针。
- 匿名结构体。

任务：

- 定义 `User`、`Article` 两个结构体。
- 写函数打印用户信息和文章信息。

输出：

- `day08-struct/main.go`。
- 笔记：结构体和 map 存数据有什么区别？

## Day 9：方法 method

学习内容：

- 方法和函数的区别。
- 值接收者和指针接收者。
- 给结构体绑定行为。

任务：

- 给 `User` 添加 `ChangeName`、`GrowUp` 方法。
- 用值接收者和指针接收者分别实现，观察区别。

输出：

- `day09-method/main.go`。

## Day 10：接口 interface

学习内容：

- 接口是什么。
- 隐式实现接口。
- 空接口 `any`。
- 类型断言。
- 类型选择 `type switch`。

任务：

- 定义 `Notifier` 接口。
- 实现 `EmailNotifier` 和 `SMSNotifier`。
- 写一个函数接收 `Notifier` 并发送通知。

输出：

- `day10-interface/main.go`。
- 笔记：Go 的接口为什么叫“隐式实现”？

## Day 11：错误处理 error

学习内容：

- `error` 类型。
- `errors.New`。
- `fmt.Errorf`。
- 错误包装 `%w`。
- `errors.Is`、`errors.As`。

任务：

- 改造命令行计算器。
- 输入非法参数时返回明确错误。
- 练习错误向上返回。

输出：

- `day11-error/main.go`。
- demo：带错误处理的计算器。

## Day 12：包、模块和项目拆分

学习内容：

- `go mod init`。
- `go mod tidy`。
- 包名和目录名。
- 导出标识符首字母大写。
- `internal` 目录的作用。

任务：

- 把计算器拆成 `main` 包和 `calculator` 包。
- `calculator` 包只负责计算逻辑。
- `main` 包只负责读取参数和打印结果。

输出：

- `day12-module/`。
- 笔记：为什么业务逻辑不应该全部写在 `main.go`？

## Day 13：泛型入门

学习内容：

- 泛型函数。
- 类型参数。
- 类型约束。
- `comparable`。

任务：

- 写一个泛型函数 `Contains`，判断切片中是否包含某个元素。
- 写一个泛型函数 `Max`，支持整数和浮点数。

输出：

- `day13-generics/main.go`。

## Day 14：第二个小项目：内存版 Todo

学习内容：

- 综合结构体、方法、接口、错误处理。
- 简单分层思想。

任务：

- 实现一个内存版 Todo 管理器。
- 支持新增、完成、删除、列表展示。
- Todo 字段包括：ID、标题、是否完成、创建时间。

输出：

- `demos/memory-todo/`。
- demo：内存版 Todo。

## Day 15：文件读写和 JSON

学习内容：

- `os.ReadFile`、`os.WriteFile`。
- `encoding/json`。
- 结构体 tag：`json:"name"`。
- JSON 序列化和反序列化。

任务：

- 把 Day 14 的 Todo 保存到 JSON 文件。
- 程序启动时从 JSON 文件读取。

输出：

- `demos/file-todo/`。
- demo：文件版 Todo。

## Day 16：时间、字符串和常用标准库

学习内容：

- `time`。
- `strings`。
- `strconv`。
- `sort`。
- `math/rand`。

任务：

- 给 Todo 增加按创建时间排序。
- 增加按关键词搜索。
- 生成随机验证码。

输出：

- `day16-stdlib/main.go`。

## Day 17：单元测试

学习内容：

- `testing` 包。
- 测试文件命名：`xxx_test.go`。
- `go test`。
- 表格驱动测试。

任务：

- 给计算器写单元测试。
- 给 Todo 的新增、删除、完成写单元测试。

输出：

- `day17-testing/`。
- 至少 5 个测试用例。

## Day 18：并发 goroutine

学习内容：

- 并发和并行的区别。
- `go func()`。
- `sync.WaitGroup`。
- 常见并发错误。

任务：

- 写一个并发下载模拟器。
- 同时启动 5 个任务，每个任务 sleep 随机时间后完成。

输出：

- `day18-goroutine/main.go`。
- 笔记：主协程退出后，其他 goroutine 会怎样？

## Day 19：channel

学习内容：

- channel 基础。
- 无缓冲和有缓冲 channel。
- `for range` 读取 channel。
- `close(channel)`。
- `select`。

任务：

- 实现生产者消费者模型。
- 一个生产者生成数字，三个消费者处理数字。

输出：

- `day19-channel/main.go`。

## Day 20：context 和并发控制

学习内容：

- `context.Context`。
- `context.WithCancel`。
- `context.WithTimeout`。
- 超时控制。
- goroutine 泄漏概念。

任务：

- 写一个模拟接口请求的函数。
- 如果 2 秒内没有完成，就取消任务。

输出：

- `day20-context/main.go`。
- 笔记：为什么后端服务里经常要传 `context`？

## Day 21：HTTP 基础

学习内容：

- HTTP 请求和响应。
- GET、POST、PUT、DELETE。
- 状态码。
- Header、Body、Query、Path。
- Go 标准库 `net/http`。

任务：

- 用标准库写一个 HTTP 服务。
- 提供 `/ping` 接口，返回 `pong`。
- 提供 `/hello?name=xxx` 接口。

输出：

- `day21-http/main.go`。

## Day 22：RESTful API 设计

学习内容：

- RESTful 风格。
- 资源、路径、方法。
- JSON 请求和响应。
- API 错误格式。

任务：

- 用标准库写 Todo API。
- 支持创建 Todo、查询 Todo 列表、查询单个 Todo。

输出：

- `day22-rest-api/`。

## Day 23：Gin 框架入门

学习内容：

- Gin 安装和基本使用。
- 路由。
- 参数绑定。
- JSON 返回。

任务：

- 用 Gin 重写 `/ping` 和 `/hello`。
- 用 Gin 重写 Todo API。

输出：

- `day23-gin-basic/`。

## Day 24：中间件 middleware

学习内容：

- Gin 中间件。
- 请求日志。
- panic 恢复。
- 简单鉴权中间件。

任务：

- 写一个日志中间件，打印请求方法、路径、耗时。
- 写一个简单 token 中间件。

输出：

- `day24-middleware/`。

## Day 25：参数校验和统一响应

学习内容：

- 请求参数绑定。
- validator。
- 统一响应结构。
- 统一错误处理。

任务：

- 给 Todo 创建接口增加参数校验。
- 标题不能为空，长度不能超过 100。
- 封装成功响应和失败响应。

输出：

- `day25-validation-response/`。

## Day 26：日志、配置和分层

学习内容：

- 配置文件。
- 环境变量。
- 日志级别。
- handler、service、repository 分层。

任务：

- 把 Todo API 拆成三层：
  - handler：处理 HTTP。
  - service：处理业务逻辑。
  - repository：处理数据存储。
- 增加配置文件 `config.yaml`。

输出：

- `day26-layered-api/`。

## Day 27：第三个小项目：内存版博客 API

学习内容：

- 综合 Gin、路由、中间件、分层、统一响应。

任务：

- 实现博客 API。
- 支持文章创建、文章列表、文章详情、文章更新、文章删除。
- 文章字段包括：ID、标题、内容、作者、创建时间、更新时间。

输出：

- `demos/memory-blog-api/`。
- demo：内存版博客 API。

## Day 28：MySQL 基础

学习内容：

- 数据库、表、行、列。
- 主键、索引、唯一约束。
- SQL 基础：`insert`、`select`、`update`、`delete`。
- Docker 启动 MySQL。

任务：

- 创建 `users` 表和 `articles` 表。
- 手写 SQL 完成增删改查。

输出：

- `day28-mysql-basic/sql/init.sql`。
- 笔记：数据库主键有什么用？

## Day 29：Go 连接 MySQL

学习内容：

- `database/sql`。
- MySQL driver。
- 连接池。
- `Query`、`QueryRow`、`Exec`。
- SQL 注入基础。

任务：

- 用 Go 连接 MySQL。
- 实现用户新增、查询列表、根据 ID 查询。

输出：

- `day29-go-mysql/`。

## Day 30：GORM 入门

学习内容：

- ORM 是什么。
- GORM 模型定义。
- 自动迁移。
- CRUD。
- `CreatedAt`、`UpdatedAt`、软删除。

任务：

- 用 GORM 重写用户 CRUD。
- 定义 `User` 和 `Article` 模型。

输出：

- `day30-gorm-basic/`。

## Day 31：数据库设计和分页查询

学习内容：

- 一对多关系。
- 外键概念。
- 分页查询。
- 排序。
- 模糊搜索。

任务：

- 设计用户和文章关系。
- 实现文章分页列表。
- 支持按标题关键词搜索。

输出：

- `day31-pagination-search/`。

## Day 32：Redis 基础

学习内容：

- Redis 是什么。
- string、hash、list、set、zset。
- 过期时间。
- Docker 启动 Redis。
- 常见使用场景：缓存、验证码、限流、排行榜。

任务：

- 用 redis-cli 练习常用命令。
- 写 Go 程序连接 Redis。
- 实现验证码存储，设置 5 分钟过期。

输出：

- `day32-redis-basic/`。

## Day 33：缓存和缓存一致性入门

学习内容：

- 缓存读取流程。
- 缓存穿透、缓存击穿、缓存雪崩。
- 删除缓存和更新数据库的顺序问题。

任务：

- 给文章详情接口增加 Redis 缓存。
- 查询文章时先查 Redis，未命中再查 MySQL。
- 更新文章后删除对应缓存。

输出：

- `day33-redis-cache/`。

## Day 34：登录注册和 JWT

学习内容：

- 密码哈希。
- bcrypt。
- JWT 结构。
- 登录态。
- 鉴权中间件。

任务：

- 实现用户注册。
- 实现用户登录。
- 登录成功返回 JWT。
- 需要登录才能创建、修改、删除文章。

输出：

- `day34-auth-jwt/`。

## Day 35：完整项目启动：任务管理系统

最终项目建议做一个“任务管理系统 TaskFlow API”，功能接近真实后端项目，难度适合新手进阶。

核心功能：

- 用户注册、登录。
- JWT 鉴权。
- 项目空间 Project。
- 任务 Task。
- 评论 Comment。
- 任务状态流转。
- MySQL 持久化。
- Redis 缓存和限流。
- Docker Compose 一键启动。

今日任务：

- 创建 `final-project`。
- 初始化 Go Module。
- 设计基础目录结构。
- 写项目 README 草稿。
- 设计接口列表。

输出：

- `final-project/README.md`。
- `final-project/docs/api.md`。

## Day 36：项目数据库设计

学习内容：

- 表设计。
- 字段类型。
- 索引设计。
- 唯一约束。
- 逻辑删除。

任务：

- 设计以下表：
  - `users`
  - `projects`
  - `project_members`
  - `tasks`
  - `comments`
- 写初始化 SQL。
- 用 GORM model 表达这些表。

输出：

- `final-project/internal/model/`。
- `final-project/scripts/init.sql`。

## Day 37：项目配置、日志和启动

学习内容：

- 配置加载。
- 日志初始化。
- 数据库初始化。
- Redis 初始化。
- 服务优雅启动。

任务：

- 增加 `config.yaml`。
- 增加配置读取逻辑。
- 初始化 MySQL 和 Redis。
- 启动 Gin 服务。

输出：

- `final-project/configs/config.yaml`。
- `/ping` 接口可访问。

## Day 38：用户注册和登录

学习内容：

- 用户模块分层。
- 密码加密。
- JWT 生成。
- 参数校验。

任务：

- 实现注册接口。
- 实现登录接口。
- 实现获取当前用户信息接口。

输出：

- `POST /api/v1/auth/register`。
- `POST /api/v1/auth/login`。
- `GET /api/v1/users/me`。

## Day 39：项目 Project 模块

学习内容：

- 业务权限。
- 用户和项目的关系。
- repository 查询封装。

任务：

- 创建项目。
- 查询我的项目列表。
- 查询项目详情。
- 邀请成员加入项目。

输出：

- Project 模块完整 CRUD 中的创建和查询功能。

## Day 40：任务 Task 模块

学习内容：

- 核心业务建模。
- 状态机入门。
- 分页查询。

任务：

- 创建任务。
- 查询任务列表。
- 查询任务详情。
- 修改任务状态：todo、doing、done。
- 按状态筛选任务。

输出：

- Task 模块主要接口。

## Day 41：评论 Comment 模块和权限补强

学习内容：

- 子资源接口设计。
- 权限校验。
- 常见业务错误处理。

任务：

- 给任务添加评论。
- 查询任务评论列表。
- 只有项目成员能查看任务和评论。
- 只有任务创建者或项目管理员能删除任务。

输出：

- Comment 模块接口。
- 权限校验逻辑。

## Day 42：Redis 缓存和限流

学习内容：

- 热点数据缓存。
- 接口限流。
- Redis key 设计。

任务：

- 给项目详情或任务详情增加缓存。
- 登录接口增加简单 IP 限流。
- 设计 Redis key 命名规范。

输出：

- Redis 缓存逻辑。
- 登录限流中间件。

## Day 43：测试和接口文档

学习内容：

- 单元测试。
- service 层测试。
- 接口文档。
- curl 示例。

任务：

- 给用户注册、登录、任务创建写测试。
- 整理接口文档。
- 给每个核心接口写 curl 示例。

输出：

- `final-project/docs/api.md`。
- 至少 6 个测试用例。

## Day 44：Docker Compose 和部署入门

学习内容：

- Dockerfile。
- Docker Compose。
- 服务依赖。
- 环境变量。

任务：

- 写 Go 服务 Dockerfile。
- 写 `docker-compose.yaml`，包含：
  - Go API 服务。
  - MySQL。
  - Redis。
- 一条命令启动整个项目。

输出：

- `final-project/Dockerfile`。
- `final-project/docker-compose.yaml`。

## Day 45：项目收尾和复盘

学习内容：

- 项目复盘。
- README 编写。
- 后端项目面试表达。

任务：

- 完善最终项目 README。
- 写清楚项目功能、技术栈、启动方式、接口示例。
- 整理你遇到的 10 个问题和解决方法。
- 给项目打一个 Git tag：`v0.1.0`。

输出：

- 一个完整可运行的 Go 后端项目。
- 一份清晰的项目 README。
- 一份个人复盘文档。

## 最终项目接口建议

基础接口：

```text
GET    /ping
POST   /api/v1/auth/register
POST   /api/v1/auth/login
GET    /api/v1/users/me

POST   /api/v1/projects
GET    /api/v1/projects
GET    /api/v1/projects/:id
POST   /api/v1/projects/:id/members

POST   /api/v1/projects/:project_id/tasks
GET    /api/v1/projects/:project_id/tasks
GET    /api/v1/tasks/:id
PATCH  /api/v1/tasks/:id/status
DELETE /api/v1/tasks/:id

POST   /api/v1/tasks/:id/comments
GET    /api/v1/tasks/:id/comments
```

## 每周复盘问题

每 7 天回答一次这些问题：

- 这一周我真正写了哪些代码？
- 哪个知识点最难？
- 哪个 bug 卡了我最久？
- 我能不能不看笔记重新写一遍本周 demo？
- 我有没有把代码提交到 Git？
- 下周最需要补的是语法、项目结构、数据库，还是接口设计？

## 新手容易踩的坑

- 只看视频不写代码。Go 必须靠写代码理解。
- 遇到报错直接复制给 AI，不先读错误信息。
- 把所有代码都写进 `main.go`。
- 不写测试，导致改代码时不知道有没有破坏旧功能。
- SQL 只会用 ORM，不会手写基础 SQL。
- Redis 只知道缓存，不知道过期时间、缓存穿透和 key 设计。
- 项目 README 不写启动方式，别人无法运行你的项目。

## 大厂后端开发常见能力清单

这份计划会覆盖其中一部分，后续还可以继续深入：

- 编程语言：Go 基础、并发、测试、性能分析。
- Web 框架：Gin、中间件、参数校验、统一响应。
- 数据库：MySQL、索引、事务、分页、慢查询。
- 缓存：Redis、缓存策略、限流、分布式锁基础。
- 工程化：配置、日志、错误处理、分层架构、Docker。
- 安全：密码哈希、JWT、权限校验、SQL 注入防护。
- 协作：Git、README、接口文档、代码规范。

## 45 天之后继续学什么

完成本计划后，可以继续学习：

- Go 并发高级模式：worker pool、rate limit、fan-in、fan-out。
- MySQL 进阶：事务隔离级别、索引优化、Explain、锁。
- Redis 进阶：分布式锁、Lua、Stream、持久化、集群。
- 消息队列：Kafka、RabbitMQ、RocketMQ。
- 微服务：gRPC、服务注册发现、配置中心、链路追踪。
- 可观测性：Prometheus、Grafana、OpenTelemetry。
- 部署：Linux、Nginx、CI/CD、Kubernetes 基础。

## 学习要求

每天最低要求：

- 至少写 50 行 Go 代码。
- 至少运行 3 次程序。
- 至少记录 1 个问题和解决方法。
- 至少提交 1 次 Git。

不要追求一次写对。真正的学习过程是：写代码、运行、报错、读错误、修改、再运行。
