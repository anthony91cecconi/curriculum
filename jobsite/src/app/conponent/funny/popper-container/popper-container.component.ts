import { Component, OnInit, Inject, PLATFORM_ID} from '@angular/core';
import { PopperComponent } from "../popper/popper.component";
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-popper-container',
  standalone: true,
  imports: [PopperComponent,CommonModule],
  templateUrl: './popper-container.component.html',
  styleUrl: './popper-container.component.scss'
})
export class PopperContainerComponent {

}
