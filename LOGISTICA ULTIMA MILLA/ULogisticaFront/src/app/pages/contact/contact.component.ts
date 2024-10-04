import { Component, OnInit } from '@angular/core';
import { IonicModule } from  '@ionic/angular';
import { Router} from '@angular/router';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../Services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { IRequestContact } from '../../models/RequestIContact.Interface';


@Component({
  selector: 'app-contact',
  providers: [ApiService],
  standalone: true,
  imports: [IonicModule, ReactiveFormsModule, HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent  implements OnInit {

  formularioContacto: FormGroup;

  constructor(private router: Router, private api:ApiService) {
    this.formularioContacto = new FormGroup({
      nombre: new FormControl('', Validators.required),
      email: new FormControl('',Validators.required),
      asunto: new FormControl('',Validators.required),
      mensaje: new FormControl('',Validators.required)
    });
   }

  getContacto(form: IRequestContact){
    this.api.contactUsuario(form).subscribe(datosretorno => {
      console.log(datosretorno);
    });
  }

  ngOnInit() {}

  goHome() {
    this.router.navigate(['/home']);
  }

}
