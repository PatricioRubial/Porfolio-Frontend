import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CrudService } from "../infrastructure/crud-service";
import { Proyects } from "../models/proyects";


@Injectable({ providedIn: 'root' })
export class ProyectsService extends CrudService<Proyects> {
  protected resourceName = 'projects';

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }}