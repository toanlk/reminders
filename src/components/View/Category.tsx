import * as React from 'react';
import { observer } from 'mobx-react';

import Typography from 'material-ui/Typography';
import { LinearProgress } from 'material-ui/Progress';
import WorkIcon from 'material-ui-icons/Work';
import MoreVertIcon from 'material-ui-icons/MoreVert';

//// Props and States /////////////////////////////////////////////////////////////////////

export interface CategoryViewState { }
export interface CategoryViewProps extends React.Props<CategoryView> {
    is_detail: boolean, 
    category: { id: number, name: string, number_of_tasks: number, task_completed: number }
}

//// Class ///////////////////////////////////////////////////////////////////////////////
@observer
export class CategoryView extends React.Component<CategoryViewProps, CategoryViewState> {

    constructor(props: CategoryViewProps) {
        super(props);
        this.state = this.getInitialState();
    }

    getInitialState(): CategoryViewState {
        return {}
    }

    //// render ///////////////////////////////////////////////////////////////////////////////

    render() {
        let more_icon = <MoreVertIcon className="icon-vertical" />;
        if (this.props.is_detail) more_icon = null;

        let progress = Math.round((this.props.category.task_completed/this.props.category.number_of_tasks) * 100);

        return (
            <div className="component-cat-overview">
                <WorkIcon className="icon-category" />
                {more_icon}
                <div className="cat-space"></div>
                <Typography type="body1" className="numb-task">
                    {this.props.category.number_of_tasks} Tasks
                    </Typography>
                <Typography type="headline" component="h1" className="title-task">
                    {this.props.category.name}
                </Typography>
                <div className="row">
                    <div className="col-12 progress-bar-label">
                        <LinearProgress value={progress} mode="determinate" className="progress-bar" />

                        <div className="text">{progress}%</div>
                    </div>
                </div>
            </div>
        );
    }

    //// logic ///////////////////////////////////////////////////////////////////////////////

}