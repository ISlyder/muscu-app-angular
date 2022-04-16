import { Component, Input, OnInit } from '@angular/core';
import { Session } from '../model/session';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss'],
})
export class SessionComponent implements OnInit {
  @Input()
  session: Session;

  constructor() {}

  ngOnInit(): void {}
}
