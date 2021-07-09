import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input()
  data: string[];

  constructor() {

  }

  addToList(addInput: any, e: Event) {
    e.preventDefault();
    this.data.push(addInput.value);
    addInput.value = '';

  }

  removeFromList(index: number) {
    this.data.slice(index - 1, index);
  }

  ngOnInit(): void {
  }

}
