/**
 * 邏輯 A：監控第一大題文字輸入
 */
function toggleSection2() {
  const nameInput = document.getElementById('DC名字');  // 確保 ID 與 HTML 一致
  const section2 = document.getElementById('section-2');

    // 判斷：如果有字且長度大於 0
  if (nameInput.value.trim().length > 0) {
    section2.classList.remove('hidden'); // 移除隱藏類別
  } else {
    section2.classList.add('hidden');    // 重新加入隱藏類別
  }
}

// 選擇性：防止瀏覽器記住輸入內容導致顯示錯誤
window.onload = toggleSection2;












/**
 * 邏輯 B：控制 3-2 題的聯動顯示
 * @param {boolean} show - 是否顯示
 */
function toggleSubQuestion(show) {
  const subQuestion = document.getElementById('sub-3-2');
  if (show) {
    subQuestion.classList.remove('hidden');
  } else {
    subQuestion.classList.add('hidden');
  }
}

/**
 * 邏輯 C：檢查第二大題是否完成（可選）
 * 你可以在這裡添加更多邏輯，例如所有子題答完才出現第三大題
 */
function checkSection2Complete() {
  console.log("使用者正在回答第二大題...");
}