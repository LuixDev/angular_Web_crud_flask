import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface MiObjeto {

  COL5: string;
  COL6: string;
  COL7: string;
  COL8: string;
  COL9: string;
  COL10: string;
  id: string;
}

@Component({
  selector: 'app-consultar',
  templateUrl: './consultar.component.html',
  styleUrls: ['./consultar.component.css']
})
export class ConsultarComponent implements OnInit {
  miObjeto: MiObjeto[] = [];

  constructor(private http: HttpClient
    ) { }

  ngOnInit(): void {
    this.http.get<MiObjeto[]>('http://127.0.0.1:3000/consultar').subscribe(
      (data) => {
        this.miObjeto = data;
        
       
      
      
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
