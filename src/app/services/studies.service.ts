import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Study } from '../models/study';
import { CrudService } from '../infrastructure/crud-service';

@Injectable({ providedIn: 'root' })
export class StudiesService extends CrudService<Study> {
  protected resourceName = 'studies';

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }
}
