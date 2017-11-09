import * as React from 'react';

import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import CloseIcon from 'material-ui-icons/Close';
import Typography from 'material-ui/Typography';
import Input from 'material-ui/Input';

//// Props and States /////////////////////////////////////////////////////////////////////

export interface AddTodoState { task: string }
export interface AddTodoProps extends React.Props<AddTodo> {
    store: any,
    category_id: number,
    onCloseAddTodo: () => void,
    onAddedTodo: () => void
}

//// Class ///////////////////////////////////////////////////////////////////////////////

export class AddTodo extends React.Component<AddTodoProps, AddTodoState> {

    constructor(props: AddTodoProps) {
        super(props);
        this.state = this.getInitialState();
    }

    getInitialState(): AddTodoState {
        return { task: '' }
    }

    //// render ///////////////////////////////////////////////////////////////////////////////

    render() {
        return (
            <div className="component-add-todo">
                <CloseIcon className="btnClose" onClick={() => this.onCloseAddTodo()} />
                <Typography type="headline" component="h1" className="title-task">
                    New Task
                </Typography>
                <form className="" noValidate autoComplete="off">
                    <Typography type="body1" className="title-text">
                        What tasks are you planning to perform?
                    </Typography>
                    <Input type="text" autoFocus fullWidth id="txtTask" className="txt-task"
                        onChange={(e) => this.setState({ task: e.target.value })}
                        onKeyDown={this.handleKeyPress.bind(this)} />
                </form>
                <Button className="btnAdd" onClick={() => this.onAddTodo()}>
                    <AddIcon className="iconAdd" />
                </Button>
            </div>
        );
    }

    //// logic ///////////////////////////////////////////////////////////////////////////////

    onCloseAddTodo() {
        this.props.onCloseAddTodo();
    }

    onAddTodo() {
        console.log("AddTodo::onAddTodo() ");

        const uuidv4 = require('uuid/v4');
        
        let todo = {
            "id": uuidv4(),
            "task": this.state.task,
            "category_id": this.props.category_id
        }

        this.props.store.addTodo(todo);

        //console.log(todos);
        this.props.onAddedTodo();
    }

    handleKeyPress(e: any) {
        if (e.key == "Enter") {
            event.preventDefault();
            event.stopPropagation();
            this.props.onCloseAddTodo();
        }
    }
}