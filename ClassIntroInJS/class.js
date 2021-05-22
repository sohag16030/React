 class Profession{
   /*  constructor(){
        this.occupation = 'teacher';
    } */
    occupation = 'teacher';
  /*   printProfession(){
        console.log(`I am a ${this.occupation}`);
    } */
    printProfession=()=>{
     console.log(`I am a ${this.occupation}`);
    }
}
class Person extends Profession{
   /*  constructor(){
        super();
        this.Name = 'Shohag';       
    } */
    Name = 'Shohag';
   /*  printName(){
        console.log(`I am ${this.Name}`);
    } */
    printName=()=>{
        console.log(`I am ${this.Name}`);
    }
}

let person = new Person();
person.printName();
person.printProfession();

// Spread and Rest Operators
const numbers = [1,2,3];
const newNumbers = [...numbers,4];
console.log(newNumbers);
const filter = (...numbers)=>{
    return numbers.filter(el=>el ===6)
}
console.log(filter(4,5,6));
const Jonas ={
    Name : 'Jonas'
}

const newJonas={
    ...Jonas,
    Age:27
}
console.log(newJonas);

//Destructing
const args = [1,2,3];
[num1,,num2]=args;
console.log(num1,num2);

//Reference and Primitive types Refresher

const Monas = {
    name : `Jonas`,
    lastName : `william`
}
const MonasTwin = Jonas;
MonasTwin.lastName = `Sallon`;
console.log(MonasTwin);

//Refreshing Array Function

const arr = [1,2,3];
const doubleArr = arr.map((a)=>{
    return a*2;
})
console.log(arr);
console.log(doubleArr);

