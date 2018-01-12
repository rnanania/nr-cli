import { Component } from '@angular/core';
import { MatIconRegistry, MatDialog } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import 'rxjs/add/operator/filter';
import { DialogComponent } from './components/dialog/dialog.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	// Theme Changer
	isDarkTheme = false;
	// User Test Data
	users = [{
		name: "Rohit Nanania",
		avatar: 'svg-1',
		details: "I love cheese...",
		isAdmin: true,
		isCool: false
	},{
		name: "David Collier",
		avatar: 'svg-2',
		details: "Dave the flash guy",
		isAdmin: true,
		isCool: false
	},{
		name: "Alexius Wronka",
		avatar: 'svg-3',
		details: "I want to be rich ASAP",
		isAdmin: false,
		isCool: true
	}, {
		name: "Abhimanyu Sharma",
		avatar: 'svg-4',
		details: "It's all about working out",
		isAdmin: false,
		isCool: true		
	}];
	// Selected User
	selectedUser = this.users[0];

	constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private dialog: MatDialog){
		const avatarSafeUrl = sanitizer.bypassSecurityTrustResourceUrl('./assets/avatars.svg');
		iconRegistry.addSvgIconSetInNamespace('avatars', avatarSafeUrl);
	}
	
	private openAdminDialog(){
		this.dialog.open(DialogComponent).afterClosed()
		.filter(result => !!result)
		.subscribe(user => {
			this.users.push(user);
			this.selectedUser = user;
		});
	}
}
