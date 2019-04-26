import { Component, OnInit, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @Output() testButtonClicked = new EventEmitter<{ test: string }>();
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  @ViewChild('nameInput') name;
  @ViewChild('amountInput') amount;
  constructor() {}

  ngOnInit() {}
  onAddItem = () => {
    this.ingredientAdded.emit({
      name: this.name.nativeElement.value,
      amount: this.amount.nativeElement.value
    });
  };
}
