import TimeLine from './TimeLine';

const timeline = new TimeLine();
if (localStorage.getItem('data') === null) {
    localStorage.setItem('data', JSON.stringify(timelineLog));
}
const data = localStorage.getItem('data');
timeline.display(JSON.parse(data));
document.getElementById('newNote').addEventListener('click', () => {
    window.location.href = '../../Note/html/index.html';
});
