import { Component } from '@angular/core';

@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
    readonly quotes = [
        {
            author: 'Winston Churchill',
            content:
                'Success consists of going from failure to failure without loss of enthusiasm.'
        },
        {
            author: 'Walt Disney',
            content: 'If you can dream it, you can do it.'
        }
    ];

    setClass(index: number) {
        if (index % 2 == 0 || index == 0) {
            return ' ml-0 text-left';
        }
        return ' mr-o text-right';
    }
}
