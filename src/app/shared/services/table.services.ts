import {userStatus} from '../../../app/core/enum/userStatus.enum';
import {Injectable} from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';


@Injectable()

export class TableService {
  constructor(private http:HttpClient) {}

  getEvents() {
    return EXAMPLE_DATA
  }
}

export interface TableItem {
    id: number;
    name: string;
    email: string;
    status: string;
    details: string; 
  }


const EXAMPLE_DATA: TableItem[] = [
    {  
        id: 1,
        name: "Calvin Rittmeyer",
        email: "crittmeyer0@zimbio.com",
        status: userStatus[1],
        details: 'Having no hair made him look even hairier.'
    },
  
    {
        id: 2,
        name: "Madelene Pellew",
        email: "mpellew1@gmail.my",
        status: userStatus[0],
        details: 'There\'s a reason that roses have thorns.'
    },
  
    {
        id: 3,
        name: "Heinrick Wedgwood",
        email: "hwedgwood9@discovery.com",
        status: userStatus[1],
        details: 'It was getting dark, and we weren’t there yet.'
    },
  
    {
        id: 4,
        name: "Alfy Valder",
        email: "avalder8@typepad.com",
        status: userStatus[1],
        details: 'There are no heroes in a punk rock band.'
    },
  
    {
        id: 5,
        name: "Theodore Cawthery",
        email: "tcawthery2@cornell.edu",
        status: userStatus[1],
        details: 'The paintbrush was angry at the color the artist chose to use.'
    },
    {
        id: 6,
        name: "Prent",
        email: "pmilstead1@scribd.com",
        status: userStatus[0],
        details: 'Nothing seemed out of place except the washing machine in the bar.'
    },
  
    {
        id: 7,
        name: "Helaina",
        email: "htuck3@barnesandnoble.com",
        status: userStatus[0],
        details: 'The irony of the situation wasn\'t lost on anyone in the room.'
    }
  ];

export class TableDataSource extends DataSource<TableItem> {
data: TableItem[] = EXAMPLE_DATA;
paginator: MatPaginator;
sort: MatSort;

constructor() {
    super();
}

/**
 * Connect this data source to the table. The table will only update when
 * the returned stream emits new items.
 * @returns A stream of the items to be rendered.
 */
connect(): Observable<TableItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
    observableOf(this.data),
    this.paginator.page,
    this.sort.sortChange
    ];

    return merge(...dataMutations).pipe(map(() => {
    return this.getPagedData(this.getSortedData([...this.data]));
    }));
}

/**
 *  Called when the table is being destroyed. Use this function, to clean up
 * any open connections or free any held resources that were set up during connect.
 */
disconnect() {}

/**
 * Paginate the data (client-side). If you're using server-side pagination,
 * this would be replaced by requesting the appropriate data from the server.
 */
private getPagedData(data: TableItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
}

/**
 * Sort the data (client-side). If you're using server-side sorting,
 * this would be replaced by requesting the appropriate data from the server.
 */
private getSortedData(data: TableItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
    return data;
    }

    return data.sort((a, b) => {
    const isAsc = this.sort.direction === 'asc';
    switch (this.sort.active) {
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
    }
    });
}
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean) {
return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}