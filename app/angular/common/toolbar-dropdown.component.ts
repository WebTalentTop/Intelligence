import { Component, EventEmitter, Input, OnInit, Output, animate, transition, trigger, state, style } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'toolbar-dropdown-comp',
  templateUrl: 'toolbar-dropdown.component.html',
  styleUrls: ['toolbar-dropdown.component.css'],
  animations: [
    trigger('toggleArrow', [
      state('inactive', style({
        transform:'rotate(0deg)'
      })),
      state('active', style({
        transform:'rotate(180deg)'
      })),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out'))
    ])
  ]
})
export class ToolbarDropdownComponent {
  @Input() title;
  @Input() subtitle;
  @Output() toggled = new EventEmitter<boolean>();
  open = false;
  state: string = 'inactive';

  toggleMove(opened: boolean){
    this.state = (this.state === 'inactive' ? 'active' : 'inactive');
    this.toggled.emit(opened);
    this.open = !this.open;
  }

}
