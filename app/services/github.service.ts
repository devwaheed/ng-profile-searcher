import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{

    private username:string;
    private client_id = 'eefee26e6085cedf966c';
    private client_secret = 'a8559465354f3bcd4640f6df498afe726fe9b3ce';

    constructor(private _http: Http){
        this.username = 'bradtraversy';

        console.log('Github service is ready');
    }

    getUser(){
        return this._http.get("http://api.github.com/users/" + this.username +"?client_id=" + this.client_id + "&client_secret="+this.client_secret)
            .map(res => res.json());
    }

    getRepos(){
        return this._http.get("http://api.github.com/users/" + this.username +"/repos?client_id=" + this.client_id + "&client_secret="+this.client_secret)
            .map(res => res.json());
    }

    updateUsername(username:string){
        this.username = username;
    }
}