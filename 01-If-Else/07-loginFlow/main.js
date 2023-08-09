let username = prompt('Enter_Username')
let password = prompt('Enter_Password')

if(username === 'admin' && password === '1234') {
    alert('Hello_admin')
    
} else if (username === 'john' && password === 'qwerty') {
    alert('Hello_John')

} else if (username === '') {
    alert('username is required')
} else if (password === '') {
    alert('password is required')
} else {
    alert('invalid username or password')

}