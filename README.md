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
