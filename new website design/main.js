// Execute on window load
window.addEventListener('load', () => {
    // needs to be smarter
    // let aboutMeEle = document.getElementById('about-me');

    // window.addEventListener('scroll', (e) => {
    //     e.preventDefault();
    //     aboutMeEle.scrollIntoView({behavior: "smooth"});
    // })

    document.getElementById('age').innerHTML = calcAge(1999, 08, 02);
    document.getElementById('year').innerHTML = yearNow();
});
// Functions
function calcAge(year, month, day) {
    let dateOfBirth = moment([year, month, day]);

    let age = moment().diff(dateOfBirth, 'years');

    return age;
}

function yearNow() {
    let date = new Date();

    return date.getFullYear();
}