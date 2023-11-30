import {Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";

@Injectable()

export class ShoppingListService{
 private ingredients: Ingredient[] = [
    new Ingredient("Potatoes", 5),
    new Ingredient("Rice", 3),
    new Ingredient("Meat", 4),
  ]

  getIngredients(){
    return this.ingredients.slice()
  }

  addIngredient(ingredient:Ingredient) {
    this.ingredients.push(ingredient);
  }

}
