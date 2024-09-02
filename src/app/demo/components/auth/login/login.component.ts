import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { LoginService } from 'src/app/mew/common/login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [
        `
            :host ::ng-deep .pi-eye,
            :host ::ng-deep .pi-eye-slash {
                transform: scale(1.6);
                margin-right: 1rem;
                color: var(--primary-color) !important;
            }
            .ng-valid[required],
            .ng-valid.required {
                border-left: 5px solid #42a948; /* green */
            }
            .ng-invalid:not(form) {
                border-left: 5px solid #a94442; /* red */
            }
        `,
    ],
})
export class LoginComponent {
    valCheck: string[] = ['remember'];

    // password!: string;

    @Input()
    remember: boolean = false;
    @Input()
    userName: string = '';
    @Input()
    password: string = '';
    constructor(
        public layoutService: LayoutService,
        private login: LoginService,
        private _http: HttpClient
    ) {}

    DisableButton = false;
    loginMe() {
        let user = this.userName;
        let pass = this.password;
        let remember = this.remember;
        this.DisableButton = true;
        console.log(this.userName);
        console.log(this.password);
        console.log(this.remember);
        let url: string = '/rest/login';
        let body = {
            userName: this.userName,
            pwd: this.password,
        };
        this._http.post(url, body).subscribe(
            (resp: any) => {
                console.log(resp);
                if (resp._errorMsg != null) {
                    alert(resp._errorMsg);
                    this.DisableButton = false;
                } else {
                    // console.log('done');
                    console.log(user);
                    console.log(pass);
                    console.log(remember);
                    this.login.logMe(user, pass, remember, '/');
                }
            },
            (error) => {
                //console.log(error);
                alert(error.message || error);
                this.DisableButton = false;
            }
        );
        this.password = '';
        this.userName = '';
    }

    logOut() {
        this.login.logOut();
    }
}
