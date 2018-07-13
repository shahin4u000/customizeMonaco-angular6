import {
  Component
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  options = {
    language: 'javascript',
    fontSize: 20,
    fontFamily: 'arial',
    cursorStyle: 'line',
  };
}
