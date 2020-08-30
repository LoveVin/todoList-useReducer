const ajax = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
                {text: '写语文作业', isComplete: false},
                {text: '写数学作业', isComplete: true},
                {text: '背单词', isComplete: true},
                {text: '整理笔记', isComplete: false},
            ])
        }, 1000);
    });
};

export default ajax;