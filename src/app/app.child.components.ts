import { Component, Input, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-child-component',
    templateUrl: './app-child.component.html'
})

export class ChildComponent {
    @Input() public name = ''
    @Output() buttonClicked: EventEmitter<Event> = new EventEmitter()
    constructor() {}
}