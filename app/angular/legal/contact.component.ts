import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'contact-us-comp',
  templateUrl: 'contact.component.html',
  styleUrls: ['legal.component.css']
})
export class ContactUsComponent {
  contactTitle = "Contact";

}
