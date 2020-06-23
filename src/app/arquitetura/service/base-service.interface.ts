import { HttpClientService } from './http-client.service';

export default interface IBaseService {
    
    http: HttpClientService;
    baseURL: string;
    
    getColumns(): any[];
}