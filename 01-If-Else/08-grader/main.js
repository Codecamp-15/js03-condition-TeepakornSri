let grade = +prompt('Input')

if (grade >= 80) {
    alert('A')
} else if (grade <= 79 && grade >= 70 ) {
    alert('B')
} else if (grade <= 69 && grade >= 60 ) {
    alert('C')
} else if (grade <= 59 && grade >= 50 ) {
    alert('D')
} else if (grade < 50) {
    alert('F')
}