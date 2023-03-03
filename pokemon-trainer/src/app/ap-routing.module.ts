import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./guards/auth.guard";
import { LoginGuard } from "./guards/login.guard";
import { CatalogueComponent } from "./pages/catalogue/catalogue.component";
import { LoginPage} from "./pages/login/login.page";
import { TrainerComponent } from "./pages/trainer/trainer.component";

const routes: Routes = [
    {
        path:"",
        pathMatch:"full",
        redirectTo:"/login"
    },
    {
        path:"login",
        component: LoginPage,
        canActivate: [LoginGuard]
        
    },
    {
        path:"trainer",
        component: TrainerComponent,
        canActivate:[ AuthGuard ]
    },
    {
        path:"catalogue",
        component: CatalogueComponent,
        canActivate:[ AuthGuard ]
    }

]

@NgModule({
imports: [
    RouterModule.forRoot(routes)
],
exports: [
    RouterModule
]
})
export class AppRoutingMoudle{

}