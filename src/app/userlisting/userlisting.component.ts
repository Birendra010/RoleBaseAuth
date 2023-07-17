import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-userlisting',
  templateUrl: './userlisting.component.html',
  styleUrls: ['./userlisting.component.css']
})
export class UserlistingComponent {

constructor(private service:AuthService){
  this.loadUser()
}
userList:any;
dataSource:any;
displayedColums:string[]=['username','name','email','role','status','action']
loadUser(){
  this.service.getAll().subscribe(res=>{
    this.userList= res;
    this.dataSource = new MatTableDataSource(this.userList);
  })

}

updateuser(id:any){
  console.log(id)
}


}
