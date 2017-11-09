import { observable, computed } from 'mobx';

export class Category {
    id: number;
    color: string;
    icon: string;

    @observable name: string;
    @observable number_of_tasks: number;
    @observable task_completed: number;

    @observable todos: any;

    constructor(id: number, name: string, number_of_tasks: number, task_completed: number) {
        
        this.id = id ? id: Math.random();
        this.name = name;
        this.task_completed = task_completed;
        this.number_of_tasks = number_of_tasks;
    }
}