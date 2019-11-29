import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImazsakService {

  constructor(private http: HttpClient) {
  }

  public listGroups(): Observable<GroupAdminListData[]> {
    return this.http.get<GroupAdminListData[]>(`/api/admin/groups`);
  }

  public createGroup(data: CreateGroupRequest): Observable<any> {
    return this.http.post<any>(`/api/admin/groups`, data);
  }

  public addUserToGroup(data: AddUserToGroupRequest): Observable<any> {
    return this.http.post<any>(`/api/admin/groups/add-user`, data);
  }

  public listUsers(): Observable<UserAdminListData[]> {
    return this.http.get<UserAdminListData[]>(`/api/admin/users`);
  }

}

export interface GroupMember {
  id: string;
}

export interface GroupAdminListData {
  id: string;
  name: string;
  members: GroupMember[];
}

export interface CreateGroupRequest {
  name: string;
  adminUserId: string;
}

export interface UserAdminListData {
  id: string;
  name?: string;
}

export interface AddUserToGroupRequest {
  userId: string;
  groupId: string;
}
