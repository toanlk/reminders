import * as React from 'react';

import { CategoryView } from './Category';
import Card, { CardActions, CardContent } from 'material-ui/Card';

//// Props and States /////////////////////////////////////////////////////////////////////

export interface CategoryListViewState { }
export interface CategoryListViewProps extends React.Props<CategoryListView> { store: any }

//// Class ///////////////////////////////////////////////////////////////////////////////

export class CategoryListView extends React.Component<CategoryListViewProps, CategoryListViewState> {

    constructor(props: CategoryListViewProps) {
        super(props);
        this.state = this.getInitialState();
    }

    getInitialState(): CategoryListViewState {
        return {}
    }

    //// render ///////////////////////////////////////////////////////////////////////////////

    render() {
        //console.log("render()");
        //console.log(this.props.store.categories);
        return (
            this.props.store.categories.map((cat: { id: number, name: string, number_of_tasks: number, task_completed: number }) => {
                return (
                    <Card className="component-category" onClick={() => this.onSelectCategory(cat.id)}>
                        <CardContent>
                            <CategoryView category={cat} is_detail={false} />
                        </CardContent>
                    </Card>
                );
            })
        );
    }

    //// logic ///////////////////////////////////////////////////////////////////////////////

    onSelectCategory(id: number) {
        //console.log('onSelectCategory: ' + id);
        this.props.store.selectCategory(id);
    }
}