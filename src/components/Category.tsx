import * as React from 'react';

import Typography from 'material-ui/Typography';
import { LinearProgress } from 'material-ui/Progress';
import Card, { CardActions, CardContent } from 'material-ui/Card';

import WorkIcon from 'material-ui-icons/Work';
import MoreVertIcon from 'material-ui-icons/MoreVert';


//// Props and States /////////////////////////////////////////////////////////////////////

export interface CategoryState { }
export interface CategoryProps extends React.Props<Category> { onSelectCategory: () => void }

//// Class ///////////////////////////////////////////////////////////////////////////////

export class Category extends React.Component<CategoryProps, CategoryState> {

    constructor(props: CategoryProps) {
        super(props);
        this.state = this.getInitialState();
    }

    getInitialState(): CategoryState {
        return { }
    }

    componentDidMount() {
        console.log("Category::componentDidMount() " + this.state);
    }

    //// render ///////////////////////////////////////////////////////////////////////////////

    render() {
        return (
            <Card className="component-category" onClick={() => this.onSelectCategory()}>
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

    onSelectCategory() {
        console.log("Category::onSelectCategory() ");
        
        this.props.onSelectCategory();
    }
}