import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { HttpserviceService } from "../shared/httpservice.service";

@Injectable({ providedIn: 'root' })
export class HomeResolver implements Resolve<any>{
    constructor(private httpservice: HttpserviceService) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> | Promise<any> | any {
        return this.httpservice.fetchUserData();
    }
}