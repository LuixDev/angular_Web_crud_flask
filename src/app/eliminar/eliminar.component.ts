import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent implements OnInit {
  ngOnInit() {}
  
  id: string = '';
  
  constructor(
    private http: HttpClient,
    private toastr: ToastrService
  ) {}
  async eliminar() {
    const credentials = {
      id: this.id,
    };
    this.http.delete(`http://127.0.0.1:3000/eliminar/${this.id}`).subscribe(
      async (response: any) => {
        if (response.success) {
          localStorage.setItem('token', response.token);
          alert('Dato Eliminado'); 
        } else {
          alert('¡incorrecto!'); 
        }
      },
      async error => {
        this.toastr.error(
          'Error del servidor',
          'Error',
          {
            timeOut: 3000
          }
        );
      }
    );
  }
}
