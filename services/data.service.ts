import { IPost } from './../src/app/posts/post';
import { BadRequest } from './../cust_errors/BadRequest';
import { AppError } from './../cust_errors/AppError';
import { NotFoundError } from './../cust_errors/NotFoundError';
import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { of, scheduled, throwError } from 'rxjs';

import { catchError, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private http: HttpClient, @Inject(String) private url: string) { }

    resource!: JSON;

    getAll() {
        let response = this.http.get(this.url)
            .pipe(
                map((resp) => {
                    // return resp;
                    return JSON.parse(JSON.stringify(resp));
                }),
                catchError(this.erroHandler)
            );


        return response;
    }

    protected get(resourceURL: string) {
        return this.http.get(this.url + resourceURL)
            .pipe(
                catchError(this.erroHandler)
            );

        // return this.http.get(this.url + resourceURL).toPromise();
    }

    protected create(resource: any, resourceURL: string) {
        return this.http.post(this.url + resourceURL, resource)
            .pipe(
                catchError(this.erroHandler)
            );
    }

    protected update(resource: any, updatedResource: any, resourceURL: string) {
        return this.http.patch(this.url + resourceURL, updatedResource)
    }

    protected delete(resourceURL: string) {
        return this.http.delete(this.url + resourceURL)
            .pipe(
                catchError(this.erroHandler)
            );
    }

    private erroHandler(error: any) {


        if (error.status == 404)
            return throwError(new NotFoundError() + '---------------------------');
        else if (error.status == 400)
            return throwError(new BadRequest() + '----------------------------');

        return throwError(new AppError());
        // return throwError;//handled by global error
    }
}
