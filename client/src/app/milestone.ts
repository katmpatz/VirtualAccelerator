import { Question } from './question';

export class Milestone {
  id: number;
  num: number;
  title: string;
  questions: Array<Question>;
}
