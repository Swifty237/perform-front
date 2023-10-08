import { Component, OnInit } from '@angular/core';
import { UfcEventsService } from '../common/services/ufc-events/ufc-events.service';
import { UfcEventsElement } from '../common/utils/ufc-events-elements';

@Component({
  selector: 'app-pronostics',
  templateUrl: './pronostics.component.html',
  styleUrls: ['./pronostics.component.scss']
})

export class PronosticsComponent implements OnInit {
  panelOpenState = false;
  ufcEvents!: UfcEventsElement[]

  constructor(private ufcEventsService: UfcEventsService) { }

  ngOnInit(): void {
    this.ufcEventsService.getAllUfcEvents$()
      .subscribe({
        next: (data) => {
          if (data.length > 0) {
            this.ufcEvents = data;
          }
        },

        error: err => console.error('An error occurred:', err)
      })
  }
}
