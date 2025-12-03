# ant landing page

這個專案現在使用 [Vite](https://vitejs.dev/) 作為開發與建置工具，並在 GitHub Actions 上建立「每個分支都可預覽」的 GitHub Pages 部署。

## 本機開發與建置

1. 安裝 Node.js 18 以上版本。
2. 安裝依賴：`npm install`
3. 啟動開發伺服器：`npm run dev`
4. 建置靜態檔案：`npm run build`（輸出在 `dist/`）。

> 如果開發環境的 npm registry 受限，可在命令後加入 `--registry=https://registry.npmjs.org` 或其他可用鏡像。

## GitHub Pages 分支預覽

- Workflow 位於 `.github/workflows/branch-preview.yml`，在每次 push 或 PR 觸發。
- 依序執行：
  1. 安裝依賴並建置 Vite 專案。
  2. 以目前分支名稱（`/` 會被轉成 `--`）建立對應資料夾。
  3. 使用 `peaceiris/actions-gh-pages` 將所有分支的建置結果維護在 `gh-pages` branch 下，並保留既有檔案。
- 部署完成後的預覽網址格式：

```
https://<你的 GitHub 使用者或組織>.github.io/<此 Repo 名>/<分支名稱轉換後>/
```

例如 feature 分支 `feature/new-ui` 會發布到：

```
https://<OWNER>.github.io/ant/feature--new-ui/
```

> 對 fork 來源的 PR，GitHub 提供的預設權限無法推送到 `gh-pages`，workflow 會自動跳過發佈步驟。
