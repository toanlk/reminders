import * as React from 'react';
import { observer } from 'mobx-react';

import Button from 'material-ui/Button';
import Menu, { MenuItem } from 'material-ui/Menu';
import Checkbox from 'material-ui/Checkbox';
import List, { ListItem, ListItemText } from 'material-ui/List';
import IconButton from 'material-ui/IconButton';

import AddIcon from 'material-ui-icons/Add';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import ArrowBackIcon from 'material-ui-icons/ArrowBack';

import { TodoView } from './Todo';
import { AddTodo } from './AddTodo';
import { CategoryView } from './Category';

//// Props and States /////////////////////////////////////////////////////////////////////

export interface TodoListViewState { is_add_todo: boolean, anchorEl: any, open: boolean, todo_selected: any }
export interface TodoListViewProps extends React.Props<TodoListView> { store: any, storeCategory: any }

//// Class ///////////////////////////////////////////////////////////////////////////////
@observer
export class TodoListView extends React.Component<TodoListViewProps, TodoListViewState> {

    constructor(props: TodoListViewProps) {
        super(props);
        this.state = this.getInitialState();
    }

    getInitialState(): TodoListViewState {
        return { is_add_todo: false, anchorEl: null, open: false, todo_selected: [] }
    }

    //// render ///////////////////////////////////////////////////////////////////////////////

    render() {
        console.log("TodoListView::render() ");

        let todos = this.props.storeCategory.getTodos(this.props.store.todos);
        //console.log(todos);

        //console.log(this.props.storeCategory.category_selected);

        if (this.state.is_add_todo) {
            return <AddTodo category_id={this.props.storeCategory.category_selected.id} store={this.props.store}
                onCloseAddTodo={() => this.onCloseAddTodo()} onAddedTodo={() => this.onAddedTodo()} />;
        }

        let lstTodos = null;

        if (todos) {
            lstTodos = todos.map((todo: any) => {
                return (<TodoView todo={todo} onSelected={this.onSelectedTodo.bind(this)} />)
            });
        }

        const options = [
            { id: 'complete', 'text': 'Complete' },
            { id: 'delete', 'text': 'Delete' },
        ];

        return (
            <div className="component-category-view">
                <Button fab className="btnBack" onClick={() => this.onCloseCategory()}>
                    <ArrowBackIcon className="iconBack" />
                </Button>

                <IconButton aria-label="More" aria-owns={open ? 'long-menu' : null} className="btnMoreIcon"
                    aria-haspopup="true" onClick={() => this.handleClick(event)} >
                    <MoreVertIcon className="iconMore" />
                </IconButton>
                <Menu id="simple-menu" anchorEl={this.state.anchorEl} open={this.state.open} onRequestClose={this.handleRequestClose}>
                    {options.map(option => (
                        <MenuItem key={option.id} onClick={() => this.handleRequestClose(option.id)} >
                            {option.text}
                        </MenuItem>
                    ))}
                </Menu>

                <CategoryView category={this.props.storeCategory.category_selected} is_detail={true} />
                <List className="todo-list">
                    {lstTodos}
                </List>
                <Button fab color="primary" className="btnAdd" onClick={() => this.onOpenAddTodo()}>
                    <AddIcon className="iconAdd" />
                </Button>
            </div>
        );
    }

    //// logic ///////////////////////////////////////////////////////////////////////////////

    onSelectedTodo(id: string, ids: any) {

        let currentIndex = this.state.todo_selected;

        if (ids.length > 0) {
            currentIndex.push(id);
        } else {
            currentIndex = currentIndex.filter((index: string) => index !== id)
        }

        this.setState({ todo_selected: currentIndex });
    }

    handleClick = (event: any) => {
        this.setState({ open: true, anchorEl: event.target });
    };

    handleRequestClose = (action: string) => {

        if(this.state.todo_selected) {
            if (action == "delete") {
                this.props.store.deleteTodo(this.state.todo_selected);
            }
            if (action == "complete") {
                //this.completeTodo()
            }
        }

        this.setState({ open: false });
    };

    onOpenAddTodo() {
        this.setState({ is_add_todo: true });
    }

    onCloseAddTodo() {
        this.setState({ is_add_todo: false });
    }

    onAddedTodo() {
        this.setState({ is_add_todo: false });
    }

    onCloseCategory() {
        this.props.storeCategory.selectCategory(0);
    }
}