import * as React from 'react';

import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import CloseIcon from 'material-ui-icons/Close';
import Typography from 'material-ui/Typography';
import TextField from 'material-ui/TextField';

//// Props and States /////////////////////////////////////////////////////////////////////

export interface AddTodoState { }
export interface AddTodoProps extends React.Props<AddTodo> { }

//// Class ///////////////////////////////////////////////////////////////////////////////

export class AddTodo extends React.Component<AddTodoProps, AddTodoState> {

    constructor(props: AddTodoProps) {
        super(props);
        this.state = this.getInitialState();
    }

    getInitialState(): AddTodoState {
        return {}
    }

    //// render ///////////////////////////////////////////////////////////////////////////////

    render() {
        return (
            <div className="component-add-todo">
                <CloseIcon className="btnClose" onClick={this.onClose}/>
                <Typography type="headline" component="h1" className="title-task">
                    New Task
                </Typography>
                <form className="" noValidate autoComplete="off">
                    <Typography type="body1" className="title-text">
                        What tasks are you planning to perform?
                    </Typography>
                    <TextField id="txtTask" className="txt-task" margin="normal"/>
                </form>
                <Button className="btnAdd" onClick={this.onAddTodo}>
                    <AddIcon className="iconAdd" />
                </Button>
            </div>
        );
    }

    //// logic ///////////////////////////////////////////////////////////////////////////////

    onClose() {

    }

    onAddTodo() {
        console.log("AddTodo::onAddTodo() ");

        let todos = JSON.parse(localStorage.getItem('todos'));
        console.log(todos); 
    }
}