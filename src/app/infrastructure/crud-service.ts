import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


export abstract class CrudService<TEntity extends { [key: string]: any; }> {
    protected readonly abstract resourceName: string;

    constructor(private httpClient: HttpClient) { }

    getAll() {
        return this.httpClient.get<TEntity[]>(`${environment.apiUrl}/${this.resourceName}`);
    }

    get(id: number) {
        return this.httpClient.get<TEntity>(`${environment.apiUrl}/${this.resourceName}/${id}`);
    }

    create(entity: TEntity) {
        return this.httpClient.post<TEntity>(`${environment.apiUrl}/${this.resourceName}/`, entity);
    }

    update(id: number, entity: TEntity) {
        return this.httpClient.put<TEntity>(`${environment.apiUrl}/${this.resourceName}/${id}`, entity);
    }

    delete(id: number) {
        return this.httpClient.delete<any>(`${environment.apiUrl}/${this.resourceName}/${id}`);
    }
}
