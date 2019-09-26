import Menu from '../src/Menu';
import NewNote from '../src/newNote';
import Profile from '../src/Profile';
import Search from '../src/Search';
import Setting from '../src/Setting';
const menu = new Menu();
const newNote = new NewNote();
const profile = new Profile();
const search = new Search();
const setting = new Setting();
menu.MovePage(newNote);

document.getElementById('newNote').addEventListener('click', () => {
    menu.MovePage(newNote);
});

document.getElementById('Serach').addEventListener('click', () => {
    menu.MovePage(search);
});

document.getElementById('Profile').addEventListener('click', () => {
    menu.MovePage(profile);
});

document.getElementById('Setting').addEventListener('click', () => {
    menu.MovePage(setting);
});



