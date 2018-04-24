import { Routes } from "@angular/router";
import { NotFoundComponent } from "./Components/not-found/notfound.component";
import { HomeComponent } from "./Components/Home/home.component";


export  const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: '**', component: NotFoundComponent }
];
