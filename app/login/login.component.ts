import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'login',
    templateUrl : 'app/login/login.component.html',
    styleUrls : ['app/login/login.component.css']
})
export class LoginComponent implements OnInit {

    username: String;
    password: String;
    
    constructor() {}

    ngOnInit() {

    }

    onClick(){
        alert(this.username);
    }
}

