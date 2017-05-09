import {Component, OnInit} from '@angular/core';
@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.less']
})
export class ProductComponent implements OnInit {
    private products:Array<Product>;

    constructor() {
    }

    ngOnInit() {
        this.products = [
            new Product(1, 'pro1', ['p1', 'p2']),
            new Product(2, 'pro2', ['p2', 'p3']),
            new Product(3, 'pro3', ['p4']),
            new Product(4, 'pro4', ['p5'])
        ]
    }
}
class Product {
    constructor(public id:number,
                public name:string,
                public cat:Array<string>) {
    }
}

