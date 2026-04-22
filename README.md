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

## XLSX 拆分小工具（按 200 行自动分档）
如果你想“一键把 `.xlsx` 文件（跳过第一行）按每 200 行拆成多个文档”，可以直接打开：

- `tools/xlsx_splitter.html`

### 使用方法
1. 双击打开 `tools/xlsx_splitter.html`。
2. 选择你的 `.xlsx` 文件。
3. 设置每份文档行数（默认 200）。
4. 点击 **开始拆分并下载**。

默认会读取第一个工作表，把首行作为每个拆分文件的第一行，后续数据按固定行数拆成多个 `.xlsx` 文件并自动下载。
