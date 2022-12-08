import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.css']
})
export class CadastrarUsuarioComponent implements OnInit {

  nome! : string;
  data! : Date;

  constructor(
    private http: HttpClient,
    private router: Router,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  cadastrar(): void{
    let usuario: Usuario = {
      nome: this.nome,
      dataNascimento: this.data
    };

    this.http
      .post<Usuario>("https://localhost:5001/api/usuario/cadastrar", usuario)
      .subscribe({
        next: (usuario) => {
          this._snackBar.open("Usuário cadastrado!", "Ok!", {
            horizontalPosition: "right",
            verticalPosition: "top",
          });
        },
        error: (error) => {
          console.error("Algum erro aconteceu!");
        },
      });
  }

}
