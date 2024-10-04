import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http'; // Asegúrate de que esté importado
import { IRequestRegister } from '../../models/RequestIRegister.Interface';
import { ApiService } from '../../Services/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  providers: [ApiService],
  standalone: true,
  imports: [IonicModule, ReactiveFormsModule, HttpClientModule],
  styleUrls: ['./register.component.scss'],
})

export class RegisterComponent implements OnInit {

  formularioRegister: FormGroup;
  constructor(private router: Router, private api: ApiService) {
    this.formularioRegister = new FormGroup({
      usuarioRed: new FormControl('', Validators.required),
      clave: new FormControl('', Validators.required),
      confirmarClave: new FormControl('', Validators.required),
      nombreCompleto: new FormControl('', Validators.required),
      correo: new FormControl('', Validators.required),
    });
  }

  registrarUsuario(form: IRequestRegister) {
    console.log(form);
    this.api.registrarUsuario(form).subscribe(datosretorno => {
      console.log(datosretorno);
    });
  }

  ngOnInit() {}

  goHome() {
    this.router.navigate(['/home']);
  }
}
