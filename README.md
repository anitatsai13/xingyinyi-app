# 形音義辨識學習

單一自包含 HTML 的國文**形近字／多音字**辨識學習網頁 —— 瀏覽學習、形近字選字測驗、注音測驗、會考題、錯題本、雲端會員(跨裝置同步錯題)。收錄國中國文 1上～3上，另有「會考攻略」冊別(六單元，含 288 題會考題)。

線上版：https://anitatsai13.github.io/xingyinyi-app/

## 檔案
- `index.html` —— **App 本體**(所有資料、程式、樣式都內嵌;離線可開,不需安裝任何東西)。
- `manifest.webmanifest`、`icon.svg` —— PWA 資訊與圖示(可「加到主畫面」當 App 用)。
- `sw.js` —— 離線快取。網頁本體「網路優先」(有網路就拿最新版)，其他檔案快取優先。
- `製作方法.md` —— 架構、資料格式、測驗引擎與會考攻略匯入流程的完整說明。

## 修改
用文字編輯器打開 `index.html` 改即可,存檔後用瀏覽器開就能測試。改版時順手把 `sw.js` 第一行的快取版本號(`xingyinyi-vN`)加 1。

## 部署
- **GitHub Pages**：push 到 `main` 就會自動更新線上版(約 1 分鐘)。
- **Netlify**(備援)：把 `index.html` 拖到該站台的 Deploys 頁面即可更新。

> 資料與建置腳本(parse_xyy.py / parse_pdf.py / build_xyy.py / 各 .json / 原始 .doc/.pdf)存放在作者本機的「形音義_建置工具」資料夾;此 repo 只放最終成品 `index.html`。雲端會員用 Supabase(與字音字形 app 共用登入),HTML 內的 anon key 為公開安全金鑰(RLS 保護)。
