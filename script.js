document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.form');
    const result = document.querySelector('#result');
    const ageClock = document.querySelector('#ageClock');
    let intervalId;

    function updateAgeClock(birthYear, birthMonth, birthDay) {
        clearInterval(intervalId);

        const birthday = new Date(`${birthYear}-${birthMonth}-${birthDay}`);
        intervalId = setInterval(() => {
            const now = new Date();
            const age = now - birthday;
            const ageDate = new Date(age);
            ageClock.textContent = `You are ${ageDate.getFullYear() - 1970} years, ${ageDate.getMonth()} months, and ${ageDate.getDate() - 1} days old.`;
        }, 1000);
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const birthMonth = parseInt(document.querySelector('#birthMonth').value);
        const birthDay = parseInt(document.querySelector('#birthDay').value);
        const birthYear = parseInt(document.querySelector('#birthYear').value);

        updateAgeClock(birthYear, birthMonth, birthDay);

        const today = new Date();
        const currentMonth = today.getMonth() + 1;
        const currentDay = today.getDate();
        const currentYear = today.getFullYear();

        let age = currentYear - birthYear;

        if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
            age--;
        }

        result.textContent = `Your age is ${age} years.`;
    });
});
