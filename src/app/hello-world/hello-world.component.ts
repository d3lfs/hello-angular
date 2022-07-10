import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-hello-world',
	templateUrl: './hello-world.component.html',
	styleUrls: ['./hello-world.component.scss'],
})
export class HelloWorldComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {
		// we can disable the console logging by eslintrc configuration
		// "no-console"
		console.log('This is hello');
	}
}

function name(params: boolean) {}
