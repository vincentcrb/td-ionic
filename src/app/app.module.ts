import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { IonicStorageModule } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {LeaderboardPage} from "../pages/leaderboard/leaderboard";
import {LevelPage} from "../pages/level/level";
import { QuestionServiceProvider } from '../providers/question-service/question-service';
import {QuestionsService} from "../services/questions.service";
import {QuizzPage} from "../pages/quizz/quizz";

@NgModule({
  declarations: [
    MyApp,
    LeaderboardPage,
    LevelPage,
    HomePage,
    TabsPage,
    QuizzPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LeaderboardPage,
    LevelPage,
    HomePage,
    TabsPage,
    QuizzPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    QuestionServiceProvider,
    QuestionsService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
