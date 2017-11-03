import * as React from 'react';

import { Progress } from "./Progress";

import { LinearProgress } from 'material-ui/Progress';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

import WorkIcon from 'material-ui-icons/Work';
import MoreVertIcon from 'material-ui-icons/MoreVert';


//// Props and States /////////////////////////////////////////////////////////////////////

export interface TodoCategoryState { }
export interface TodoCategoryProps extends React.Props<TodoCategory> { }

//// Class ///////////////////////////////////////////////////////////////////////////////

export class TodoCategory extends React.Component<TodoCategoryProps, TodoCategoryState> {

    constructor(props: TodoCategoryProps) {
        super(props);
        this.state = this.getInitialState();
    }

    getInitialState(): TodoCategoryState {
        return {}
    }

    componentDidMount() {
        console.log("TodoCategory::componentDidMount() " + this.state);
    }

    //// render ///////////////////////////////////////////////////////////////////////////////

    render() {
        return (
            <Card className="component-category">
                <CardContent>
                    <WorkIcon className="icon-category" />
                    <MoreVertIcon className="icon-vertical" />
                    <div className="cat-space"></div>
                    <Typography type="body1" className="numb-task">
                        12 Tasks
                    </Typography>
                    <Typography type="headline" component="h1" className="title-task">
                        Work
                    </Typography>
                    <div className="row">
                        <div className="col-12 progress-bar-label">
                            <LinearProgress value={24} mode="determinate" className="progress-bar" />

                            <div className="text">24%</div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        );
    }

    //// logic ///////////////////////////////////////////////////////////////////////////////

}