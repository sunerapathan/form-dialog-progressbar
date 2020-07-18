import { Component, OnInit , ViewChild, AfterViewInit,EventEmitter, Output} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MatDialog, MatPaginator } from '@angular/material';
import { AddUserDialogComponent } from '../add-user-dialog/add-user-dialog.component';
export interface PeriodicElement {
  name: string;
  dob: string;
  languages: string;
  gender: string;
}
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, AfterViewInit {
  allUserDetails: any;
  displayedColumns: string[] = ['name','dob', 'languages', 'gender'];
  dataSource = new MatTableDataSource<PeriodicElement>(this.allUserDetails);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  private _jsonURL = 'assets/users.json';

  @Output() totalCount = new EventEmitter<any>(); 

  constructor(private http: HttpClient, public mDialog: MatDialog) {
    this.getJSON().subscribe(data => {
     this.allUserDetails = data;
     this.dataSource.data = this.allUserDetails;
     this.checkGenderCount();
    });
  }


  public getJSON(): Observable<any> {
    return this.http.get(this._jsonURL);
  }

  ngOnInit() {
   
  }
  checkGenderCount() {
   // console.log('* data array ***' + JSON.stringify(this.allUserDetails));
    this.totalCount.emit(this.allUserDetails);
  }
  ngAfterViewInit() {   
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  onAddUserButtonClicked() {
    const dialogRef = this.mDialog.open(AddUserDialogComponent, {
      panelClass: 'standard-modalbox',
      data: { }
    });
    dialogRef.afterClosed().subscribe(result => {
     if (result) {
     this.allUserDetails.push(result);
     this.dataSource.data = this.allUserDetails;
     this.totalCount.emit(this.allUserDetails);
     }
    });
  }
}
