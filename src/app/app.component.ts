import { Component } from '@angular/core';
import { Pupil } from './models/pupil';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipe-demo';
  pupil: Pupil;

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit(): void{
    this.pupil = new Pupil('Max', 'Mustermann', new Date('2000-06-15'));
    this.pupil.rating = 2.5;
    this.pupil.description = 'Hello! This text is too long and needs to be shorter. Dont worry we will handle it for you.';
  }
}



