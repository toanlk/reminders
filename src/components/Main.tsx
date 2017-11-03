import * as React from 'react';

import { Header } from "./Header";
import { TodoCategory } from "./TodoCategory";

//// Props and States /////////////////////////////////////////////////////////////////////

export interface MainState {}
export interface MainProps extends React.Props<Main> {}

//// Class ///////////////////////////////////////////////////////////////////////////////

export class Main extends React.Component<MainProps, MainState> {

    constructor(props: MainProps) {
        super(props);
        this.state = this.getInitialState();
    }

    getInitialState(): MainState {
        return {}
    }

    componentDidMount() {
        //console.log("Main::componentDidMount() " + this.state);
    }

    //// render ///////////////////////////////////////////////////////////////////////////////

    render() {
        console.log("Main::render() " + this.state);

        return (
            <div className="container component-app">
                <Header />
                <TodoCategory />
            </div>
        );
    }

    //// logic ///////////////////////////////////////////////////////////////////////////////

}