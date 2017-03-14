import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'privacy-policy-comp',
  templateUrl: 'privacy.component.html',
  styleUrls: ['legal.component.css']
})
export class PrivacyPolicyComponent {
  privacyTitle = "Privacy";
}
