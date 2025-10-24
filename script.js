// 创建飘落花瓣
function createPetals() {
    const petalsContainer = document.getElementById('petals');
    const petalCount = 15;
    
    for (let i = 0; i < petalCount; i++) {
        const petal = document.createElement('div');
        petal.classList.add('petal');
        
        // 随机大小
        const size = Math.random() * 20 + 10;
        petal.style.width = `${size}px`;
        petal.style.height = `${size}px`;
        
        // 随机位置
        petal.style.left = `${Math.random() * 100}vw`;
        
        // 随机透明度
        petal.style.opacity = Math.random() * 0.5 + 0.3;
        
        // 随机动画时长
        const duration = Math.random() * 10 + 5;
        petal.style.animationDuration = `${duration}s`;
        
        // 随机延迟
        petal.style.animationDelay = `${Math.random() * 5}s`;
        
        petalsContainer.appendChild(petal);
    }
}



// 倒计时功能
function updateCountdown() {
    // 设置你们在一起的开始日期（修改为你们的纪念日）
    const startDate = new Date('2025-10-13 10:11:00');
    const now = new Date();
    
    const diffTime = Math.abs(now - startDate);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const diffHours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const diffMinutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
    const diffSeconds = Math.floor((diffTime % (1000 * 60)) / 1000);
    
    document.getElementById('days').textContent = diffDays;
    document.getElementById('hours').textContent = diffHours;
    document.getElementById('minutes').textContent = diffMinutes;
    document.getElementById('seconds').textContent = diffSeconds;
}

// 页面加载完成后初始化
window.addEventListener('load', () => {
    createPetals();
    updateCountdown();
    setInterval(updateCountdown, 1000);
});