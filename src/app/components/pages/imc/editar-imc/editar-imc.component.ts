import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Imc } from 'src/app/models/imc.model';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-editar-imc',
  templateUrl: './editar-imc.component.html',
  styleUrls: ['./editar-imc.component.css']
})
export class EditarImcComponent implements OnInit {

  altura!: number;
  peso!: number;
  usuarioId!: number;
  usuarios!: Usuario[];
  imc!: Imc;
  id!: number;
  usuario!: Usuario;
  nome! : string;

  constructor(private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params) => {
        let { id } = params;
        if (id !== undefined) {
          this.http.get<Imc>(`https://localhost:5001/api/imc/buscar/${id}`).subscribe({
            next: (imc) => {
              this.id = id;
              this.usuario = imc.usuario!;
              this.altura = imc.altura;
              this.peso = imc.peso;
              this.usuarioId = imc.usuarioId
              this.nome = imc.usuario?.nome!

          },
        });
        }
      },
    });
  }

  editar(): void{
    let imc: Imc = {
      id: this.id,
      altura: this.altura,
      peso: this.peso,
      usuarioId: this.usuarioId
      
    };

    this.http.patch<Imc>("https://localhost:5001/api/imc/alterar/", imc).subscribe({
      next: (funcionario) => {
        this._snackBar.open("IMC Alterado", "Ok!", {
          horizontalPosition: "right",
          verticalPosition: "top",
        });
        this.router.navigate(["pages/imc/listar"]);
      },
    });
  }
  

}
