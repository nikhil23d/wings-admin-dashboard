import { Component, OnInit,  } from '@angular/core';
import {GithubUserService} from './github-user.service'

@Component({
  selector: 'app-github-user',
  templateUrl: './github-user.component.html',
  styleUrls: ['./github-user.component.css']
})
export class GithubUserComponent implements OnInit {

  

  users:String[] | undefined 

  constructor( private githubUserService:GithubUserService) { }

  ngOnInit(): void {
  }

getUsers(){

  this.githubUserService.getData().subscribe((data) => {
    console.log(data);
    this.users = data
  })
  
}

}
