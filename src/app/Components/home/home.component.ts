import { Component } from "@angular/core";
import {MessageService} from 'primeng/components/common/messageservice';
import {Hero} from '../../model/hero';
import { Router } from '@angular/router';
import { HeroService } from '../../services/hero-service.service';

@Component({
  selector: "home-component",
  templateUrl: "./home.component.html",
})
export class HomeComponent {
  name = "Angular";
  heroes: Hero[];
  selectedHero: Hero;

  constructor(private messageService: MessageService,
              private heroService: HeroService,
              private router: Router) {
  }

  getHeroes(): void {
    this.heroService
        .getHeroes()
        .then(heroes => this.heroes = heroes);
  }
  ngOnInit() {
    this.getHeroes();
  }
  ShoeMessage() {
    this.messageService.add({
      severity: Date.now()%2==0 ? "info" : "error",
      summary: "Info Message",
      detail: "PrimeNG rocks" + Date.now()
    });
  }
}
