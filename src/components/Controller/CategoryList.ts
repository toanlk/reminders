import { observable, computed } from 'mobx';

export class CategoryList {
    
    @observable categories: any;

    @observable category_selected: any;

    constructor() {
        this.categories = [];
    }

    addCategory(category: any) {
        this.categories.push(category);
    }

    selectCategory(id: number) {

        if(id) {
            let category = this.categories.filter((cat: any) => { 
                if(cat.id == id) return cat;
            });
    
            if(category.length) {
                this.category_selected = category[0];
            }
        } else {
            this.category_selected = null;
        }
    }

    getTodos(todos: any) {
        let filterTodo = todos.filter((todo: { id: string, task: string, category_id: number }) => {
            if (todo.category_id == this.category_selected.id) return todo
        });

        return filterTodo;
    }
}

