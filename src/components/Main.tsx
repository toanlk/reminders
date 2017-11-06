import * as React from 'react';

import { Header } from "./Header";
import { Category } from "./Category";
import { CategoryView } from "./CategoryView";

//// Props and States /////////////////////////////////////////////////////////////////////

export interface MainState { category: any, todos: any, is_category_view: boolean }
export interface MainProps extends React.Props<Main> { }

//// Class ///////////////////////////////////////////////////////////////////////////////

export class Main extends React.Component<MainProps, MainState> {

    constructor(props: MainProps) {
        super(props);
        this.state = this.getInitialState();
    }

    getInitialState(): MainState {

        let category = require('../storage/category.json');
        if (category) {
            localStorage.setItem('category', JSON.stringify(category));
        }

        let todos = require('../storage/todo.json');
        if (todos) {
            localStorage.setItem('todos', JSON.stringify(todos));
        }

        return { category: category, todos: todos, is_category_view: false }
    }

    //// render ///////////////////////////////////////////////////////////////////////////////

    render() {
        console.log("Main::render()");

        let main_view = <Category onSelectCategory={() => this.onSelectCategory()} />;
        let header_view = <Header />;

        let bgColor = "#5A89E6";

        if (this.state.is_category_view) {
            main_view = <CategoryView onCloseCategory={() => this.onCloseCategory()} />;
            bgColor = "#ffffff";
            header_view = null;
        }

        return (
            <div className="container component-app" style={{ backgroundColor: bgColor }}>
                {header_view}
                {main_view}
            </div>
        );
    }

    //// logic ///////////////////////////////////////////////////////////////////////////////

    onSelectCategory() {
        this.setState({ is_category_view: true });
    }

    onCloseCategory() {
        this.setState({ is_category_view: false });
    }
}