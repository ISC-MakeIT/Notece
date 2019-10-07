import TimeLine from './TimeLine';
import Profile from './Profile';

const timeline = new TimeLine();
if (localStorage.getItem('data') === null) {
    localStorage.setItem('data', JSON.stringify(timelineLog));
}
const data = localStorage.getItem('data');
timeline.display(JSON.parse(data));
document.getElementById('newNote').addEventListener('click', () => {
    window.location.href = '../../Note/html/index.html';
});

const profile = new Profile();
document.getElementById('profile').addEventListener('click', () => {
    profile.display();
}, false);
