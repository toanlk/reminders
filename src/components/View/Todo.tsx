import * as React from 'react';

import Checkbox from 'material-ui/Checkbox';
import { ListItem, ListItemText } from 'material-ui/List';

//// Props and States /////////////////////////////////////////////////////////////////////

export interface TodoViewState { checked: any }
export interface TodoViewProps extends React.Props<TodoView> {
    todo: { id: string, task: string, is_completed: boolean },
    onSelected: (id: string, ids: any) => void
}

//// Class ///////////////////////////////////////////////////////////////////////////////

export class TodoView extends React.Component<TodoViewProps, TodoViewState> {

    constructor(props: TodoViewProps) {
        super(props);
        this.state = this.getInitialState();
    }

    getInitialState(): TodoViewState {
        return { checked: [], }
    }

    handleToggle(id: string) {
        const { checked } = this.state;
        const currentIndex = checked.indexOf(id);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(id);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        this.props.onSelected(id, newChecked);

        this.setState({ checked: newChecked });
    };


    //// render ///////////////////////////////////////////////////////////////////////////////

    render() {

        //console.log("Todo::render() " + this.props.id + ": " + this.props.task);

        let customStyle = this.props.todo.is_completed ? { textDecoration: 'line-through' } : {};

        return (
            <ListItem key={this.props.todo.id} dense button className="todo"
                onClick={() => this.handleToggle(this.props.todo.id)}>
                <Checkbox disableRipple tabIndex={-1} checked={this.state.checked.indexOf(this.props.todo.id) !== -1} />
                <ListItemText primary={this.props.todo.task} style={customStyle}/>
            </ListItem>
        );
    }

    //// logic ///////////////////////////////////////////////////////////////////////////////

}