import Menu from './Menu';
class Setting extends Menu {
    init() {
        this.createLabel(
            'url(../img/userinfo.png)',
            'userinfo',
        );
    }
    createLabel(label, labelId) {
        const div = document.createElement('div');
        div.style.backgroundImage = label;
        div.id = labelId;

        const fee = document.createElement('div');
        fee.id = fee;
        fee.textContent = "料金プラン詳細";
        fee.style.color = "#2d9cdb";

        this.root.appendChild(div);
        div.appendChild(fee);
    }
}

export default Setting;
