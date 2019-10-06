import TimeLine from './TimeLine';
// import timelineLog from './timeline-log';

const timeline = new TimeLine();
// timelineLog.forEach(log => {
// timeline.display(log);
timeline.display(timelineLog);
// });
document.getElementById('newNote').addEventListener('click', () => {
    window.location.href = '../../Note/html/index.html';
});
