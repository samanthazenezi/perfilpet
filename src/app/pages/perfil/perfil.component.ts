import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Perfil } from 'src/app/model/perfil.model';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  perfil: Perfil;


  formPerfil = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    especie: new FormControl('', [Validators.required]),
    genero: new FormControl('', [Validators.required]),
    raca: new FormControl('', [Validators.required]),
    dataNasc: new FormControl('', [Validators.required]),
    idade: new FormControl('', [Validators.required]),
    porte: new FormControl('', [Validators.required]),
    cor: new FormControl('', [Validators.required]),
    castrado: new FormControl('', [Validators.required])
  });

  constructor(private http: HttpClient, private  route: ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get("id");

    this.http.get<Perfil>('https://pet-api-5wpg.onrender.com/api/Pet/' + id).subscribe( 
      response => {
        this.perfil = response;

        this.formPerfil.controls.nome.setValue(this.perfil.nome);
        this.formPerfil.controls.cor.setValue(this.perfil.cor);
        this.formPerfil.controls.dataNasc.setValue(this.perfil.dataNascimento);
        this.formPerfil.controls.especie.setValue(this.perfil.especie);
        this.formPerfil.controls.genero.setValue(this.perfil.genero);
        this.formPerfil.controls.porte.setValue(this.perfil.porte);
        this.formPerfil.controls.raca.setValue(this.perfil.raça);

        if(this.perfil.castrado == true) {
          this.formPerfil.controls.castrado.setValue("Sim")
        } 
        else {
          this.formPerfil.controls.castrado.setValue("Não")
        }

        this.formPerfil.disable();
      }

    )
  

  }

}
