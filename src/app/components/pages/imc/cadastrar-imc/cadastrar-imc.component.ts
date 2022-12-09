import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Imc } from 'src/app/models/imc.model';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-cadastrar-imc',
  templateUrl: './cadastrar-imc.component.html',
  styleUrls: ['./cadastrar-imc.component.css']
})
export class CadastrarImcComponent implements OnInit {

  altura!: number;
  peso!: number;
  usuarioId!: number;
  usuarios!: Usuario[];

  constructor(private http: HttpClient, private router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.http
      .get<Usuario[]>("https://localhost:5001/api/usuario/listar")
      .subscribe({
        next: (usuarios) => {
          this.usuarios = usuarios;
        },
      });
  }

  cadastrar(): void{
    let imc : Imc = {
      altura : this.altura!,
      peso : this.peso!,
      usuarioId : this.usuarioId!
    }

    this.http.post<Imc>("https://localhost:5001/api/imc/cadastrar", imc).subscribe({
      next: (jogo) => {
        this._snackBar.open("IMC cadastrado!", "Ok!", {
          horizontalPosition: "right",
          verticalPosition: "top",
        });
        this.router.navigate(["pages/imc/listar"]);
      },
    });
  }

}
