import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
      }, error => {
        console.log("erro");
      }
    )
  }

}
