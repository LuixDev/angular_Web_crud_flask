import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit  {

  title = 'analisis';
  chart: any;

  ngOnInit() {
    // Datos para la gráfica
    const data = {
      labels: ['38.990.000', ' 95.500.000', '34.000.000', '125.000.000', '35.000.000', '90.000.000'],
      datasets: [
        {
          label: 'Precio',
          data: [30, 20, 30, 40, 50, 60],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
       
        }
        
      ]
      
    };

    // Opciones de la gráfica
    const options = {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    };
  
    // Crear la instancia de la gráfica
    this.chart = new Chart('canvas', {
      type: 'bar',
      data: data,
    
     
    },
    );
    


    this.chart = new Chart('canvas2', {
      type: 'doughnut',
      data: data,
    
     
    });


    this.chart = new Chart('canvas3', {
      type: 'pie',
      data: data,
    
     
    });



    this.chart = new Chart('canvas4', {
      type: 'line',
      data: data,
    
     
    });

    this.chart = new Chart('canvas5', {
      type: 'radar',
      data: data,
    
     
    });


    this.chart = new Chart('canvas6', {
      type: 'polarArea',
      data: data,
      
     
    });
   
  }
}