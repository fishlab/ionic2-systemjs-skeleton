import
{Page, NavController, NavParams}
from 'ionic-angular';


@Page({
    templateUrl: 'build/pages/tests/test1.html'
})

export class SamplePage {
    text: string;

    constructor() {
        this.text = 'what is text';
    }





}