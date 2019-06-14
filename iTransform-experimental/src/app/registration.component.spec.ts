import { RegistrationComponent } from "./registration/registration.component";
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

describe ("RegistrationComponenet" , () => {

    let registrationComponent : RegistrationComponent ;
    let fixture: ComponentFixture<RegistrationComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [RegistrationComponent],
            imports: [ReactiveFormsModule, FormsModule]
        })
        fixture = TestBed.createComponent(RegistrationComponent);


        registrationComponent = fixture.componentInstance;
        registrationComponent.ngOnInit;
        
    })


})