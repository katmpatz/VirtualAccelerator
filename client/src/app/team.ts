import { TeamMember } from './teamMember';
import { Coach } from './coach';

export class Team {
  id: number;
  name: string;
  website: string;
  pipeline: string;
  maturity_level: number;
  date_of_entry: Date;
  tag_line: string;
  research_stream: boolean;
  coorporate_existance: boolean;
  coaches: Array<Coach>;
  photo: string;
}
