import * as React from 'react';

import { ListItem, ListItemText } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';

//// Props and States /////////////////////////////////////////////////////////////////////

export interface TodoState { checked: any }
export interface TodoProps extends React.Props<Todo> { id: number, task: string }

//// Class ///////////////////////////////////////////////////////////////////////////////

export class Todo extends React.Component<TodoProps, TodoState> {

    constructor(props: TodoProps) {
        super(props);
        this.state = this.getInitialState();
    }

    getInitialState(): TodoState {
        return { checked: [0], }
    }

    handleToggle(id: number) {
        const { checked } = this.state;
        const currentIndex = checked.indexOf(id);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(id);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        this.setState({
            checked: newChecked,
        });
    };


    //// render ///////////////////////////////////////////////////////////////////////////////

    render() {

        console.log("Todo::render() " + this.props.id + ": " + this.props.task);

        return (
            <ListItem key={this.props.id} dense button className="todo"
                onClick={() => this.handleToggle(this.props.id)}>
                <Checkbox disableRipple tabIndex={-1} checked={this.state.checked.indexOf(this.props.id) !== -1} />
                <ListItemText primary={this.props.task} />
            </ListItem>
        );
    }

    //// logic ///////////////////////////////////////////////////////////////////////////////

}