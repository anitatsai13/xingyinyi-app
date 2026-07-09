# 形音義辨識學習

單一自包含 HTML 的國文**形近字／多音字**辨識學習網頁 —— 瀏覽學習、形近字選字測驗、注音測驗、錯題本、雲端會員(跨裝置同步錯題)。收錄國中國文 1上～2下。

## 檔案
- `index.html` —— **App 本體**(所有資料、程式、樣式都內嵌;離線可開,不需安裝任何東西)。

## 修改
用文字編輯器打開 `index.html` 改即可,存檔後用瀏覽器開就能測試。

## 部署
把 `index.html` 拖到 Netlify(該站台的 Deploys 頁面)即可更新。

> 資料與建置腳本(parse_xyy.py / parse_pdf.py / build_xyy.py / 各 .json / 原始 .doc/.pdf)存放在作者本機的「形音義_建置工具」資料夾;此 repo 只放最終成品 `index.html`。雲端會員用 Supabase(與字音字形 app 共用登入),HTML 內的 anon key 為公開安全金鑰(RLS 保護)。
