import * as React from 'react';

import Avatar from 'material-ui/Avatar';
import MenuIcon from 'material-ui-icons/Menu';
import SearchIcon from 'material-ui-icons/Search';

//// Props and States /////////////////////////////////////////////////////////////////////

export interface HeaderState {}
export interface HeaderProps extends React.Props<Header> { store: any }

//// Class ///////////////////////////////////////////////////////////////////////////////

export class Header extends React.Component<HeaderProps, HeaderState> {

    constructor(props: HeaderProps) {
        super(props);
        this.state = this.getInitialState();
    }

    getInitialState(): HeaderState {
        return { }
    }

    //// render ///////////////////////////////////////////////////////////////////////////////

    render() {
        const date = getToday();

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
                        <div className="desc">You have {this.props.store.unfinishedTodoCount} tasks to do today</div>
                    </div>
                    <div className="col-12 date">
                        Today: {date}
                    </div>
                </div>
            </div>
        );
    }

    //// logic ///////////////////////////////////////////////////////////////////////////////
}

export function getToday() {
    let objToday = new Date(),
        dayOfMonth = (objToday.getDate() < 10) ? '0' + objToday.getDate() : objToday.getDate(),
        months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'),
        curMonth = months[objToday.getMonth()],
        curYear = objToday.getFullYear();

    let today: string = curMonth + " " + dayOfMonth + ", " + curYear;

    return today;
}