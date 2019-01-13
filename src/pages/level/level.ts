import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {QuizzPage} from "../quizz/quizz";
import {Question} from "../../models/question";
import {QuestionsService} from "../../services/questions.service";

/**
 * Generated class for the LevelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-level',
  templateUrl: 'level.html',
})
export class LevelPage {

    questionList: Question[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public questionsService: QuestionsService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LevelPage');
  }

    getQuestions(level) {

        let url: string;

        url = 'https://opentdb.com/api.php?amount=10&difficulty='+level;

        console.log(url);

        this.questionList = this.questionsService.questionsList.filter(function (qt){return qt.difficulty == level})

        console.log(this.questionList);

        this.navCtrl.push(QuizzPage, {questionList: this.questionList});
        //return this.http.get(url);
    }

}
