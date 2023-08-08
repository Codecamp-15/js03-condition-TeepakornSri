let garde = +prompt('Enternumber')

let massage = garde >= 80 ? "A"
: garde <= 79 && garde >= 70 ? "B" 
: garde <= 69 && garde >= 60 ? "C" 
: garde <= 59 && garde >= 50 ? "D" 
: garde < 50 ? "F":""

alert(massage)
