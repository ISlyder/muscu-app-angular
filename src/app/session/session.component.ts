import { Component, OnInit } from '@angular/core';
import { SessionService } from './session.service';
import { Session } from '../model/session';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss'],
})
export class SessionComponent implements OnInit {
  sessions: Session[] = [];

  constructor(private sessionService: SessionService) {}

  ngOnInit(): void {
    this.sessionService
      .getAllSession()
      .subscribe((sessions) => (this.sessions = sessions));
  }
}
