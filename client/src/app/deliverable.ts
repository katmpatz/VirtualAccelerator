import { Milestone } from './milestone';
import { Question } from './question';

export class Deliverable {
  id: number;
  title: string;
  description: string;
  milestones: Array<Milestone>;
}
