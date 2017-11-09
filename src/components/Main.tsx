import * as React from 'react';
import { observer } from 'mobx-react';

import { Header } from "./View/Header";
import { TodoListView } from "./View/TodoList";
import { CategoryListView } from "./View/CategoryList";

import { TodoList } from "./Controller/TodoList";
import { Category } from "./Controller/Category";
import { CategoryList } from "./Controller/CategoryList";

//// Props and States /////////////////////////////////////////////////////////////////////

export interface MainState { }
export interface MainProps extends React.Props<Main> { }

//// Class ///////////////////////////////////////////////////////////////////////////////

const store = new TodoList();
store.todos = require('../storage/todo.json');

const storeCategory = new CategoryList();
let categories = require('../storage/category.json');

categories.map((cat: any) => {
    storeCategory.categories.push(new Category(cat.id, cat.name, cat.number_of_tasks, cat.task_completed));
});

@observer
export class Main extends React.Component<MainProps, MainState> {

    constructor(props: MainProps) {
        super(props);
        this.state = this.getInitialState();
    }

    getInitialState(): MainState {
        return {}
    }

    //// render ///////////////////////////////////////////////////////////////////////////////

    render() {
        console.log("Main::render()");

        let main_view = <CategoryListView store={storeCategory} />;
        let header_view = <Header store={store} />;

        let bgColor = "#3f51b5";

        if (storeCategory.category_selected) {

            main_view = <TodoListView
                store={store}
                storeCategory={storeCategory} />;

            bgColor = "#ffffff";
            header_view = null;
        }

        return (
            <div className="component-app" style={{ backgroundColor: bgColor }}>
                <div className="container">
                    {header_view}
                    {main_view}
                </div>
            </div>
        );
    }

    //// logic ///////////////////////////////////////////////////////////////////////////////

}