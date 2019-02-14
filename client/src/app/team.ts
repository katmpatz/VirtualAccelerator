import { TeamMember } from './teamMember';
import { Coach } from './coach';

export class Team {
  id: number;
  name: string;
  photo: string;
  pipeline: string;
  research_stream: boolean;
  maturity_level: number;
  date_of_entry: Date;
  website: string;
  coorporate_existance: boolean;
  active: boolean;
  tag_line: string;
  coaches: Array<Coach>;
  teammembers: Array<TeamMember>;
}
