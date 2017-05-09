import {Component} from '@angular/core';
import * as $ from "jquery";
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'My First Angular App';

    constructor(){
        this.test()
    }

    test() {
        $(function () {
            $("button").click(function () {
                alert()
            })
        })
    }
}
