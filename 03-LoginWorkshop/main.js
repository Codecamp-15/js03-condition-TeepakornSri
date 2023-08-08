let username = prompt('Enter Username')

let user = username;

// if(user === '' || user === null || user === NaN || user === undefined){
//     let user = 'guest'
// } else if(user === 'codecamp') {
//     let password = +prompt('Enter Password') 
// } else if(password = 123456) {
//     let user = 'codecamp'
// } else if(password != 123456) {
//     alert('Wrong password')
// } else {
//     let user = 'guest'

// }

// alert(`welcome ${user}`)
// console.log(user)

if(user === '' || user === null || user === NaN || user === undefined){
    let user = 'guest'
} else if(user === 'codecamp') {
    let password = +prompt('Enter Password')
    if(password === 123456){
        alert(`welcome ${user}`)
     } else {
        alert('Wrong password')
    }

}