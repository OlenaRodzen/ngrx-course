
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { filter, finalize, first, tap } from 'rxjs/operators';
import { CourseActions } from './action-types';
import { areCoursesLoaded } from './corses.selectors';

@Injectable()
export class CoursesResolver implements Resolve<any> {

    loading = false;

    constructor(private store: Store) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.store
            .pipe(
                select(areCoursesLoaded),
                tap(areCoursesLoaded => {
                    if (!this.loading && !areCoursesLoaded) {
                        this.store.dispatch(CourseActions.loadAllCourses());
                    }
                }),
                filter(areCoursesLoaded => areCoursesLoaded),
                first(),
                finalize(() => {this.loading = false})
            );
    }
}