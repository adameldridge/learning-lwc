import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {

    // data binding example
    fullName="Zero to Hero";
    title = "aura";

    changeHandler(event){
        this.title = event.target.value;
    }

    // @track binding example
    @track 
    address={
        city:"Melbourne",
        postcode: "BS2 9UG",
        country: "United Kingdom"
    }

    trackHandler(event){
        this.address.city = event.target.value;
        // instead of @track, can use spread operator to create new copy of object
        // this.address = {...this.address, "city":event.target.value};
    }

    // getter example
    users = ["john", "smith", "nik"];
    num1 = 10;
    num2 = 20;

    get firstUser(){
        return this.users[0].toUpperCase();
    }

    get multiply(){
        return this.num1 * this.num2;
    }
}