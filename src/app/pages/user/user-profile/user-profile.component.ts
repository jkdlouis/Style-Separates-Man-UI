import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../../service/authentication.service";
import { User } from "../../../models/user.model";

@Component({
    selector: 'app-user-profile',
    templateUrl: 'user-profile.component.html',
    styleUrls: [ 'user-profile.component.sass' ]
})
export class UserProfileComponent implements OnInit {

    private firstName: string;
    private lastName: string;
    private email: string;
    private address: string;
    private city: string;
    private state: string;
    private zipcode: string;

    constructor(private authService: AuthService) {
    }

    ngOnInit() {
        this.authService.getUserProfile()
            .subscribe(
                (data: User) => {
                    this.firstName = data.firstName;
                    this.lastName = data.lastName;
                    this.email = data.email;
                    this.address = data.address;
                    this.city = data.city;
                    this.state = data.state;
                    this.zipcode = data.zipcode;
                }
            )

    }

}