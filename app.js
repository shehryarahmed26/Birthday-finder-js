
function calculateAge() {
    var birthdate = new Date(document.getElementById('birthdate').value);
    var today = new Date();

    var age = today.getFullYear() - birthdate.getFullYear();
    var monthDiff = today.getMonth() - birthdate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    }

    var nextBirthday = new Date(today.getFullYear(), birthdate.getMonth(), birthdate.getDate());
    if (today > nextBirthday) {
        nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
    }

    var daysUntilNextBirthday = Math.ceil((nextBirthday - today) / (1000 * 60 * 60 * 24));

    var result = "Your age is: " + age + " years. ";
    result += "There are " + daysUntilNextBirthday + " days left until your next birthday.";

    document.getElementById('result').innerText = result;
}
