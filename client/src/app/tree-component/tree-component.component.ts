
import { Component, OnInit, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { FlatTreeControl } from '@angular/cdk/tree';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material/tree';

interface FoodNode {
  name: string;
  type: string;
  path: string;
  isDirectory: boolean;
  children?: FoodNode[];
}

interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-tree-component',
  templateUrl: './tree-component.component.html',
  styleUrls: ['./tree-component.component.scss']
})
export class TreeComponentComponent {
  @Input() TREE_DATA: FoodNode[] = [];
  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      type: node.type,
      path: node.path,
      isDirectory: node.isDirectory,
      children: node.children,
      level: level,
    };
  };
  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level, node => node.expandable);
  treeFlattener = new MatTreeFlattener<FoodNode, ExampleFlatNode>(
    this._transformer, node => node.level, node => node.expandable, node => node.children
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  selectedNode: FoodNode | null = null;
  @Output() folderSelected = new EventEmitter<FoodNode>();

  folderClicked(node: FoodNode): void {
    this.folderSelected.emit(node);
    this.selectedNode = node;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['TREE_DATA'] && changes['TREE_DATA'].currentValue) {
      this.dataSource.data = this.TREE_DATA;
      console.log("TREE_DATA", this.TREE_DATA);
    }
  }
}

