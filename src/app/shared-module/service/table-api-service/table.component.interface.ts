import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

export interface TableComponentInterface {
    getTableList(): Observable<Object>;
}
