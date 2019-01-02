import { TeamMember } from './teamMember';

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
  teammembers: Array<TeamMember>;
}
