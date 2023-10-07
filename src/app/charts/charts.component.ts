import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

  public chart: any;

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {

    this.chart = new Chart("MyChart", {
      type: 'doughnut', //this denotes the type of chart

      data: {// values on X-Axis
        labels: ['Red', 'Green'],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 240],
          backgroundColor: [
            '#d63031',
            '#44bd32'
          ],
          hoverOffset: 4
        }],
      },
      options: {
        aspectRatio: 2.5
      }

    });
  }
}
