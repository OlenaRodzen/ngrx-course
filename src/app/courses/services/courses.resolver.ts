import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { filter, first, tap } from 'rxjs/operators';
import { CoursesEntityService } from './courses-entity.service';

@Injectable()
export class CoursesResolver implements Resolve<boolean> {
    constructor(private coursesService: CoursesEntityService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.coursesService.loaded$
            .pipe(
                tap(loaded => {
                    if (!loaded) {
                        this.coursesService.getAll();
                    }
                }),
                filter(loaded => loaded),
                first()
            );
    }
}