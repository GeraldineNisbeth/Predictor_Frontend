import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Variables } from 'src/app/models/variables';
import { KmeansService } from 'src/app/services/kmeans.service';

@Component({
  selector: 'app-predictor',
  templateUrl: './predictor.component.html',
  styleUrls: ['./predictor.component.css']
})
export class PredictorComponent implements OnInit {

  variables: Variables;
  optsEducacion = [
    {id: 1, value: 'Sin estudios'},
    {id: 2, value: 'Inicial'},
    {id: 3, value: 'Primaria Incompleta'},
    {id: 4, value: 'Primaria Completa'},
    {id: 5, value: 'Secundaria Incompleta'},
    {id: 6, value: 'Secundaria Completa'},
    {id: 7, value: 'Superior No Universitaria Incompleta'},
    {id: 8, value: 'Superior No Universitaria Completa'},
    {id: 9, value: 'Superior Universitaria Incompleta'},
    {id: 10, value: 'Superior Universitaria Completa'},    
  ];

  optsOcupacion = [
    {id: 1, value: 'Empleador o patrono'},
    {id: 2, value: 'Trabajador Independiente'},
    {id: 3, value: 'Empleado'},
    {id: 4, value: 'Obrero'},
    {id: 5, value: 'Trabajador familiar no remunerado'},
    {id: 6, value: 'Trabajador del hogar'},
    {id: 7, value: 'Otro'},
  ]

  optsEntidad = [
    {id: 1, value: 'Fuerzas Armadas, Policía Nacional del Perú (militares)'},
    {id: 2, value: 'Administración Pública'},
    {id: 3, value: 'Empresa Pública'},
    {id: 4, value: 'Empresas especiales de servicios'},
    {id: 5, value: 'Empresa o patrono privado'},
    {id: 6, value: 'Otro'},
  ]

  tipoIngreso : string

  constructor(private kmeansService: KmeansService) { }

  ngOnInit(): void {
    this.variables = new Variables();
  }

  predict(form: NgForm) {    
    this.variables.entidad = Number(this.variables.entidad);
    this.variables.nivel_educativo = Number(this.variables.nivel_educativo);
    this.variables.ocupacion = Number(this.variables.ocupacion);
    this.variables.tamanio_entidad = Number(this.variables.tamanio_entidad);
    this.kmeansService.postVariables(this.variables).subscribe((res:any) => {
      console.log(res);
      this.tipoIngreso = res.Cluster;
    });
  }

}
