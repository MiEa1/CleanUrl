// 净化函数：替换全角句号为英文句号，去除“删”字符
function cleanUrlText(text) {
  return text.replace(/。/g, ".").replace(/删/g, "").trim();
}

// 读取剪切板 → 净化 → 写回剪切板
async function cleanClipboardOnly() {
  try {
    const originalText = await navigator.clipboard.readText();
    const cleanedText = cleanUrlText(originalText);

    await navigator.clipboard.writeText(cleanedText);
    alert("净化成功，已复制到剪切板：\n" + cleanedText);
  } catch (err) {
    alert("操作失败：" + err.message);
  }
}

// 读取剪切板 → 净化 → 打开新标签页访问链接
async function cleanAndVisitFromClipboard() {
  try {
    const originalText = await navigator.clipboard.readText();
    const cleanedText = cleanUrlText(originalText);

    if (/^https?:\/\//.test(cleanedText)) {
      chrome.tabs.create({ url: cleanedText });
    } else {
      alert("净化后的内容不是有效网址：\n" + cleanedText);
    }
  } catch (err) {
    alert("访问失败：" + err.message);
  }
}

// 国际化填充页面文本
function i18n(id) {
  return chrome.i18n.getMessage(id);
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("extTitle").innerText = i18n("extName");
  document.getElementById("cleanClipboard").innerText = i18n("cleanClipboard");
  document.getElementById("cleanAndVisit").innerText = i18n("cleanAndVisit");
  document.getElementById("projectLink").innerText = i18n("projectLink");

  document.getElementById("cleanClipboard").addEventListener("click", cleanClipboardOnly);
  document.getElementById("cleanAndVisit").addEventListener("click", cleanAndVisitFromClipboard);
});
