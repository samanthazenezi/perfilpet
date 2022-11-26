import { CadastrarPet } from './../../model/cadastrarpet.model';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

@Component({
  selector: 'app-cadastrarpet',
  templateUrl: './cadastrarpet.component.html',
  styleUrls: ['./cadastrarpet.component.css']
})
export class CadastrarpetComponent implements OnInit {

  formCadastroPet = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    especie: new FormControl('', [Validators.required]),
    genero: new FormControl('', [Validators.required]),
    raca: new FormControl('', [Validators.required]),
    dataNasc: new FormControl('', [Validators.required]),
    idade: new FormControl('', [Validators.required]),
    porte: new FormControl('', [Validators.required]),
    cor: new FormControl('', [Validators.required]),
    sim: new FormControl('', [Validators.required]),
    nao: new FormControl('', [Validators.required])
  });

  constructor( private http: HttpClient ) { }

  ngOnInit(): void {
  }
  

  salvar(){
    let body = new CadastrarPet;

    body.nome = this.formCadastroPet.controls.nome.value;
    body.especie = this.formCadastroPet.controls.especie.value;
    body.genero = this.formCadastroPet.controls.genero.value;
    body.raça = this.formCadastroPet.controls.raca.value;
    body.dataNascimento = this.formCadastroPet.controls.dataNasc.value;
    body.porte = this.formCadastroPet.controls.porte.value;
    body.cor = this.formCadastroPet.controls.cor.value;
    body.especie = this.formCadastroPet.controls.especie.value;
    

    if(this.formCadastroPet.controls.sim.value){
      body.castrado = true
    }
    if(this.formCadastroPet.controls.nao.value){
      body.castrado = false
    }

    this.http.post('https://pet-api-5wpg.onrender.com/api/Pet', body).subscribe( sucess => {
      this.formCadastroPet.reset();
      console.log('Sucesso!')
    }, error => {
      console.log('Erro!')
    })

  }
}
