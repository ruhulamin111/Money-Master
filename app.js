// calculation button add event
document.getElementById('calculation').addEventListener('click', function () {
    // input and calculation
    const income = document.getElementById('income').value;
    const food = document.getElementById('food').value;
    const rent = document.getElementById('rent').value;
    const clothes = document.getElementById('clothes').value;
    const totalExpensess = parseFloat(food) + parseFloat(rent) + parseFloat(clothes);
    const balance = income - totalExpensess;
    // error handle 
    if (income <= 0) {
        document.getElementById('error-income').style.display = 'block';
    }
    else if (food < 0) {
        document.getElementById('error-food').style.display = 'block';
    }
    else if (rent < 0) {
        document.getElementById('error-rent').style.display = 'block';
    }
    else if (clothes < 0) {
        document.getElementById('error-clothes').style.display = 'block';
    }
    else if (income < totalExpensess) {
        document.getElementById('error-expeness').style.display = 'block';
        document.getElementById('total-expensess').innerText = totalExpensess;
    }
    else {
        document.getElementById('error-income').style.display = 'none';
        document.getElementById('error-food').style.display = 'none';
        document.getElementById('error-rent').style.display = 'none';
        document.getElementById('error-clothes').style.display = 'none';

        document.getElementById('total-expensess').innerText = totalExpensess;
        document.getElementById('balance').innerText = balance;
    }
});
// save button add event
document.getElementById('saving').addEventListener('click', function () {
    const saving = document.getElementById('save-input').value;
    const income = document.getElementById('income').value;
    const balance = document.getElementById('balance').innerText;
    const parcentage = (parseFloat(saving) * parseFloat(income)) / 100;
    const remainBalance = parseFloat(balance) - parcentage;
    // error handle 
    if (balance < parcentage) {
        document.getElementById('error-saving').style.display = 'block';
    }
    else if (saving <= 0) {
        document.getElementById('error-saving').style.display = 'block';
    }
    else {
        document.getElementById('error-saving').style.display = 'none';
        document.getElementById('saving-amount').innerText = parcentage;
        document.getElementById('remaining-balance').innerText = remainBalance;
    }
});
