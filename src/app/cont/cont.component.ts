import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactService } from './contact.service';
import { User } from './user';

@Component({
  selector: 'app-cont',
  templateUrl: './cont.component.html',
  styleUrls: ['./cont.component.css']
})
export class ContComponent implements OnInit {
 


  @ViewChild('userForm') userForm: NgForm;
users: User[] = [];
editmode = false;
edituserId:any;
show:boolean = false;
  constructor(private contactservice: ContactService, private http:HttpClient) { }

  ngOnInit(): void {
  this.getData()
  }


 onAdduser(userdata: User) {

 if(this.editmode) {
   this.http.put<User>('https://contact-d50df-default-rtdb.firebaseio.com/contact/'+this.edituserId+'.json', userdata).subscribe(res => {
     console.log(res);
     this.getData();
     this.editmode = false;
     this.userForm.reset();
   })
}else {
  if(this.userForm.valid) {
    this.show = true
  this.contactservice.addData(userdata).subscribe(res => {
    console.log(res);
    this.getData();
    this.userForm.reset();
  })
}
}
 }


getData() {
  this.show = true
  this.contactservice.getData().subscribe(res => {
    this.show = true;
    const data = JSON.stringify(res);
    this.users = JSON.parse(data)
    console.log(data);
    this.show = false;
  })
}

deletedatas(userId) {
  if(confirm('do you want to delete the contact')) {
    this.contactservice.deletedata(userId).subscribe(() => {
      this.getData();
    })
  }
}

editdata(userId:any, index:any) {
  this.show = false
  console.log(userId);
  this.editmode = true;
  this.edituserId = userId
  this.userForm.setValue({
    name: this.users[index].name,
    email: this.users[index].email,
    phone: this.users[index].phone
  })
}

}
