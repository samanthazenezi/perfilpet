import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
    raça: new FormControl('', [Validators.required]),
    dataNascimento: new FormControl('', [Validators.required]),
    idade: new FormControl('', [Validators.required]),
    porte: new FormControl('', [Validators.required]),
    cor: new FormControl('', [Validators.required]),
    sim: new FormControl('', [Validators.required]),
    não: new FormControl('', [Validators.required])

  });

  id = this.route.snapshot.paramMap.get("id")

  constructor(
    private http: HttpClient, 
    private  route: ActivatedRoute, 
    private router: Router) { }

  ngOnInit(): void {

    this.http.get<Perfil>('https://pet-api-5wpg.onrender.com/api/Pet/' + this.id).subscribe( 
      response => {
        this.perfil = response;

        this.formPerfil.controls.nome.setValue(this.perfil.nome);
        this.formPerfil.controls.cor.setValue(this.perfil.cor);
        this.formPerfil.controls.dataNascimento.setValue(this.perfil.dataNascimento);
        this.formPerfil.controls.especie.setValue(this.perfil.especie);
        this.formPerfil.controls.genero.setValue(this.perfil.genero);
        this.formPerfil.controls.porte.setValue(this.perfil.porte);
        this.formPerfil.controls.raça.setValue(this.perfil.raça);

        if(this.perfil.castrado == true) {
          this.formPerfil.controls.sim.setValue("Sim")
        } 
        else {
          this.formPerfil.controls.não.setValue("Não")
        }

        this.formPerfil.disable();
      }

    )

  }

  deletar(){
    this.http.delete('https://pet-api-5wpg.onrender.com/api/Pet/' + this.id).subscribe(
      sucesso =>{
      this.router.navigateByUrl('home')
      console.log('sucesso!')},
      erro => {console.log('erro!')}
    )
  }

  abrirEdicao(){
    this.formPerfil.enable();

  }

  cancelarEdicao(){
    this.formPerfil.disable();
  }

  editar(){

    this.http.put<Perfil>('https://pet-api-5wpg.onrender.com/api/Pet/' + this.id, this.formPerfil.value).subscribe(
      sucesso => {
        console.log('sucesso');
        window.location.reload();
      }, erro => { console.log('erro')}
    )
  }


  openClose(){
    document.getElementById('modal').classList.toggle('visivel')
  }
}
