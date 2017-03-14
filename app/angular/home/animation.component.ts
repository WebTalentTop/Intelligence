import { Component, EventEmitter, Input, OnInit, Output, NgZone } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';




@Component({
  moduleId: module.id,
  selector: 'animation',
  templateUrl: 'animation.component.html',
  styleUrls: ['animation.component.css'],
  providers: []
})
export class AnimationComponent implements OnInit {
  firstPic = 1;
  secondPic = 3;
  thirdPic = 15;
  forthPic = 12;
  fifthPic = 10;

  first = "";
  second = "";
  third = "";
  forth = "";
  fifth = "";

  mySet = new Set();

  images = [
      'app/images/business_intelligence_sherlock_data_source_access.png',
      'app/images/business_intelligence_sherlock_data_source_adwords.png',
      'app/images/business_intelligence_sherlock_data_source_aws.png',
      'app/images/business_intelligence_sherlock_data_source_bing.png',
      'app/images/business_intelligence_sherlock_data_source_criteo.png',
      'app/images/business_intelligence_sherlock_data_source_entrata.png',
      'app/images/business_intelligence_sherlock_data_source_excel.png',
      'app/images/business_intelligence_sherlock_data_source_facebook.png',
      'app/images/business_intelligence_sherlock_data_source_firebird.png',
      'app/images/business_intelligence_sherlock_data_source_googleanalytics.png',
      'app/images/business_intelligence_sherlock_data_source_hadoop.png',
      'app/images/business_intelligence_sherlock_data_source_kenshoo.png',
      'app/images/business_intelligence_sherlock_data_source_mailchimp.png',
      'app/images/business_intelligence_sherlock_data_source_marin.png',
      'app/images/business_intelligence_sherlock_data_source_mongo.png',
      'app/images/business_intelligence_sherlock_data_source_moz.png',
      'app/images/business_intelligence_sherlock_data_source_mysql.png',
      'app/images/business_intelligence_sherlock_data_source_oracle.png',
      'app/images/business_intelligence_sherlock_data_source_postgres.png',
      'app/images/business_intelligence_sherlock_data_source_quickbooks.png',
      'app/images/business_intelligence_sherlock_data_source_salesforce.png',
      'app/images/business_intelligence_sherlock_data_source_sparksql.png',
      'app/images/business_intelligence_sherlock_data_source_stripe.png',
      'app/images/business_intelligence_sherlock_data_source_teradata.png',
      'app/images/business_intelligence_sherlock_data_source_trello.png',
      'app/images/business_intelligence_sherlock_data_source_twitter.png',
      'app/images/business_intelligence_sherlock_data_source_xero.png'
  ];


  constructor(
    private ngZone: NgZone
  ) {
    Observable.interval(0)
        .take(1).map((x) => x+1)
        .subscribe((x) => {
          this.initialDelay();
        });

        this.mySet.add(this.firstPic);
        this.mySet.add(this.secondPic);
        this.mySet.add(this.thirdPic);
        this.mySet.add(this.forthPic);
        this.mySet.add(this.fifthPic);

        this.first = this.images[this.firstPic];
        this.second = this.images[this.secondPic];
        this.third = this.images[this.thirdPic];
        this.forth = this.images[this.forthPic];
        this.fifth = this.images[this.fifthPic];
  }

  ngOnInit() {}



  initialDelay(){
    Observable.interval(3000)
        .take(Infinity).map((x) => x+1)
        .subscribe((x) => {
          this.startTransitions();
        });
  }

  startTransitions(){
    Observable.interval(600)
        .take(1).map((x) => x+1)
        .subscribe((x) => {
          this.callAtInterval();
        });
    Observable.interval(1800)
        .take(1).map((x) => x+1)
        .subscribe((x) => {
          this.callAtInterval2();
        });
    Observable.interval(2400)
        .take(1).map((x) => x+1)
        .subscribe((x) => {
          this.callAtInterval3();
        });
    Observable.interval(1200)
        .take(1).map((x) => x+1)
        .subscribe((x) => {
          this.callAtInterval4();
        });
    Observable.interval(0)
        .take(1).map((x) => x+1)
        .subscribe((x) => {
          this.callAtInterval5();
        });
  }

  getRand(){
      var rand = Math.floor((Math.random() * this.images.length));
      while (this.mySet.has(rand)) {
          rand = Math.floor((Math.random() * this.images.length));
      }
      return rand;
  }

  callAtInterval(){
      var last = this.firstPic;
      this.firstPic = this.getRand();
      this.mySet.delete(last);
      this.mySet.add(this.firstPic);
      this.first = this.images[this.firstPic];
  }

  callAtInterval2(){
      var last = this.secondPic;
      this.secondPic = this.getRand();
      this.mySet.delete(last);
      this.mySet.add(this.secondPic);
      this.second = this.images[this.secondPic];
  }

  callAtInterval3(){
      var last = this.thirdPic;
      this.thirdPic = this.getRand();
      this.mySet.delete(last);
      this.mySet.add(this.thirdPic);
      this.third = this.images[this.thirdPic];
  }

  callAtInterval4(){
      var last = this.forthPic;
      this.forthPic = this.getRand();
      this.mySet.delete(last);
      this.mySet.add(this.forthPic);
      this.forth = this.images[this.forthPic];
  }

  callAtInterval5(){
      var last = this.fifthPic;
      this.fifthPic = this.getRand();
      this.mySet.delete(last);
      this.mySet.add(this.fifthPic);
      this.fifth = this.images[this.fifthPic];
  }

}
