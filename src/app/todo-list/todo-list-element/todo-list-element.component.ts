import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-todo-list-element',
  templateUrl: './todo-list-element.component.html',
  styleUrls: ['./todo-list-element.component.scss']
})
export class TodoListElementComponent implements OnInit {

  @Input()
  listElement: string;

  @Input()
  eIndex: number;

  @Input()
  data: string[];

  constructor() {
  }

  ngOnInit(): void {
  }

  removeFromList(eIndex: number) {
    this.data.splice(eIndex, 1);
  }

  confirmEdit(e: Event, eIndex: number, confirmInput: any) {
    e.preventDefault()
    this.data[eIndex] = confirmInput.value;
    confirmInput.value = '';
  }
}
