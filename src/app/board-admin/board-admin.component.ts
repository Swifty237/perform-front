import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { OtherSpringService } from '../common/services/spring-services/other-spring.service';

@Component({
  selector: 'app-board-admin',
  templateUrl: './board-admin.component.html',
  styleUrls: ['./board-admin.component.scss']
})
export class BoardAdminComponent implements OnInit {


  displayedColumns: string[] = ['user', 'email', 'roles'];
  dataSource = new MatTableDataSource<any>();

  constructor(private otherSpringService: OtherSpringService) {

    this.otherSpringService.getUserAccounts().subscribe({
      next: data => {
        console.log(data);
      },

      error: err => {
        console.log(err);
      }
    })

    this.otherSpringService.getExistingRoles().subscribe({
      next: data => {
        console.log(data);
      },

      error: err => {
        console.log(err);
      }
    })
  }

  ngOnInit(): void {

  }
}