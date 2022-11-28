import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { delay, interval, timeInterval } from 'rxjs';
import { Perfil } from 'src/app/model/perfil.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pets: Perfil[];

  id = this.route.snapshot.paramMap.get('id')

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Perfil[]>('https://pet-api-5wpg.onrender.com/api/Pet').subscribe(
      response => {
        this.pets = response;
        setTimeout(() => {
          this.pets.forEach(cadaItem => {
            this.download(cadaItem.id, cadaItem.imagem)
          });
        }, 100)
      }, error => {
        console.log("erro");
      }
    )
  }

  download(id, imagem){
    var url = 'https://pet-api-5wpg.onrender.com/api/Pet/' + id + "/download";
    var preview = document.getElementById(imagem) as HTMLImageElement;

    this.http.post(url, {}, { responseType: 'text'})
    .subscribe(
      sucesso => { preview.src = "data:image/*;base64," + sucesso },
      erro => { console.log(erro) }
    )
  }

}
