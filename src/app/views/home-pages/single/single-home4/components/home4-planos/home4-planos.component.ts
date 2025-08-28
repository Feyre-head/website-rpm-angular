import { Component, OnInit, inject, DestroyRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { map, finalize } from 'rxjs/operators'; // (adiciona map)

type Plano = {
  id: number;
  planodescricao: string;
  valorplano: number;
  velocidade: number;
  ativo: boolean;
  corporativo: boolean;
  fibra: boolean;
  dedicado: boolean;
  combo: boolean;
  mostrarplanosite: boolean;
  mostrarvalorsite: boolean;
};

@Component({
  selector: 'app-home4-planos',
  standalone: true,
  host: { 'data-component-id': 'home4-planos-instance' },
  imports: [CommonModule],
  templateUrl: './home4-planos.component.html',
  styles: ``
})

export class Home4PlanosComponent implements OnInit {
  // A propriedade 'plans' agora começa vazia. Ela será preenchida pela API.
  plans: Plano[] = [];
  isLoading = false; // Útil para mostrar um spinner de carregamento no HTML

  // Injeção de dependências moderna
  private readonly http = inject(HttpClient);
  private readonly destroyRef = inject(DestroyRef);

  // O método ngOnInit é executado automaticamente quando o componente é criado.
  ngOnInit(): void {
    this.isLoading = true;

    const body = {
      db: 'v2',
      empresa: 15,
      ativo: true,
      ativosite: true,
      valorsite: false, // ajuste conforme sua API
    };

    this.http.post<Plano[]>('http://localhost:3000/planos', body).pipe(
      takeUntilDestroyed(this.destroyRef),
      map(data => (data ?? [])
        .filter(p => p.mostrarplanosite && p.ativo)
        .sort((a, b) => (b.velocidade ?? 0) - (a.velocidade ?? 0))
      ),
      finalize(() => this.isLoading = false)
    ).subscribe({
      next: plans => this.plans = plans,
      error: err => console.error('Erro ao carregar planos!', err),
    });
  }

}
