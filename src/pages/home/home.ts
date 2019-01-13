import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {LevelPage} from "../level/level";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  inputUsername: string;

  constructor(public navCtrl: NavController, private storage: Storage) {

  }

  saveForm(){
      this.storage.set('username',this.inputUsername);
      this.navCtrl.push(LevelPage);
  }

  loadForm(){
      this.storage.get('username').then((val) => {
          console.log('Your username is', val);
      });
  }

}
