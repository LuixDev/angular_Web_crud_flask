import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent  implements OnInit {
  ngOnInit() {}
  
   precio: string = '';
  marca: string = '';
  modelo: string = '';
  antiguedad: string = '';
  kilometraje: string = '';
  color: string = '';
  id: string = '';

  constructor(
    private http: HttpClient,
    private toastr: ToastrService
  ) {}

  async actualizar() {
    const datos = {
      precio: this.precio,
      marca: this.marca,
      modelo: this.modelo,
      antiguedad: this.antiguedad,
      kilometraje: this.kilometraje,
      color: this.color,
      id: this.id,
    };

    this.http.put(`http://127.0.0.1:3000/actualizar/${this.id}`, datos).subscribe(
      async (response: any) => {
        if (response.success) {
          localStorage.setItem('token', response.token);
          alert('Dato actualizado'); 
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
