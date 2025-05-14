class person{
    constructor(name,age,gender){
        this.Name=name;
        this.age=age;
        this.gender=gender;
    }

     data=()=>{
        return `Name: ${this.Name}, Age:${this.age}, Gender: ${this.gender}`;
    }
}


const btnInput=document.getElementById("btn");

btnInput.addEventListener("click",function(){
    let nameInput= document.getElementById('name').value;
let ageInput= document.getElementById('age').value;
let genderInput= document.getElementById('gender').value;
submitData(nameInput,ageInput,genderInput);
});

const submitData=(name,age,gender)=> {
    let user=new person(name,age,gender);
    document.getElementById("data").innerHTML= user.data();
    console.log(user.data());
}
