import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
// import { Console } from 'console';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  UserData: any[] = [];
  isSubmit: boolean = false;


  constructor() {
    // const getdata = localStorage.getItem('name');
    // if (getdata) {
    //   const realdata = JSON.parse(getdata);
    //   this.UserData = realdata;
    //   console.log(this.UserData)
    // }
  }

  formdata(form: any) {
    if (!form.valid) {
      this.isSubmit = true;
      return
    }
    this.UserData.push(form.value);
    console.log(this.UserData)
    form.reset()
  }

  remove(id: number) {
    this.UserData = this.UserData.filter(item => item.id !== id)
  }

  edit_form(index: any) {
    console.log(index.value)

  }

  localstorageGet() {
    const getdata: any = localStorage.getItem('name');
    const realdata = JSON.parse(getdata);
    this.UserData = realdata;
  }
  localStorageSet() {
    const setdata = [{ name: "Manjeet Malhotra", phone: 8405972716, email: "manjeetkumar@gmail.com" }];
    localStorage.setItem("name", JSON.stringify(setdata))
    console.log(setdata)
  }


}


