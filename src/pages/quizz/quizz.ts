import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Question} from "../../models/question";

/**
 * Generated class for the QuizzPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-quizz',
  templateUrl: 'quizz.html',
})
export class QuizzPage {

    questionList: Question[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuizzPage');
  }

  ngOnInit(){
    this.questionList = this.navParams.get('questionList');
      console.log(this.questionList);
  }

}
