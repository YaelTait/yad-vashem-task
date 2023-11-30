import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

interface FoodNode {
  name: string;
  type: string;
  path: string;
  isDirectory: boolean;
  children?: FoodNode[];
}

@Component({
  selector: 'app-right-panel',
  templateUrl: './right-panel.component.html',
  styleUrls: ['./right-panel.component.scss'],
})
export class RightPanelComponent implements OnChanges {
  @Input() node: FoodNode | null = null;
  filesToDisplay: FoodNode[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['node'] && changes['node'].currentValue) {
      this.updateFilesToDisplay();
    }
  }

  private updateFilesToDisplay() {
    if (this.node && this.node.children) {
      // Filter out non-directory files
      this.filesToDisplay = this.node.children.filter(file => !file.isDirectory);

      this.filesToDisplay.forEach(file => {

        file.path = "..\\assets\\images" + file.path.substring('C:\Users\This_user\Downloads\\'.length + 2)
        if (file.type !== '.JPG') {
          file.type = 'Unsupported format';
        }
      });
    } else {
      this.filesToDisplay = [];
    }
  }
}
