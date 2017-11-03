import * as React from 'react';
import Moment from 'react-moment';

import MenuIcon from 'material-ui-icons/Menu';
import SearchIcon from 'material-ui-icons/Search';
import Avatar from 'material-ui/Avatar';

//// Props and States /////////////////////////////////////////////////////////////////////

export interface HeaderState {}
export interface HeaderProps extends React.Props<Header> {}

//// Class ///////////////////////////////////////////////////////////////////////////////

export class Header extends React.Component<HeaderProps, HeaderState> {

    constructor(props: HeaderProps) {
        super(props);
        this.state = this.getInitialState();
    }

    getInitialState(): HeaderState {
        return {}
    }

    componentDidMount() {
        console.log("Main::componentDidMount() " + this.state);
    }

    //// render ///////////////////////////////////////////////////////////////////////////////

    render() {
        const date = new Date();

        return (
            <div className="component-header">
                <div className="row">
                    <div className="col text-left"><MenuIcon className="icon-menu" /></div>
                    <div className="col text-center title">Todo</div>
                    <div className="col text-right"><SearchIcon className="icon-search" /></div>
                </div>
                <div className="row component-summary">
                    <div className="col-12">
                    <Avatar alt="Toan" src="./src/assets/img/6931504.png" className="avatar" />
                    </div>
                    <div className="col-12">
                        <h1>Hello, Toan</h1>
                        <div className="desc">Look like feed good</div>
                        <div className="desc">You have 3 tasks to do today</div>
                    </div>
                    <div className="col-12 date">
                        Today: <Moment format="MMMM DD, YYYY">{date.toString()}</Moment>
                    </div>
                </div>
            </div>
        );
    }

    //// logic ///////////////////////////////////////////////////////////////////////////////

}