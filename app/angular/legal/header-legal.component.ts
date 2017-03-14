import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'header-legal-comp',
  templateUrl: 'header-legal.component.html',
  styleUrls: ['legal.component.css']
})
export class HeaderLegalComponent {
  @Input() title;
}
