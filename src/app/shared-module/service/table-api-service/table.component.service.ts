import {TableComponentInterface} from "./table.component.interface";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TABLE_LIST} from "./api-service-url";

@Injectable()
export class TableComponentService implements TableComponentInterface{
    constructor(
        private $http: HttpClient
    ){

    }

    getTableList(): Observable<Object> {
        return this.$http.get(`${TABLE_LIST}`);;
    }



}
