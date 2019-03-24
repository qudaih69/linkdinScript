var simulateClick = function (elem) {
    // Create our event (with options)
    var evt = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
    });
    // If cancelled, don't dispatch our event
    var canceled = !elem.dispatchEvent(evt);
};


var olderThan = prompt('Combien de temps maximum voulez vous garder ?');
olderThanType = 'jours';
if (olderThan > 30) {
    olderThan /= 30;
    olderThan = parseInt(olderThan, 10);
    olderThanType = 'mois';
}
let list = document.querySelector('.mn-invitation-list');
for (let i = 0; i < list.children.length; i++) {
    let element = list.children[i];
    let timeAgo = element.querySelector('div.invitation-card__info-wrapper .time-ago').innerText;

    let timeType = timeAgo.match(/jours?|mois|heures?|minutes?/)[0];

    let time = parseInt(timeAgo.replace( /^\D+/g, ''));
    console.log('time ago ', time, timeType, timeAgo);
    console.log('older', olderThanType, timeType);
    if (olderThanType === timeType && olderThan < time) {
        console.log('yeahhh find item', timeAgo);
        simulateClick(element.querySelector('.invitation-card__action-btn'))
    }
}
