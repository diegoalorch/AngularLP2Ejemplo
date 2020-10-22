import { Component, OnInit } from '@angular/core';
import { Alumno, Escuela } from 'src/app/modelo/Alumno';
import { AlumnoService } from 'src/app/services/alumno.service';

@Component({
  selector: 'app-add-alumno',
  templateUrl: './add-alumno.component.html',
  styleUrls: ['./add-alumno.component.css']
})
export class AddAlumnoComponent implements OnInit {
  alumno : Alumno;
  escuelas : Escuela[];
  constructor( private alumnosService: AlumnoService) { }

  ngOnInit(): void {
    this.alumno = this.alumnosService.nuevoAlumno();
    this.escuelas = this.alumnosService.getEscuelas();
  }

  nuevoAlumno():void{
    alert("Angular ...!");
    this.alumnosService.addAlumno(this.alumno);
    this.alumno = this.alumnosService.nuevoAlumno();
  }
}
