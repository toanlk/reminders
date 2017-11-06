import * as React from 'react';

import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import ArrowBackIcon from 'material-ui-icons/ArrowBack';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';

import { Todo } from './Todo';

//// Props and States /////////////////////////////////////////////////////////////////////

export interface CategoryViewState { }
export interface CategoryViewProps extends React.Props<CategoryView> { todos: any, onCloseCategory: () => void }

//// Class ///////////////////////////////////////////////////////////////////////////////

export class CategoryView extends React.Component<CategoryViewProps, CategoryViewState> {

    constructor(props: CategoryViewProps) {
        super(props);
        this.state = this.getInitialState();
    }

    getInitialState(): CategoryViewState {
        return { }
    }

    componentDidMount() {
        console.log("CategoryView::componentDidMount() " + this.state);
    }

    //// render ///////////////////////////////////////////////////////////////////////////////

    render() {
        console.log("CategoryView::render() ");
        console.log(this.props.todos);

        let todos = '';
        
        if(this.props.todos) {
            todos = this.props.todos.map((todo: { id: number, task: string }) => {
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

                <Button fab color="primary" aria-label="add" className="btnAdd">
                    <AddIcon className="iconAdd" />
                </Button>
            </div>
        );
    }

    //// logic ///////////////////////////////////////////////////////////////////////////////
    onCloseCategory() {
        this.props.onCloseCategory();
    }

}