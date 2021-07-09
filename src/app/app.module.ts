import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListElementComponent } from './todo-list/todo-list-element/todo-list-element.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoListElementComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
