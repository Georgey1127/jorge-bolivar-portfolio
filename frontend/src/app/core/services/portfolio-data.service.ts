import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';

import { Project } from '../models/project.model';
import { SkillCategory } from '../models/skill.model';
import { Experience } from '../models/experience.model';
import { API_BASE_URL } from '../config/api.config';

export interface ContactMessage {
  name: string;
  email: string;
  message: string;
}

export interface ApiResponse {
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class PortfolioDataService {
  constructor(private http: HttpClient) {}

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${API_BASE_URL}/projects`).pipe(
      catchError((error) => {
        console.error('Error loading projects:', error);
        return of([]);
      })
    );
  }

  getProjectById(id: string): Observable<Project | undefined> {
    return this.http.get<Project>(`${API_BASE_URL}/projects/${id}`).pipe(
      catchError((error) => {
        console.error('Error loading project:', error);
        return of(undefined);
      })
    );
  }

  getSkills(): Observable<SkillCategory[]> {
    return this.http.get<SkillCategory[]>(`${API_BASE_URL}/skills`).pipe(
      catchError((error) => {
        console.error('Error loading skills:', error);
        return of([]);
      })
    );
  }

  getExperience(): Observable<Experience[]> {
    return this.http.get<Experience[]>(`${API_BASE_URL}/experience`).pipe(
      catchError((error) => {
        console.error('Error loading experience:', error);
        return of([]);
      })
    );
  }

  sendContactMessage(contactMessage: ContactMessage): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(`${API_BASE_URL}/contact`, contactMessage);
  }
}