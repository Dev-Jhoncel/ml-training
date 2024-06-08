export class CreateGoalDto {
  goals_id: number;
  goals_description: string;
  rating_id: number;
  estimates: number;
  start_date: Date;
  end_date: Date;
  allocated_time: number;
  repeat_id: number;
  user_id: number;
  createdAt: Date;
  updatedAt: Date;
}
