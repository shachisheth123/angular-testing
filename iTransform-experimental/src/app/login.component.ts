import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { User } from './User';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {


    constructor(private fb: FormBuilder) { }

    @Output() loggedIn = new EventEmitter<User>();

    loginForm: FormGroup;
    
    ngOnInit() {
        this.loginForm = this.fb.group({
            email: ["", [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")]],
            password: ["", [Validators.required, Validators.minLength(10)]]
        })
    }

    onSubmit() {
        console.log(this.loginForm.value);
        if (this.loginForm.valid) {
            this.loggedIn.emit(
                new User(this.loginForm.value.email, this.loginForm.value.password)
            );
        }
    }
}
