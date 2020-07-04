
var educationBtn = function () {
    document.querySelector('.education-monthly').style.display = 'block';
    document.querySelector('.education-yearly').style.display = 'block';
    document.querySelector('.business-monthly').style.display = 'none';
    document.querySelector('.business-yearly').style.display = 'none';
    document.querySelector('.plan-cost-monthly-education').style.display = 'block';
    document.querySelector('.plan-cost-yearly-education').style.display = 'block';
    document.querySelector('.plan-cost-monthly-business').style.display = 'none';
    document.querySelector('.plan-cost-yearly-business').style.display = 'none';
};

var businessBtn = function () {
    document.querySelector('.education-monthly').style.display = 'none';
    document.querySelector('.education-yearly').style.display = 'none';
    document.querySelector('.business-monthly').style.display = 'block';
    document.querySelector('.business-yearly').style.display = 'block';
    document.querySelector('.plan-cost-monthly-education').style.display = 'none';
    document.querySelector('.plan-cost-yearly-education').style.display = 'none';
    document.querySelector('.plan-cost-monthly-business').style.display = 'block';
    document.querySelector('.plan-cost-yearly-business').style.display = 'block';
};