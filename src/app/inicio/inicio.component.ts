import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  ngOnInit() {}

  username: string = '';
  password: string = '';

  constructor(
    private http: HttpClient,
    private router: Router,
    private toastr: ToastrService
  ) {}

  async login() {
    const credentials = {
      username: this.username,
      password: this.password
    };

    this.http.post('http://127.0.0.1:3000/login', credentials).subscribe(
      async (response: any) => {
        if (response.success) {
          localStorage.setItem('token', response.token);
          this.router.navigate(['/menu']);
        } else {
          alert('¡incorrecto!'); 
        }
      },
      async error => {
        this.toastr.error(
          'Error al intentar iniciar sesión',
          'Error',
          {
            timeOut: 3000
          }
        );
      }
    );
  }
}
