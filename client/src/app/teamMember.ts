import { Team } from './team';

export class TeamMember {
  id: number;
  name: string;
  photo: string;
  email: string;
  phone: string;
  role: string;
  field: string;
  team: Team;
}
