import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipies';
  page = 'RECIPES';

  setPage = (pageName: string) => {
    this.page = pageName;
  };
}
