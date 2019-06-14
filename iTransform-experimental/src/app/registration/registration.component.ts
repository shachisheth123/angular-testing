import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

    constructor(private fb :FormBuilder){}

    registrationForm : FormGroup;

    ngOnInit(){

        this.registrationForm=this.fb.group({

            fullname:["",[Validators.required]],
            email: ["", [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]],
            password: ["", [Validators.required, Validators.minLength(10)]]
        })
    }
}


