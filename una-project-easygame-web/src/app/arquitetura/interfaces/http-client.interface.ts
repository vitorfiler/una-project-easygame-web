import {HttpResponse} from '@angular/common/http';

export default interface IHttpClient {

    get(url: string): any;
}