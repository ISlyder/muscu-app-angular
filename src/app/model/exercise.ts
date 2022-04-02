import { Session } from './session';

export interface Exercise {
  id: number;
  name: string;
  description: string;
  image: string;
  session: Session;
}
