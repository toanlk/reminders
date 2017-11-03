import * as React from 'react';

//// Props and States /////////////////////////////////////////////////////////////////////

export interface ProgressState {}
export interface ProgressProps extends React.Props<Progress> { value: number }

//// Class ///////////////////////////////////////////////////////////////////////////////

export class Progress extends React.Component<ProgressProps, ProgressState> {

    constructor(props: ProgressProps) {
        super(props);
        this.state = this.getInitialState();
    }

    getInitialState(): ProgressState {
        return { value: 0 }
    }

    componentDidMount() {
        console.log("Progress::componentDidMount() " + this.state);
    }

    //// render ///////////////////////////////////////////////////////////////////////////////

    render() {
        let barStyle = {width: this.props.value};

        return (
            <div className="component-progress">
                <div className="progress-bar" style={barStyle}></div>
            </div>
        );
    }

    //// logic ///////////////////////////////////////////////////////////////////////////////

}