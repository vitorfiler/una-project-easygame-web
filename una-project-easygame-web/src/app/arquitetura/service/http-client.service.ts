import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import IHttpClient from '../interfaces/http-client.interface';

@Injectable({providedIn: 'root'})
export class HttpClientService implements IHttpClient {

    constructor(private http: HttpClient) {
    }

    getHeaders(options?: any): HttpHeaders {
        let {headers} = options;
        headers = headers || new HttpHeaders();
        headers = headers.append('Authorization', `Bearer ${localStorage.getItem('token')}`);

        return headers;
    }

    getOptions(options?: any): any {
        options = options || {};
        options.headers = this.getHeaders(options);
        options.observe = !options.observe ?  'response' : options.observe;

        return options;
    }

    get(url: string, options?: any): any {
        options = this.getOptions(options);

        return this.http.get(url, options);
    }
}