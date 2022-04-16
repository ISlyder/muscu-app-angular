import { Component, OnInit } from '@angular/core';
import { Session } from '../../model/session';
import { SessionService } from '../session.service';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.scss'],
})
export class SessionListComponent implements OnInit {
  sessions: Session[] = [];
  emptySes: Session = {
    name: "",
    id: 1,
    exercises: []
  }

  constructor(private sessionService: SessionService) {}

  ngOnInit(): void {
    this.sessionService
      .getAllSession()
      .subscribe((sessions) => (this.sessions = sessions));
  }
}
