import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PopperContainerComponent } from "../../conponent/funny/popper-container/popper-container.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PopperContainerComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
