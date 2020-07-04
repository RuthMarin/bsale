import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class RequestService {

	public get(resource: string, token:any): Promise<any>{
		const url = 'http://ec2-54-183-147-121.us-west-1.compute.amazonaws.com:8383/v2/markets' + resource;
		let customHeader = new HttpHeaders({
				'access_token': token
		});

			const doRequest = () =>
				this.http.get(url, { 'headers': customHeader})
					.toPromise()
					.then((res: any) => {
						return Promise.resolve(res);
					})
					.catch((ex) => {
						return Promise.reject(ex);
					});
	return doRequest();
}

 public post(resource: string, params: any, token:any): Promise<any>{
		const url = 'http://ec2-54-183-147-121.us-west-1.compute.amazonaws.com:8585/v1' + resource;
		let customHeader = new HttpHeaders({
				'access_token': token
		});

			const doRequest = () =>
				this.http.post(url, params,{ 'headers': customHeader})
					.toPromise()
					.then((res: any) => {
						return Promise.resolve(res);
					})
					.catch((ex) => {
						return Promise.reject(ex);
					});
	return doRequest();
}

	constructor(
		private http: HttpClient) { }

}


