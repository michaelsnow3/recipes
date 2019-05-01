import { Component, OnInit, ViewChild } from '@angular/core';

import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef;
  @ViewChild('amountInput') amountInputRef;
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {}
  onAddItem = () => {
    let newIngredient: Ingredient = {
      name: this.nameInputRef.nativeElement.value,
      amount: this.amountInputRef.nativeElement.value
    };
    this.shoppingListService.addIngredient(newIngredient);
  };
}
