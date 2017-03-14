import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'terms-comp',
  templateUrl: 'terms.component.html',
  styleUrls: ['legal.component.css']
})
export class TermsComponent {
  termsTitle = "Terms of Service";
}
