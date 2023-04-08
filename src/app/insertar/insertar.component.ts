import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-insertar',
  templateUrl: './insertar.component.html',
  styleUrls: ['./insertar.component.css']
})
export class InsertarComponent implements OnInit {
  ngOnInit() {}
  
  
  precio: string = '';
  marca: string = '';
  modelo: string = '';
  antiguedad: string = '';
  kilometraje: string = '';
  color: string = '';

  constructor(
    private http: HttpClient,
    private toastr: ToastrService
  ) {}

  async insertar() {
    const credentials = {
      precio: this.precio,
      marca: this.marca,
      modelo: this.modelo,
      antiguedad: this.antiguedad,
      kilometraje: this.kilometraje,
      color: this.color,
    };

    this.http.post('http://127.0.0.1:3000/insertar', credentials).subscribe(
      async (response: any) => {
        if (response.success) {
          localStorage.setItem('token', response.token);
          alert('Dato guardado'); 
        } else {
          alert('¡incorrecto!'); 
        }
      },
      async error => {
        this.toastr.error(
          'Error servidor',
          'Error',
          {
            timeOut: 3000
          }
        );
      }
    );
  }

}
