import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Page} from "../page";
import {Http} from '../../services/http';
import {ContactEditPage} from "./contact-edit";
@Component({
  templateUrl: 'build/pages/home/contacts.html'
})
export class ContactsPage extends Page {
  private contacts;
  private default;
  constructor(
    private navCtrl: NavController,
    private http: Http
  ) {
    super();
  }

  onPageWillEnter() {
    this.getContacts();
  }

  getContacts() {
    this.http.get(this.userApi('/contacts/list')).toPromise().then(ret => {
      this.contacts = ret.contacts;
      this.default = ret.default;
    });
  }
  create() {
    this.navCtrl.push(ContactEditPage, {
      contact: {}
    });

  }

  edit(contact) {
    this.navCtrl.push(ContactEditPage, {
      contact: contact,
      default: this.default
    });
  }

}
