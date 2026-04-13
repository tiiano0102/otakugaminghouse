function showPage(pageId) {
    // --- 1. 切換分頁內容 (原本的邏輯) ---
    // 假設你所有的分頁內容 class 都是 .page-content
    const pages = document.querySelectorAll('.page-content');
    pages.forEach(page => {
        page.style.display = 'none'; // 隱藏所有頁面
    });
    
    // 顯示被點選的那一頁
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.style.display = 'block';
    }

    // --- 2. 切換導覽列亮起狀態 (格式同步) ---
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        item.classList.remove('active'); // 把所有人的灰色背景拿掉
    });

    // 關鍵：將點擊的那個人加上 .active
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }
}