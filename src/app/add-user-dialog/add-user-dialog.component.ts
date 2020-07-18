import { Component, OnInit, Inject,EventEmitter } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-user-dialog',
  templateUrl: './add-user-dialog.component.html',
  styleUrls: ['./add-user-dialog.component.css']
})
export class AddUserDialogComponent implements OnInit {
  userform: any;
  today = new Date();
  genderArray = [
    { val: 'Male' },
    { val: 'Female' }
  ];
  languageArray = [
    { val: 'Hindi' },
    { val: 'Marathi' },
    { val: 'English' },
    { val: 'Spanish' }
  ]
  public event: EventEmitter<any> = new EventEmitter();
  item: any; selecteddob= '';
  constructor(public dialogRef: MatDialogRef<AddUserDialogComponent>, private mFormBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.initForm();
  }
  initForm() {
      this.userform = this.mFormBuilder.group({
        'name': ['', [Validators.required]],
        'dob': ['', [Validators.required]],
        'languages': ['', [Validators.required]],
        'gender': ['', [Validators.required]],
        'about': ['', [Validators.required]]
    })
  }
  onCancelClick(): void {
    this.dialogRef.close();
  }
  saveUserButtonClicked() {
    this.userform.patchValue({ dob: this.getFormattedDate(this.selecteddob) });
    this.dialogRef.close(this.userform.value);
  }
  getFormattedDate(event) {
    if (event != '') {
      const date = new Date(event);
      return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
    }
    
  }
}
