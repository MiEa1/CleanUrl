# 🧹 CleanUrl · 链接净化插件

> Clean suspicious or obfuscated links from your clipboard — restore real URLs with one click!

CleanUrl 是一个浏览器插件（适用于 Microsoft Edge 和 Chromium 内核的 Chrome 浏览器），用于将经过“隐写”处理的 URL 还原为可访问的原始链接。

---

## ✨ 功能 Features

- ✅ 替换链接中的 **全角句号（“。”）为英文句号（"."）**
- ✅ 删除链接中的 **干扰字符“删”**
- 📋 支持 **净化剪切板内容**
- 🚀 支持 **净化并直接访问** 链接
- 🌐 **国际化支持：简体中文 / 繁體中文 / English**

---

## 🖥️ 示例 Example

### 原始剪贴板内容：ht删tp：//w删ww。exa删mple。co删m
### 净化后自动转换为：http://www.example.com


---

## 📦 安装 Installation

### ✅ 开发者模式加载（适用于 Edge / Chrome）

1. 克隆或下载此仓库
2. 打开浏览器地址栏访问：`edge://extensions` 或 `chrome://extensions`
3. 开启右上角的“开发者模式”
4. 点击“加载已解压的扩展程序”
5. 选择 `CleanUrl/` 文件夹即可

---

## 🧪 使用 Usage

1. 点击扩展图标，打开插件面板
2. 粘贴含有“删”或“。”字符的链接到剪贴板
3. 点击：
   - 🧹【净化剪切板】：净化链接并复制回剪贴板
   - 🚀【净化并访问】：直接跳转访问净化后的链接

---

## 🌍 多语言支持

插件将根据浏览器语言自动显示界面文字：

- 🇨🇳 简体中文（zh-CN）
- 🇹🇼 繁體中文（zh-TW）
- 🇺🇸 English（en）

---

## 🧩 权限说明

- `clipboardRead`, `clipboardWrite`：读取和写入剪切板内容
- `tabs`：打开新标签页访问净化后的链接
- `scripting`：用于后续扩展（保留）

---

## 📁 项目地址 Project Repo

[👉 GitHub.com/miea1/CleanUrl](https://github.com/miea1/CleanUrl)

---

## 📜 License

MIT License

---

Made with ❤️ by [MieaGo](https://github.com/miea1)

