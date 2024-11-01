import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-graficadora',
  templateUrl: './graficadora.component.html',
  styleUrls: ['./graficadora.component.css']
})
export class GraficadoraComponent {
  public chart: any;
  public constante: number=0;
  public expresion: string='';
  FormExpresion:FormGroup;

  constructor(private fb:FormBuilder) {
    this.FormExpresion=this.fb.group({
      "expresion":['',Validators.required],
      "variable":['X',Validators.required],
    })
   }

  sendExpresion(){
    console.log(this.FormExpresion.value.expresion)
    this.expresion=this.FormExpresion.value.expresion
    console.log(this.FormExpresion.value.variable)
    this.createChart();
  }

  createChart() {
    if (this.chart){ 
      this.chart.destroy(); 
    }
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: this.generateLabels(),
        datasets: [{
          label: 'Resultado de la Función',
          data: this.generateData(),
          borderColor: '#000000',
          borderWidth: 3,
          fill: false
        }]
      },
      options: {
        scales: {
          x: {
            type: 'linear',
            position: 'bottom',
            title: {
              display: true,
              text: 'Eje X'
            }
          },
          y: {
            type: 'linear',
            position: 'left',
            title: {
              display: true,
              text: 'Eje Y'
            }
          }
        }
      }
    });
  }

  generateLabels(): number[] {
    const labels = [];
    for (let x = -10; x <= 10; x++) {
      labels.push(x);
    }
    return labels;
  }

  generateData(): { x: number, y: number }[] {
    const data = [];
    const variable=this.FormExpresion.value.variable
    switch (variable) {
      case "1":
        for (let x = -10; x <= 10; x++) {
          data.push({ x: x, y: this.calculateFunction(x) });
        }
      break;
      case "2":
        for (let x = -10; x <= 10; x++) {
          data.push({ x: x, y: this.calculateFunctionV2(x) });
        }
      break;
      case "3":
        for (let x = -10; x <= 10; x++) {
          data.push({ x: x, y: this.calculateFunctionV3(x) });
        }
      break;
      case "4":
        for (let x = -10; x <= 10; x++) {
          data.push({ x: x, y: this.calculateFunctionV4(x) });
        }
      break;
      case "5":
        for (let x = -10; x <= 10; x++) {
          data.push({ x: x, y: this.calculateFunctionV5(x) });
        }
      break;
      case "6":
        for (let x = -10; x <= 10; x++) {
          data.push({ x: x, y: this.calculateFunctionV6(x) });
        }
      break;
      case "7":
        for (let x = -10; x <= 10; x++) {
          data.push({ x: x, y: this.calculateFunctionV7(x) });
        }
      break;
      case "8":
        for (let x = -10; x <= 10; x++) {
          data.push({ x: x, y: this.calculateFunctionV8(x) });
        }
      break;
      case "9":
        for (let x = -10; x <= 10; x++) {
          data.push({ x: x, y: this.calculateFunctionV9(x) });
        }
      break;
      case "10":
        for (let x = -10; x <= 10; x++) {
          data.push({ x: x, y: this.calculateFunctionV10(x) });
        }
      break;
      case "11":
        for (let x = -10; x <= 10; x++) {
          data.push({ x: x, y: this.calculateFunctionV11(x) });
        }
      break;
      default:
        console.log("Opcion No Valida")
      break;
    }
    return data;
  }

  calculateFunction(x: number): number {
    const expression = `${x}`+this.expresion;
    return this.evaluateExpression(expression);
  }

  calculateFunctionV2(x: number): number {
    const expression = `${Math.sin(x)}`+this.expresion;
    return this.evaluateExpression(expression);
  }

  calculateFunctionV3(x: number): number {
    const expression = `${Math.cos(x)}`+this.expresion;
    return this.evaluateExpression(expression);
  }

  calculateFunctionV4(x: number): number {
    const expression = `${Math.tan(x)}`+this.expresion;
    return this.evaluateExpression(expression);
  }

  calculateFunctionV5(x: number): number {
    const expression = `${Math.asin(x)}`+this.expresion;
    return this.evaluateExpression(expression);
  }

  calculateFunctionV6(x: number): number {
    const expression = `${Math.acos(x)}`+this.expresion;
    return this.evaluateExpression(expression);
  }

  calculateFunctionV7(x: number): number {
    const expression = `${Math.atan(x)}`+this.expresion;
    return this.evaluateExpression(expression);
  }

  calculateFunctionV8(x: number): number {
    const expression = `${Math.exp(x)}`+this.expresion;
    return this.evaluateExpression(expression);
  }

  calculateFunctionV9(x: number): number {
    const expression = `${Math.log(x)}`+this.expresion;
    return this.evaluateExpression(expression);
  }

  calculateFunctionV10(x: number): number {
    const expression = `${Math.log10(x)}`+this.expresion;
    return this.evaluateExpression(expression);
  }

  calculateFunctionV11(x: number): number {
    const expression = `${Math.sqrt(x)}`+this.expresion;
    return this.evaluateExpression(expression);
  }

  evaluateExpression(expression: string): number {
    return eval(expression);
  } 
}

/*
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent implements OnInit {
  public chart: any;
  public showChart: boolean = true; // Condición para mostrar u ocultar el gráfico

  constructor() { }

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {
    if (this.chart) {
      this.chart.destroy();
    }

    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: this.generateLabels(),
        datasets: [{
          label: 'Resultado de la Función',
          data: this.generateData(),
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
          fill: false
        }]
      },
      options: {
        scales: {
          x: {
            type: 'linear',
            position: 'bottom',
            title: {
              display: true,
              text: 'Eje X'
            }
          },
          y: {
            type: 'linear',
            position: 'left',
            title: {
              display: true,
              text: 'Eje Y'
            }
          }
        }
      }
    });
  }

  generateLabels(): number[] {
    const labels = [];
    for (let x = -10; x <= 10; x++) {
      labels.push(x);
    }
    return labels;
  }

  generateData(): { x: number, y: number }[] {
    const data = [];
    for (let x = -10; x <= 10; x++) {
      data.push({ x: x, y: this.calculateFunction(x) });
    }
    return data;
  }

  calculateFunction(x: number): number {
    const expression = `Math.sin(${x}) + 8 + 9*8`;
    return this.evaluateExpression(expression);
  }

  evaluateExpression(expression: string): number {
    return eval(expression);
  }
}

*/