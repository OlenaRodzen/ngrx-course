import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory, EntityServicesBase } from '@ngrx/data';
import { Course } from '../model/course';

@Injectable()
export class CoursesEntityService extends EntityCollectionServiceBase<Course> {
    constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
        super('Course', serviceElementsFactory);
    }
}