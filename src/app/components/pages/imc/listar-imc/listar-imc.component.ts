import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Imc } from 'src/app/models/imc.model';

@Component({
  selector: 'app-listar-imc',
  templateUrl: './listar-imc.component.html',
  styleUrls: ['./listar-imc.component.css']
})
export class ListarImcComponent implements OnInit {

  imcs!: Imc[];
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http
      .get<Imc[]>("https://localhost:5001/api/imc/listar")
      // Execução da requisição
      .subscribe({
        next: (imcs) => {
          // console.table(funcionarios);
          this.imcs = imcs;
        },
      });
  }

}
