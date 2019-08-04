const batam = 'belajar javascript dasar'
console.log (batam)

const A = 'saya belajar'
const B = 'saya belajar 1'
const C =`${A} ${B}` //jangan pakai petik tpi bektik
console.log(C)

const angkah1 = 10
const angkah2 = 20 
const hasil =(angkah1+angkah2)
console.log(hasil)


const E= true
console.log(E)

const data=['jeko','Budi','Cicak','Doni']
console.log(data[2])

var number = 5 
var resutl = (number==4)
var resutl = (number == 5 )
var resutl = (number == 5 )
console.log(resutl)

const kalkulatorA= 100
const kalkulatorB= 200
const hasil1 = (kalkulatorA + kalkulatorB)
console.log(hasil1)

let grade = window.prompt("what's your grade");
let  myGrade="";
//check if grade is an a,b,c,d,or f 
if (grade >=90){
    myGrade ="A";
}else if (grade >= 80){
    myGrade="B";
}else if (grade >= 70){
    myGrade="C";
}else if (grade >= 60){
    myGrade="D";
}else {
    myGrade="F";
}
console.log(`my grade is ${myGrade}`);