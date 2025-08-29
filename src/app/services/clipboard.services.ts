// src/app/services/clipboard.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClipboardService {

  async copy(text: string): Promise<void> {
    try {
      await navigator.clipboard.writeText(text);
      alert(`Copiado: ${text}`);
    } catch (err) {
      console.error('Erro ao copiar:', err);
    }
  }
}
