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

## 每日任务明确版

下面这一节是对每天任务的进一步说明。网页里会保留简洁版任务，真正写代码时优先看这里。

### Day 1：环境搭建和 Hello World

- 在 `day01-hello` 目录里创建 `main.go`，不要先拆包，一个文件即可。
- `main.go` 里必须包含 `package main`、`import "fmt"`、`func main()`。
- 使用 `fmt.Println("Hello, Go!")` 输出内容，不需要用户输入。
- 分别运行 `go run main.go` 和 `go build`，确认一个是直接运行，一个是生成可执行文件。
- 在笔记里写清楚：`go run` 和 `go build` 的区别是什么。

### Day 2：变量、常量和基础类型

- 写一个固定数据的个人信息打印程序，不需要命令行输入，也不需要 `fmt.Scan`。
- 至少定义这些变量：姓名、年龄、身高、是否正在学习 Go。
- 要同时练习两种声明方式：用 `var` 声明姓名和年龄，用 `:=` 声明身高和布尔值。
- 用 `const` 定义一个固定值，例如学校名、城市名或学习目标。
- 使用 `fmt.Printf` 打印，并练习 `%s`、`%d`、`%.2f`、`%t`。
- 类型转换要明确写出来，例如把 `int` 转成 `float64` 再计算，不要依赖隐式转换。

### Day 3：条件、循环和 switch

- 成绩评级程序先使用固定分数变量，例如 `score := 86`，不需要输入。
- 使用 `if / else if / else` 实现分数评级：90 以上 A，80-89 B，70-79 C，60-69 D，60 以下 E。
- 再用 `switch` 写一个星期判断程序，例如 `day := 3` 输出星期三。
- 1-100 求和必须用 `for i := 1; i <= 100; i++` 写一遍。
- 再写一个只累加偶数的版本，练习 `continue`。

### Day 4：数组、切片和 map

- 使用切片保存成绩，例如 `scores := []int{88, 92, 76, 60, 99}`。
- 不要先写复杂输入，先用固定数据完成统计逻辑。
- 写出平均分、最高分、最低分，平均分要用 `float64`，避免整数除法。
- 用 `append` 给切片新增一个成绩，打印新增前后的 `len` 和 `cap`。
- 用 `map[string]int` 保存姓名和成绩，完成新增、修改、删除、查询四种操作。

### Day 5：函数基础

- 把 Day 4 的成绩统计拆成函数，不要把所有逻辑继续堆在 `main`。
- 至少写 4 个函数：`sum(scores []int) int`、`avg(scores []int) float64`、`max(scores []int) int`、`min(scores []int) int`。
- 函数参数使用切片，不要使用全局变量。
- `avg` 里要处理空切片，避免除以 0。
- 写一个可变参数函数，例如 `printNames(names ...string)`。

### Day 6：指针入门

- 定义一个 `age := 18`，分别写两个函数：一个接收 `int`，一个接收 `*int`。
- 用值传递的函数尝试修改年龄，观察外部变量没有变化。
- 用指针传递的函数修改年龄，观察外部变量发生变化。
- 打印 `&age`，理解变量地址是什么。
- 不需要使用复杂结构体，先把 `&` 和 `*` 理解清楚。

### Day 7：命令行计算器

- 这个项目需要使用命令行参数，不使用 `fmt.Scan`。
- 支持这种格式：`go run main.go add 3 5`。
- 操作符先支持 `add`、`sub`、`mul`、`div` 四种字符串。
- 使用 `strconv.Atoi` 把参数转成数字，转换失败要打印错误。
- 参数数量不足、未知操作符、除数为 0 都要单独处理。
- 计算逻辑可以先写在 `main.go`，后面 Day 12 再拆包。

### Day 8：结构体 struct

- 定义 `User` 结构体，字段包含 `ID`、`Name`、`Age`、`Email`。
- 定义 `Article` 结构体，字段包含 `ID`、`Title`、`Content`、`AuthorID`。
- 使用结构体字面量创建对象，例如 `User{ID: 1, Name: "Tom"}`。
- 写两个打印函数：`printUser(user User)` 和 `printArticle(article Article)`。
- 练习结构体指针：创建 `userPtr := &user` 并修改用户名。

### Day 9：方法 method

- 在 Day 8 的 `User` 基础上继续写。
- 给 `User` 添加 `ChangeName(newName string)` 方法，使用指针接收者。
- 给 `User` 添加 `IsAdult() bool` 方法，使用值接收者。
- 对比值接收者和指针接收者：哪个能修改原对象，哪个只是读取。
- 不要为了所有方法都用指针，先按“会不会修改对象”来判断。

### Day 10：接口 interface

- 定义接口 `Notifier`，包含方法 `Send(to string, message string) error`。
- 写两个实现：`EmailNotifier` 和 `SMSNotifier`。
- 不要显式写 `implements`，Go 会自动判断是否实现接口。
- 写函数 `notify(n Notifier)`，分别传入两个不同实现。
- 最后用一句笔记说明：接口变量保存的是“能做这件事的对象”，不是某个具体结构体。

### Day 11：错误处理 error

- 改造 Day 7 的计算器，计算函数返回 `(int, error)`。
- 不要在计算函数里直接 `fmt.Println` 错误，应该返回错误给调用者。
- 使用 `errors.New` 处理简单错误，例如除数为 0。
- 使用 `fmt.Errorf` 带上上下文，例如 `fmt.Errorf("invalid number: %s", input)`。
- 在 `main` 函数里统一判断错误并打印。

### Day 12：包、模块和项目拆分

- 新建 `day12-module`，执行 `go mod init learn-go/day12-module`。
- 创建 `calculator` 目录，把加减乘除逻辑放进去。
- `calculator` 包里的函数首字母大写，例如 `Calculate`，这样 `main` 包才能调用。
- `main.go` 只负责读取参数、调用包、打印结果。
- 运行 `go test ./...`，即使还没有测试，也要熟悉这个命令。

### Day 13：泛型入门

- 写泛型函数 `Contains[T comparable](items []T, target T) bool`。
- 用 `[]int` 和 `[]string` 分别测试一次。
- 写 `Max` 时先只支持 `int` 和 `float64`，不要一开始追求覆盖所有数字类型。
- 可以定义类型约束：`type Number interface { int | float64 }`。
- 在笔记里写明：为什么 `Contains` 需要 `comparable`。

### Day 14：内存版 Todo

- 定义 `Todo` 结构体：`ID`、`Title`、`Done`、`CreatedAt`。
- 定义 `TodoStore` 结构体，用切片保存 Todo，并维护自增 ID。
- 方法至少包含：`Add`、`List`、`Done`、`Delete`。
- 先用固定调用模拟操作，不需要做复杂命令行交互。
- 每个方法都要考虑错误情况，例如删除不存在的 ID。

### Day 15：文件读写和 JSON

- 基于 Day 14 的 Todo 继续写，不要重新发明一套结构。
- 程序启动时尝试读取 `todos.json`，文件不存在时使用空列表。
- 每次新增、完成、删除后，把 Todo 列表写回 JSON 文件。
- 使用结构体 tag，例如 `json:"title"`。
- JSON 文件要格式化输出，可以使用 `json.MarshalIndent`。

### Day 16：时间、字符串和常用标准库

- 给 Todo 增加 `CreatedAt time.Time` 字段。
- 列表展示时按创建时间排序，使用 `sort.Slice`。
- 搜索功能用 `strings.Contains`，先做大小写敏感版本即可。
- 验证码生成使用固定字符集，例如数字和大小写字母。
- 数字和字符串转换统一使用 `strconv`，不要手写拼接转换逻辑。

### Day 17：单元测试

- 给计算器写测试，不要先测试打印输出，测试纯函数返回值。
- 测试文件命名为 `calculator_test.go`。
- 使用表格驱动测试，一组用例包含输入、期望结果、是否期望错误。
- 至少测试：正常加法、正常除法、除数为 0、未知操作符、非法参数。
- 运行 `go test ./...`，确保测试通过。

### Day 18：goroutine

- 写一个 `download(id int)` 函数，用 `time.Sleep` 模拟下载耗时。
- 启动 5 个 goroutine，每个任务打印开始和结束。
- 使用 `sync.WaitGroup` 等待所有任务完成。
- 不要用固定 `time.Sleep` 等主程序结束，必须用 WaitGroup。
- 在笔记里写清楚：为什么 main 函数退出后 goroutine 也会结束。

### Day 19：channel

- 创建一个 `jobs := make(chan int)`。
- 一个生产者 goroutine 往 jobs 里写入 1-10。
- 三个消费者 goroutine 从 jobs 中读取并处理。
- 生产者写完后必须 `close(jobs)`。
- 消费者使用 `for job := range jobs`，不要无限死循环。

### Day 20：context

- 写函数 `mockRequest(ctx context.Context)`，内部用 `select` 同时监听任务完成和 ctx 取消。
- 使用 `context.WithTimeout(context.Background(), 2*time.Second)` 设置超时。
- 模拟一个 3 秒才完成的任务，观察它被取消。
- 再模拟一个 1 秒完成的任务，观察它正常结束。
- 在函数参数里传 `ctx`，不要在函数内部自己创建根 context。

### Day 21：HTTP 基础

- 使用标准库 `net/http`，不要使用 Gin。
- 写 `/ping`，返回纯文本 `pong`。
- 写 `/hello`，从 query 参数读取 `name`，例如 `/hello?name=Tom`。
- 没传 name 时返回默认值，例如 `Hello, guest`。
- 用浏览器或 curl 访问接口，确认状态码是 200。

### Day 22：RESTful API 设计

- 使用标准库继续写 Todo API。
- 内存保存 Todo，不连接数据库。
- 接口至少包含：`POST /todos`、`GET /todos`、`GET /todos/{id}`。
- 请求和响应都使用 JSON。
- 错误响应也用 JSON，例如 `{"error":"todo not found"}`。

### Day 23：Gin 框架入门

- 用 Gin 重写 Day 21 和 Day 22 的接口。
- 使用 `c.JSON` 返回 JSON，不要手动拼字符串。
- 使用 `ShouldBindJSON` 绑定创建 Todo 的请求体。
- 路由分组可以先简单使用 `/api/v1`。
- 保持内存存储，不要急着接数据库。

### Day 24：中间件

- 写一个日志中间件，打印请求方法、路径、耗时。
- 中间件里要先记录开始时间，再 `c.Next()`，最后计算耗时。
- 写一个简单 token 中间件，要求 Header 里有 `Authorization`。
- token 可以先写死，例如 `Bearer dev-token`。
- 只把 token 中间件应用到需要保护的路由上。

### Day 25：参数校验和统一响应

- 定义统一响应结构，例如 `Response{Code, Message, Data}`。
- 成功时统一返回 `Code: 0`。
- 失败时统一返回非 0 code 和错误 message。
- Todo 标题不能为空，长度不要超过 100。
- 参数错误返回 400，资源不存在返回 404。

### Day 26：日志、配置和分层

- 把代码拆成 `handler`、`service`、`repository`。
- handler 只处理 HTTP 参数和响应。
- service 只处理业务逻辑，例如标题校验、状态变化。
- repository 只处理数据保存，当前仍然可以是内存实现。
- `config.yaml` 至少包含端口，例如 `server.port: 8080`。

### Day 27：内存版博客 API

- 定义 `Article`：`ID`、`Title`、`Content`、`Author`、`CreatedAt`、`UpdatedAt`。
- 实现文章创建、列表、详情、更新、删除。
- 列表接口支持分页参数 `page` 和 `page_size`。
- 更新文章时要修改 `UpdatedAt`。
- 删除不存在的文章要返回明确错误。

### Day 28：MySQL 基础

- 用 Docker 启动 MySQL，先保证本地能连上。
- 手写 `users` 和 `articles` 建表 SQL。
- `users.email` 加唯一索引。
- `articles.user_id` 表示作者 ID。
- 手写 insert、select、update、delete，每种至少执行一次。

### Day 29：Go 连接 MySQL

- 使用 `database/sql` 和 MySQL driver。
- 连接字符串不要写散在多个地方，定义成变量。
- 使用 `db.Ping()` 检查连接是否成功。
- 实现用户新增、根据 ID 查询、列表查询。
- SQL 参数必须使用占位符，不要字符串拼接，避免 SQL 注入。

### Day 30：GORM 入门

- 定义 `User` 和 `Article` GORM model。
- 使用 `AutoMigrate` 自动建表。
- 实现 Create、First、Find、Save、Delete。
- 观察 GORM 生成的表名和字段名。
- 不要只会调用 ORM，也要对照 Day 28 的 SQL 理解它在做什么。

### Day 31：数据库设计和分页查询

- 给文章表增加 `user_id`，表示一对多关系。
- 分页参数使用 `page` 和 `page_size`，默认值要合理。
- 使用 `Limit` 和 `Offset` 实现分页。
- 支持标题关键词搜索，使用 `LIKE`。
- 返回列表时同时返回总数 `total`。

### Day 32：Redis 基础

- 用 Docker 启动 Redis，并用 `redis-cli ping` 确认可用。
- 练习 `set`、`get`、`hset`、`hget`、`lpush`、`lrange`。
- Go 程序使用 Redis 客户端连接。
- 实现验证码保存：key 包含手机号或邮箱，value 是验证码。
- 设置 5 分钟过期时间，并验证过期后读取不到。

### Day 33：Redis 缓存

- 给文章详情增加缓存，key 例如 `article:detail:{id}`。
- 查询流程：先查 Redis，命中直接返回；未命中查 MySQL，再写 Redis。
- 更新文章后删除缓存，不要直接改缓存。
- 缓存内容可以存 JSON 字符串。
- 在日志里打印 cache hit / cache miss，方便观察。

### Day 34：登录注册和 JWT

- 注册接口接收用户名、邮箱、密码。
- 密码不能明文保存，使用 bcrypt hash。
- 登录时校验邮箱和密码。
- 登录成功后生成 JWT，返回给前端。
- 写 Gin 中间件解析 JWT，保护创建、更新、删除文章接口。

### Day 35：最终项目启动

- 创建 `final-project`，不要直接在前面 demo 上乱改。
- 初始化 Go Module。
- 建立目录：`cmd`、`internal`、`configs`、`docs`、`scripts`。
- 在 `docs/api.md` 先写接口草稿，不要求一次完整。
- README 先写项目目标、技术栈、启动方式占位。

### Day 36：项目数据库设计

- 设计 `users`、`projects`、`project_members`、`tasks`、`comments`。
- 每张表都要有 `id`、`created_at`、`updated_at`。
- 用户邮箱加唯一索引。
- project_members 要能表达成员角色，例如 owner、member。
- 用 GORM model 写出这些表，并准备初始化 SQL。

### Day 37：配置、日志和启动

- `config.yaml` 包含服务端口、MySQL、Redis 配置。
- 写配置加载函数，启动时读取配置。
- 初始化数据库连接和 Redis 连接。
- Gin 服务提供 `/ping`。
- 日志至少能打印服务启动端口和数据库连接结果。

### Day 38：用户注册和登录

- 用户注册需要校验邮箱是否已存在。
- 密码至少做长度校验，例如不能少于 6 位。
- 登录成功返回 JWT。
- `GET /api/v1/users/me` 从 JWT 中读取用户 ID。
- 错误返回要清楚区分：参数错误、用户不存在、密码错误。

### Day 39：Project 模块

- 创建项目时，当前登录用户自动成为 owner。
- 查询我的项目列表时，只返回我参与的项目。
- 项目详情要校验我是否是项目成员。
- 邀请成员时先按邮箱查用户，再写入 project_members。
- 重复邀请同一个用户要返回明确错误。

### Day 40：Task 模块

- 任务必须属于某个 project。
- 创建任务时字段包含标题、描述、状态、负责人。
- 状态只允许 `todo`、`doing`、`done`。
- 查询任务列表支持按状态筛选。
- 修改任务状态前要校验当前用户是否是项目成员。

### Day 41：Comment 模块和权限

- 评论必须属于某个 task。
- 创建评论时记录评论人 ID。
- 查询评论列表时按创建时间排序。
- 只有项目成员能看任务和评论。
- 删除任务或评论时，先写清楚规则，再写代码实现，不要随意放开权限。

### Day 42：Redis 缓存和限流

- 选择一个详情接口加缓存，例如项目详情或任务详情。
- Redis key 要有统一命名，例如 `taskflow:task:{id}`。
- 登录接口按 IP 做简单限流。
- 限流可以用 Redis 计数器加过期时间实现。
- 超过限制返回 429。

### Day 43：测试和接口文档

- 至少给用户注册、登录、任务创建写测试。
- 测试优先覆盖 service 层，不要一开始就测所有 HTTP 细节。
- `docs/api.md` 写清楚请求方法、路径、请求体、响应示例。
- 每个核心接口至少给一个 curl 示例。
- 运行 `go test ./...` 并记录结果。

### Day 44：Docker Compose 和部署入门

- 写 Dockerfile 构建 Go 服务。
- docker-compose 包含 api、mysql、redis 三个服务。
- MySQL 和 Redis 的地址从环境变量或配置文件读取。
- API 服务依赖 MySQL 和 Redis，但代码里仍要做连接失败处理。
- 使用 `docker compose up` 验证三个服务能一起启动。

### Day 45：项目收尾和复盘

- README 写清楚项目介绍、功能列表、技术栈、启动方式。
- 整理接口文档，确保别人照着文档能调用接口。
- 写一份复盘：最难的 10 个问题和解决方式。
- 检查是否还有硬编码密码、无用代码、无法运行的示例。
- 最后打 tag：`git tag v0.1.0`。

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
