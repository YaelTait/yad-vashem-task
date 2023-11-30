// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // Import this line
import { RightPanelComponent } from './right-panel/right-panel.component';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTreeModule } from '@angular/material/tree';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatDividerModule } from '@angular/material/divider';


import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

import { MatSidenavModule } from '@angular/material/sidenav';

// import { TreeComponent } from './tree-component/tree-component.component';
import { TreeNodeComponent } from './tree-node-component/tree-node.component';
import{TreeNodeToggleComponent} from "./tree-node-toggle-component/tree-node-toggle.component"
import { TreeComponentComponent } from './tree-component/tree-component.component';
@NgModule({
  declarations: [
    AppComponent,
    RightPanelComponent,
    TreeNodeComponent,
    TreeNodeToggleComponent,
    TreeComponentComponent
    // other components
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule, // Add this line
    MatSliderModule,
    MatButtonModule,
    MatTreeModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatSidenavModule,
    MatDividerModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
