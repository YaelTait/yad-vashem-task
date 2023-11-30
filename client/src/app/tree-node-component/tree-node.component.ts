// tree-node.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tree-node',
  templateUrl: './tree-node.component.html',
})
export class TreeNodeComponent {
  @Input() node: any;
}
