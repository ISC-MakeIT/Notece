import Menu from './Menu';
class TimeLine extends Menu {
    constructor() {
        super();
    }
    display(logs) {
        this.DomReset();
        logs.forEach(log => {
            let logName = 'left-log';
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
