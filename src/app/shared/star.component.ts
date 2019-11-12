import { Component, OnChanges, Input } from '@angular/core';
import { ProductListComponent } from '../products/product-list.component';

@Component({

    selector: 'pm-star',
    templateUrl : './star.component.html',
    styleUrls : ['./star.component.css']

})

export class starComponent implements OnChanges{
    @Input() rating : number;
    starWidth : number;

    ngOnChanges() : void {
        this.starWidth = this.rating * 75 / 5;
    }

}