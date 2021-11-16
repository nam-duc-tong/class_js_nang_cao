// ==================import and export ==============
export let User_name = "Javascript";
const numbers = [1,2,3,4];
function tong(x,y){
    console.log(x+y);
}
export default class Person{
    constructor(id,name){
        this.id = id;
        this.name = name;
    }
    infor(){
        console.log(this.id+" _ "+this.name);
    }
}
export{
    numbers as mangSo,//đổi tên mang numbers thành mangso
    tong
}