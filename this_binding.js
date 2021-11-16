// console.log(this);
// console.log('Tong Duc Nam');

// function hello(){
//     var name = 'Tong Duc Nam';
//     console.log('Hello '+name);
//     console.log(`Hello ${name}`);
// }
// // hello();
// var person = {
//     name: 'Tong Duc Nam',
//     age: 22,
//     info: function(){
//         // var that = this;
//         // setTimeout(()=>{
//             console.log('Toi ten la: '+this.name+ ' tuoi '+this.age);
//         // },200);
//     }
// }
// person.info();

// var person2 = {
//     id: 2,
//     name: 'Phuong Pham',
//     age: 22
// }
// person.info.bind(person2).call(person2);
// // var heelo = hello.bind(person2);
// var heelo = person.info.bind(person2);
// heelo();



class Person{
    constructor(id){
        this._id = id;
    }
    info(){
        console.log("ID: "+this._id);
    }
    infoArrow = ()=>{
        console.log("ID Arrow: "+this._id);
    }
}
let person1 = new Person(10);
// person1.info();
// person1.infoArrow();


setTimeout(function(){
    person1.infoArrow();
    person1.info();
},500)