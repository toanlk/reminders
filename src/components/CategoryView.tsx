import * as React from 'react';

import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import ArrowBackIcon from 'material-ui-icons/ArrowBack';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';

import { Todo } from './Todo';
import { AddTodo } from "./AddTodo";

//// Props and States /////////////////////////////////////////////////////////////////////

export interface CategoryViewState { is_add_todo: boolean, todos: any }
export interface CategoryViewProps extends React.Props<CategoryView> { onCloseCategory: () => void }

//// Class ///////////////////////////////////////////////////////////////////////////////

export class CategoryView extends React.Component<CategoryViewProps, CategoryViewState> {

    constructor(props: CategoryViewProps) {
        super(props);
        this.state = this.getInitialState();
    }

    getInitialState(): CategoryViewState {
        let todos = JSON.parse(localStorage.getItem('todos'));
        return { is_add_todo: false, todos: todos }
    }

    // componentDidMount() {
    //     console.log("CategoryView::componentDidMount() " + this.state);
    // }

    //// render ///////////////////////////////////////////////////////////////////////////////

    render() {
        console.log("CategoryView::render() ");
        //console.log(this.props.todos);

        if (this.state.is_add_todo) {
            return <AddTodo onCloseAddTodo={() => this.onCloseAddTodo()} onAddedTodo={() => this.onAddedTodo()} />;
        }

        let todos = '';

        if (this.state.todos) {
            todos = this.state.todos.map((todo: { id: number, task: string }) => {
                return (<Todo id={todo.id} task={todo.task} />)
            });
        }

        return (
            <div className="component-category-view">
                <Button fab className="btnBack" onClick={() => this.onCloseCategory()}>
                    <ArrowBackIcon className="iconBack" />
                </Button>
                <MoreVertIcon className="btnMoreIcon" />

                <List className="todo-list">
                    {todos}
                </List>

                <Button fab color="primary" className="btnAdd" onClick={() => this.onOpenAddTodo()}>
                    <AddIcon className="iconAdd" />
                </Button>
            </div>
        );
    }

    //// logic ///////////////////////////////////////////////////////////////////////////////

    onOpenAddTodo() {
        this.setState({ is_add_todo: true });
    }

    onCloseAddTodo() {
        this.setState({ is_add_todo: false });
    }

    onAddedTodo() {
        let todos = JSON.parse(localStorage.getItem('todos'));
        this.setState({ is_add_todo: false, todos: todos });
    }

    onCloseCategory() {
        this.props.onCloseCategory();
    }

}