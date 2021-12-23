import { Component, Input, OnInit, ViewChild,  } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {GithubUserService} from './github-user.service'

@Component({
  selector: 'app-github-user',
  templateUrl: './github-user.component.html',
  styleUrls: ['./github-user.component.css']
})
export class GithubUserComponent implements OnInit {

  @Input() users: string[] | any;

  displayedColumns = ['id', 'avatar_url', 'login', 'node_id', 'type', 'site_admin', 'url',   ];
  dataSource!: MatTableDataSource<any>;
  @ViewChild('paginator') paginator! : MatPaginator;
  @ViewChild (MatSort) matSort! : MatSort;

  // users:String[] | undefined 

  constructor( private service :GithubUserService) { }

  ngOnInit() {
    this.service.getData().subscribe((response) => {
      console.log(response);
      this.users = response
      this.dataSource = new MatTableDataSource(response);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.matSort;
    })
  }

getUsers(){

  // this.service.getData().subscribe((response) => {
  //   console.log(response);
  //   this.users = response
  //   this.dataSource = new MatTableDataSource(response);
  //   this.dataSource.paginator = this.paginator;
  //   this.dataSource.sort = this.matSort;
  // })
  
}
filterData($event : any){
  this.dataSource.filter = $event.target.value;
}

}
