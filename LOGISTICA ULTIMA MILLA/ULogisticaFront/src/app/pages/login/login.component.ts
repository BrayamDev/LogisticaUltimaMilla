import { Component, OnInit } from '@angular/core';
import { IonicModule } from  '@ionic/angular';
import { Router } from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../Services/api.service';
import { IRequestLogin } from '../../models/RequestILogin.Interface';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  providers: [ApiService],
  imports: [IonicModule, ReactiveFormsModule, HttpClientModule],
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formularioLogin: FormGroup;

  constructor(private router: Router, private api: ApiService) {
    this.formularioLogin = new FormGroup({
      usuarioRed: new FormControl('', Validators.required),
      clave: new FormControl('', Validators.required)
    });
  }

  getLogin(form: IRequestLogin) {
    this.api.login(form).subscribe(datosretorno => {
      console.log(datosretorno);
    });
  }

  ngOnInit() {}

  goHome() {
    this.router.navigate(['/home']);
  }
}
