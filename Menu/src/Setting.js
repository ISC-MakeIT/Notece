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

        const mail = document.createElement('div');
        mail.id = "mail";
        mail.className = "text";
        mail.addEventListener('click', () => {
            let get = document.getElementById('mail');
            if (get.className == 'text') {
                get.className = "box";
                const cont = get.textContent;
                get.innerHTML = '<input type="text" id="address" value ="' + cont + '">';
            }
        });
        mail.addEventListener('keypress', () => {
            if (window.event.keyCode == 13) {
                let set = document.getElementById('mail');
                set.className = "text";
                let press = document.getElementById('address').value;
                console.log(press);
                set.innerHTML = '<div>' + press + '</div>';
            }
        });

        /*
        const fee = document.createElement('div');
        fee.id = fee;
        fee.textContent = "料金プラン詳細";
        fee.style.color = "#2d9cdb";


        div.appendChild(fee);
        */
        this.root.appendChild(div);
        div.appendChild(mail);
    }
}

export default Setting;
