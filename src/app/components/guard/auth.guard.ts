import { inject, Inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { routes } from "../../app.routes";


export const authGuard: CanActivateFn = (route,state) => {
    const locaUser = localStorage.getItem("EmpEmail");

    const router = inject(Router)

    if (locaUser!=null){
        return true
    } else {
        router.navigateByUrl('/login')
        return false
    }
    
}