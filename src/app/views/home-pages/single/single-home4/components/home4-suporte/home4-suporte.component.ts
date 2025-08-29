import { Component, Injectable } from '@angular/core';
import { ClipboardService } from '../../../../../../services/clipboard.services'

// import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home4-suporte',
  standalone: true,
  host: { 'data-component-id': 'home4-suporte-instance' },
  // imports: [RouterLink],
  templateUrl: './home4-suporte.component.html',
  styles: ``
})

@Injectable({
  providedIn: 'root'
})

export class Home4SuporteComponent {

  constructor(public clipboard: ClipboardService) { }

  copiarTelefone() {
    this.clipboard.copy('08006491900');
  }

}
