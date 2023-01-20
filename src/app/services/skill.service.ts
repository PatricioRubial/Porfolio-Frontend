import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CrudService } from "../infrastructure/crud-service";
import { Skill } from "../models/skill";


@Injectable({ providedIn: 'root' })
export class SkillService extends CrudService<Skill> {
  protected resourceName = 'skills-profiles';

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }}