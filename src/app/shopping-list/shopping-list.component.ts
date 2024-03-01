import {Component, OnDestroy, OnInit} from '@angular/core';
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "./shopping-list.service";
import {Subscription} from "rxjs";
import {LoggingService} from "../logging.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private subscription: Subscription;


  constructor(private shoppingListService: ShoppingListService,
              private loggingService: LoggingService) {
  }


  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients()
    this.subscription= this.shoppingListService.ingredientChanged
      .subscribe((ingredients: Ingredient[]  )=>{
        this.ingredients= ingredients
      })
    this.loggingService.printLog("Hello from Shopping List Component")
  }

  onEditItem(index:number){
    //pass index to shoping-edit c. through the service (specificaly Subject in the service): emit new value
   this.shoppingListService.startedEditing.next(index); //pass index to subject -> so we can listen in other place
  }



 ngOnDestroy() {
  this.subscription.unsubscribe();
 }
}
