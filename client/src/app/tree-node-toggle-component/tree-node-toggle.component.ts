// tree-node-toggle.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tree-node-toggle',
  templateUrl: './tree-node-toggle.component.html',
})
export class TreeNodeToggleComponent {
  @Input() node: any;
  @Output() toggle = new EventEmitter<any>();
}
