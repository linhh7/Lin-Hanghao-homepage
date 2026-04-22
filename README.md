# Lin Hanghao Homepage (Next.js + Tailwind)

## Local run
```bash
npm install
npm run dev
# open http://localhost:3000
```

## Replace images
Put your images in `/public`. Avatar path is `/头像.jpg` (replace this file).

## Deploy to Vercel
1. Create a new GitHub repo and push this folder.
2. Go to https://vercel.com → **New Project** → Import the repo.
3. Framework is auto-detected (Next.js). Click **Deploy**.
4. Done. You will get a public URL (e.g., https://your-project.vercel.app).

(Optional) Add a custom domain in Vercel's **Domains** tab.

## XLSX 智能拆分工具（独立 HTML）
工具文件：`tools/xlsx_splitter.html`

### 功能
- 按固定行数拆分（默认 200 行）
- 拆分文档数量不设上限（有多少数据就拆多少）
- A 列去重（A 列名称相同只保留第一条，删除后续重复行）
- 每个拆分文档都保留原始第一行为首行
- 页面显示统计结果：删除了多少、删除了哪些、在第几行、最终拆成多少个表格

### 使用方法
1. 双击打开 `tools/xlsx_splitter.html`
2. 点击选择 `.xlsx` 文件
3. 设置每个文档的行数（默认 200）
4. 点击“开始处理并下载”
5. 页面会显示统计信息，并可展开查看重复删除明细
6. 结果会自动打包下载为一个 ZIP（避免浏览器批量下载数量限制）

## Excel 数据进度管理器（独立 HTML）
工具文件：`tools/xlsx_progress_manager.html`

### 适用场景
- 数据量大（几千/上万条），需要快速知道“已完成 vs 未完成”
- 部分数据自己处理，部分分发给他人，需要按处理人统计
- 希望把“已完成”和“未完成”自动分开导出，减少手工筛选

### 功能
- 可选择任意工作表（Sheet）
- 可指定“状态列”和“处理人列”
- 自定义“已完成关键词”（例如：已完成、done）
- 自动统计：总数、已完成、未完成、未识别、完成率
- 按处理人生成完成率表格
- 一键导出：已完成数据、未完成数据、统计报表

### 使用方法
1. 双击打开 `tools/xlsx_progress_manager.html`
2. 选择 Excel 文件（.xlsx）
3. 选择工作表、状态列、处理人列（处理人可不选）
4. 设置“已完成/未完成”关键词
5. 点击“开始统计”查看结果
6. 点击导出按钮下载结果文件
