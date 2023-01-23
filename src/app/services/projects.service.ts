import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CrudService } from "../infrastructure/crud-service";
import { Projects } from "../models/projects";


@Injectable({ providedIn: 'root' })
export class ProjectsService extends CrudService<Projects> {
  protected resourceName = 'projects';

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }}