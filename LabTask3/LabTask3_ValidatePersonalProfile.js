function validate(event) {
    event.preventDefault();

    let username = document.getElementById('username').value
    let email = document.getElementById('email').value
    let gender = document.querySelector('input[name="gender"]:checked');
    let dobD = document.getElementById('dobD').value
    let dobM = document.getElementById('dobM').value
    let dobY = document.getElementById('dobY').value
    let bld = document.getElementById('bld').value
    let pp = document.getElementById('pp').value

    if (username == "") {
        let mssg = document.getElementById('usernameMssg')
        mssg.style.color = "red";
        mssg.innerHTML = "Please enter username first!"
    }
    else {
        username.length < 10
            ? document.getElementById('usernameMssg').innerHTML = "Username must be minimum 10 characters!"
            : document.getElementById('usernameMssg').innerHTML = "";
    }

    if (email == "") {
        let mssg = document.getElementById('emailMssg')
        mssg.innerHTML = "Please enter email!"
    }
    else {
        !email.includes('@') || !email.includes('.')
            ? document.getElementById('emailMssg').innerHTML = "Please enter valid Email!<br>Hint: example@gmail.com"
            : document.getElementById('emailMssg').innerHTML = "";
    }

    if (!gender) {
        let mssg = document.getElementById('genderMssg')
        mssg.innerHTML = "Please select your gender!"
    }
    else {
        document.getElementById('genderMssg').innerHTML = ""
    }

    if (dobD == "" || dobM == "" || dobY == "") {
        let mssg = document.getElementById('dobMssg')
        mssg.innerHTML = "Please enter full date of birth!"
    }
    else {
        if (dobD < 1 || dobD > 31)
            document.getElementById('dobMssg').innerHTML = "Invalid day!"
        else if (dobM < 1 || dobM > 12)
            document.getElementById('dobMssg').innerHTML = "Invalid month!"
        else if (dobY < 1900 || dobM > 2025)
            document.getElementById('dobMssg').innerHTML = "Invalid year!"
        else
            document.getElementById('dobMssg').innerHTML = ""
    }

    if (bld == "") {
        let mssg = document.getElementById('bldMssg')
        mssg.innerHTML = "Please select blood group!"
    }
    else
        document.getElementById('bldMssg').innerHTML = ""

    if (pp == "") {
        let mssg = document.getElementById('ppMssg')
        mssg.innerHTML = "Please upload your photo!"
    }
    else
        document.getElementById('ppMssg').innerHTML = ""
}

// function clear() {
//     document.getElementById('username').value = "";
//     document.getElementById('email').value = "";
//     document.getElementById('dobD').value = "";
//     document.getElementById('dobM').value = "";
//     document.getElementById('dobY').value = "";
//     document.getElementById('bld').value = "";
//     document.getElementById('pp').value = "";

//     document.getElementById('genderM').checked = false;
//     document.getElementById('genderF').checked = false;
//     document.getElementById('genderO').checked = false;

//     let degrees = document.getElementsByName('degree');
//     for (let i = 0; i < degrees.length; i++) {
//         degrees[i].checked = false;
//     }

//     document.getElementById('usernameMssg').innerHTML = "";
//     document.getElementById('emailMssg').innerHTML = "";
//     document.getElementById('genderMssg').innerHTML = "";
//     document.getElementById('dobMssg').innerHTML = "";
//     document.getElementById('bldMssg').innerHTML = "";
//     document.getElementById('ppMssg').innerHTML = "";
// }

// let username = document.getElementById('username').value
// let email = document.getElementById('email').value
// let gender = document.querySelector('input[name="gender"]:checked');
// let dobD = document.getElementById('dobD').value
// let dobM = document.getElementById('dobM').value
// let dobY = document.getElementById('dobY').value
// let bld = document.getElementById('bld').value
// let pp = document.getElementById('pp').value