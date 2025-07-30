function validate(event) {
    event.preventDefault()

    let username = document.getElementById('username').value
    let email = document.getElementById('email').value
    let gender = document.querySelector('input[name="gender"]:checked');
    let dobD = document.getElementById('dobD').value
    let dobM = document.getElementById('dobM').value
    let dobY = document.getElementById('dobY').value
    let bld = document.getElementById('bld').value
    let ssc = document.getElementById("ssc").checked
    let hsc = document.getElementById("hsc").checked
    let bsc = document.getElementById("bsc").checked
    let msc = document.getElementById("msc").checked
    let ppID = document.getElementById('ppID').value

    if (username == "") {
        let mssg = document.getElementById("usernameMssg")
        mssg.innerHTML = "Please enter your name first!"
    }
    else if (!(username[0] >= 'a' && username[0] <= 'z') ||
        (username[0] >= 'A' && username[0] <= 'Z')) {
        let mssg = document.getElementById("usernameMssg")
        mssg.innerHTML = "Name must start with a letter!"
    }
    else if (!username.includes(" ")) {
        let mssg = document.getElementById("usernameMssg")
        mssg.innerHTML = "Please enter at least 2 words!"
    }
    else {
        let valid = true;
        for (let i = 0; i < username.length; i++) {
            let ch = username[i];
            if (
                !((ch >= 'a' && ch <= 'z') ||
                    (ch >= 'A' && ch <= 'Z') ||
                    ch === '.' ||
                    ch === '-' ||
                    ch === ' ')
            ) {
                valid = false;
                break;
            }
        }
        if (!valid) {
            let mssg = document.getElementById("usernameMssg")
            mssg.innerHTML = "Name can only contain letters, dot (.), dash (-), or space!";
        }
        else {
            let mssg = document.getElementById("usernameMssg")
            mssg.innerHTML = "";
        }
    }

    if (email == "") {
        let mssg = document.getElementById("emailMssg")
        mssg.innerHTML = "Please enter email!"
    }
    else {
        let mssg = document.getElementById("emailMssg")
        !email.includes('@') || !email.includes('.')
            ? mssg.innerHTML = "Please enter valid Email!<br>i.e: anything@example.com"
            : mssg.innerHTML = "";
    }

    if (!gender) {
        let mssg = document.getElementById('genderMssg')
        mssg.innerHTML = "Please select your gender!"
    }
    else {
        let mssg = document.getElementById('genderMssg')
        mssg.innerHTML = ""
    }

    if (dobD == "" || dobM == "" || dobY == "") {
        let mssg = document.getElementById('dobMssg')
        mssg.innerHTML = "Please enter full date of birth!"
    }
    else {
        let mssg = document.getElementById('dobMssg')
        if (dobD < 1 || dobD > 31)
            mssg.innerHTML = "Invalid day!"
        else if (dobM < 1 || dobM > 12)
            mssg.innerHTML = "Invalid month!"
        else if (dobY < 1900 || dobM > 2016)
            mssg.innerHTML = "Invalid year!"
        else
            mssg.innerHTML = ""
    }

    if (bld == "") {
        let mssg = document.getElementById('bldMssg')
        mssg.innerHTML = "Please select blood group!"
    }
    else {
        let mssg = document.getElementById('bldMssg')
        mssg.innerHTML = ""
    }

    if (!ssc && !hsc && !bsc && !msc) {
        let mssg = document.getElementById('dMssg')
        mssg.innerHTML = "At least one of the degrees has to be selected!"
    }
    else {
        let mssg = document.getElementById('dMssg')
        mssg.innerHTML = ""
    }

    if (ppID == "") {
        let mssg = document.getElementById('ppMssg')
        mssg.innerHTML = "Please upload your photo!"
    }
    else {
        let mssg = document.getElementById('ppMssg')
        mssg.innerHTML = ""
    }
}