import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
  imports: [CommonModule, ModalComponent]
})
export class HeaderComponent {
  @Input() addressData: any;
  isModalOpened: boolean = false;
}
