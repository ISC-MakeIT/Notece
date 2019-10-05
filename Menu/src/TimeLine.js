import Menu from './Menu';
class TimeLine extends Menu {
    constructor() {
        super();
        this.count = 0;
    }
    display(logs) {
        this.DomReset();
        logs.forEach(log => {
            let logName;
            if (this.count % 2) {
                logName = 'left-log';
            } else {
                logName = 'left-log';
            }
            const bg = document.createElement('div');
            bg.className = logName;
            this.createElement(
                'div',
                0,
                `${logName}-title`,
                `<p>${log.title}</p>`,
                bg
            );
            this.createElement(
                'div',
                0,
                `${logName}-explanation`,
                `<p>${log.explanation}</p>`,
                bg
            );
            this.createElement(
                'div',
                0,
                `${logName}-icon`,
                `<img src="${log.icon}">`,
                bg
            );
            this.createElement(
                'div',
                0,
                `${logName}-date`,
                `<p>${log.date}</p>`,
                bg
            );
            document.getElementById('contents').appendChild(bg);
            this.count++;
        });
    }
}
export default TimeLine;
