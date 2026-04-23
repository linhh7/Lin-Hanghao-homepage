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

## Excel 多文件进度汇总器（独立 HTML）
工具文件：`tools/xlsx_progress_manager.html`

### 适用场景
- 你把多个数据文件发给不同人处理后，需要统一回收并汇总
- 你要自动识别未完成数据，并定位到“哪个文件、哪个 Sheet、哪一行哪一列”
- 你需要增加规则：同 A 且 D 不同，比较 C，保留 C 更高的那条
- 你要从 A 列中提取“服装类 / 食品 / 药品类”，并把其余数据单独导出
- A 列产品名是俄语时，也希望能按俄语词拆分并识别类别

### 功能
- 一次上传多个 `.xlsx` 文件
- 支持读取每个文件的第一个 Sheet（推荐）或所有 Sheet
- 状态统计：已完成 / 未完成 / 未识别
- 去重规则：同 A 且 D 不同 → 保留 C 值更高；同 A 且 D 相同 → 保留首条
- 分类提取：A 列命中“服装类 / 食品 / 药品类”会单独输出
- 俄语识别：自动提取 A 列里的俄语词，并用俄语词干匹配服装/食品/药品类别
- 即使不选状态列，也可单独执行“去重 + 分类提取”功能
- 导出能力：
  - `未完成清单_含定位.xlsx`
  - `多文件进度总报告.xlsx`（含总览、去重删除明细、未完成定位等）
  - `服装食品药品_分类命中.xlsx`
  - `不含服装食品药品_按文件拆分.zip`（每个源文件一个不含分类数据的 Excel）

### 使用方法
1. 双击打开 `tools/xlsx_progress_manager.html`
2. 选择多个 Excel 文件（.xlsx）
3. 选择读取方式（第一个 Sheet / 所有 Sheet）
4. 选择 A列、C列、D列（状态列可选，处理人列可选）
5. 设置已完成/未完成关键词
6. 点击“开始汇总统计”
7. 按需导出对应结果文件
