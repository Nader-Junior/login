//global variables
var userName = document.getElementById("name");
userEmail = document.getElementById('email'),
    userPass = document.getElementById('pass'),
    err = document.getElementById('error'),
    note = document.getElementById('note'),
    success = document.getElementById('success'),
    userList = [];
//set array vlaue
if (!(localStorage.getItem('user') === null)) {
    userList = JSON.parse(localStorage.getItem('user'))
}
//sign up functions
function exist() {
    for (var i = 0; i < userList.length; i++) {
        if (userList[i].userEmail.toLowerCase() === userEmail.value.toLowerCase()) {
            return false
        }
    }
}
function create() {
    if (userName.value === '' || userEmail.value === '' || userPass.value === '') {
        err.classList.remove('d-none')
        success.classList.add('d-none')
        note.classList.add('d-none')
        return false
    } else {
        var user = {
            userName: userName.value,
            userEmail: userEmail.value,
            userPass: userPass.value
        };
        if (userList.length == 0) {
            userList.push(user);
            localStorage.setItem('user', JSON.stringify(userList))
            success.classList.remove('d-none')
            note.classList.add('d-none')
            err.classList.add('d-none')
            return true
        }
        
    }
    if (exist() == false) {
        note.classList.remove('d-none')
        success.classList.add('d-none')
        err.classList.add('d-none')
    } else {
        userList.push(user);
        localStorage.setItem('user', JSON.stringify(userList))
        success.classList.remove('d-none')
        err.classList.add('d-none')
        note.classList.add('d-none')
    }
}
//login functions
function existEmail() {
    for (var i = 0; i < userList.length; i++) {
        if (userList[i].userEmail.toLowerCase() === userEmail.value.toLowerCase() && userList[i].userPass.toLowerCase() === userPass.value.toLowerCase()) {
            localStorage.setItem('loginName', userList[i].userName)
            return true
        }
    }
}
function login() {
    if (userEmail.value === '' || userPass.value === '') {
        err.classList.remove('d-none')
        note.classList.add('d-none')
    }
    else {
        if (existEmail() == true) {
            location.replace('./pages/Home.html')
        } else {
            err.classList.add('d-none')
            note.classList.remove('d-none')

        }
    }
}
//logout fns
function logOut() {
    location.replace('../index.html')

}
//set home user name
for (var i = 0; i < userList.length; i++) {
    if (localStorage.getItem('loginName').toLowerCase() === userList[i].userName.toLowerCase()) {
        document.getElementById('hello').innerHTML = `Welcome ${localStorage.getItem('loginName')}`
    }
}













































