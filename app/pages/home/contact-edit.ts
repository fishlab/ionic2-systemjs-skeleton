import {Component} from '@angular/core';
import {NavController,NavParams} from 'ionic-angular';
import {Page} from "../page";
import {Http} from '../../services/http';

@Component({
  templateUrl: 'build/pages/home/contact-edit.html'
})
export class ContactEditPage extends Page{
  private contact:any = {};
  private default ;
  constructor(
    private navCtrl: NavController,
    private params: NavParams,

    private http:Http
  ) {
    super();
  }

  onPageWillEnter() {
    this.contact = this.params.get('contact');
    this.default = this.params.get('default');
  }


  save(){
    this.http.post(this.userApi('/contacts/update-or-create'), this.contact ).toPromise().then( contact =>{
      this.navCtrl.pop();
    });
  }
}
