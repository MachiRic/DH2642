class MenuController {
    constructor(generalController, view) {
        this.generalController = generalController;
        this.view = view;
        //this.view = new MenuView(container, model);
        view.button.addEventListener("click", () => {view.updateSearch(view.select.value, view.input.value)
            view.button_list.forEach((dish) =>{
                dish[0].addEventListener("click", () => this.generalController.showDishview(dish[1]))});  
        });
        
        view.button_list.forEach((dish) => {
            dish[0].addEventListener("click", () => this.generalController.showDishview(dish[1]));
        });

    }

}