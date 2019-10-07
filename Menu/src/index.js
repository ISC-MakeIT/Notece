import TimeLine from './TimeLine';
import Comment from './Comment';
import Confirm from './Confirm';

const timeline = new TimeLine();
const comment = new Comment();
const confirm = new Confirm();
if (localStorage.getItem('data') === null) {
    localStorage.setItem('data', JSON.stringify(timelineLog));
}
const data = localStorage.getItem('data');
timeline.display(JSON.parse(data));

document.getElementById('newNote').addEventListener('click', () => {
    confirm.display();
});

document.getElementById('timeline-group').addEventListener('click', () => {
    timeline.display(JSON.parse(data));
});
document.getElementById('timeline-comment').addEventListener('click', () => {
    comment.display(timelineComment);
});
