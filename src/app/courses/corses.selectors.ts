import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CoursesState } from "./reducers/course.reducers";
import * as fromCourses from "./reducers/course.reducers";

export const selectCoursesState = createFeatureSelector<CoursesState>('courses');

export const selectAllCources = createSelector(
    selectCoursesState,
    state => fromCourses.selectAll(state)
);

export const selectBeginnerCourses = createSelector(
    selectAllCources,
    courses => courses.filter(course => course.category == 'BEGINNER')
);

export const selectAdvancedCourses = createSelector(
    selectAllCources,
    courses => courses.filter(course => course.category == 'ADVANCED')
);

export const selectPromoTotal = createSelector(
    selectAllCources,
    courses => courses.filter(course => course.promo).length
);

export const areCoursesLoaded = createSelector(
    selectCoursesState,
    state => state.allCoursesLoaded
);