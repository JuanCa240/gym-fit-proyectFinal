import { Component } from '@angular/core';

@Component({
  selector: 'app-plans',
  standalone: true,
  imports: [],
  templateUrl: './plans.html',
  styleUrl: './plans.css'
})
export class Plans {
    // Arreglo de objetos que contiene las membresías.
  plans = [
    {
      id: 'basico',
      name: 'Básico',
      price: 80000,
      benefits: [
        'Acceso a máquinas',
        'Zona de cardio',
        'Lockers'
      ],
      featured: false
    },
    {
      id: 'pro',
      name: 'Pro',
      price: 120000,
      benefits: [
        'Todo lo del plan Básico',
        'Entrenador personalizado',
        'Asesoría nutricional'
      ],
      featured: true
    },
    {
      id: 'vip',
      name: 'VIP',
      price: 180000,
      benefits: [
        'Todo lo del plan Pro',
        'Acceso 24/7',
        'Invitado mensual'
      ],
      featured: false
    }
  ];

  // Guarda el identificador del plan seleccionado.
  selectedPlanId: string | null = null;

  // Actualiza la membresía seleccionada.
  selectPlan(planId: string): void {
    this.selectedPlanId = planId;
  }

}
