const typingDemo = document.getElementById('typing-demo'); // 获取显示打字的元素
const textArray = ['你好，世界！', '欢迎来到我的第二个网站。', '这是一个打字效果演示。', '网页制作还在学习中！', '我会努力加油的！！！']; // 设置文本数组
let index = 0; // 初始化索引
let currentText = ''; // 当前显示的文本
let isTyping = true; // 打字还是删除

function type() {
    if (isTyping) {
        // 如果是打字状态
        currentText += textArray[index].charAt(currentText.length); // 添加下一个字符
        typingDemo.textContent = currentText; // 更新显示文本
        if (currentText === textArray[index]) {
            // 如果文本打完，切换到删除状态
            isTyping = false;
        }
    } else {
        // 如果是删除状态
        currentText = currentText.slice(0, -1); // 删除最后一个字符
        typingDemo.textContent = currentText; // 更新显示文本
        if (currentText === '') {
            // 如果文本删除完毕，随机选择下一个文本，并切换到打字状态
            index = Math.floor(Math.random() * textArray.length); // 随机选择索引
            isTyping = true;
        }
    }

    setTimeout(type, isTyping ? 150 : 50); // 设置打字和删除的时间间隔
}

type(); // 开始打字效果