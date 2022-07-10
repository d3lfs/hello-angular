import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-user-list',
	templateUrl: './user-list.component.html',
	styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
	names: string[]; // typescript declaring array of strings variable
	// names: Array<string>; // this is the same as in the above line code

	constructor() {
		this.names = ['Sly', 'Bacalso', 'John'];
	}

	ngOnInit(): void {
		console.log('test');
	}
}
