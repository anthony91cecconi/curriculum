import { Component } from '@angular/core';

@Component({
  selector: 'app-popper',
  standalone: true,
  imports: [],
  templateUrl: './popper.component.html',
  styleUrl: './popper.component.scss'
})
export class PopperComponent {
  isHidden = false;

  playSoundAndHide(): void {
    const audio = new Audio('assets/pop.mp3');
    audio.play();

    this.isHidden = true;

    setTimeout(() => {
      this.isHidden = false;
    }, 4000);
  }
}
