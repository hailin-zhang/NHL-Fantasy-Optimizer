import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class YahooService {
    private apiKey: string;
    private apiSecret: string;

    constructor(private http: HttpClient) {
        this.http.get('/assets/consumer_key.txt', {responseType: 'text'}).subscribe(data => {
            this.apiKey = data;
        });
        this.http.get('/assets/consumer_secret.txt', {responseType: 'text'}).subscribe(data => {
            this.apiSecret = data;
        });
    }
}
