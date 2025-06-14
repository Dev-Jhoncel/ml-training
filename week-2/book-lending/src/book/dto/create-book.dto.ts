export class CreateBookDto {
  title: string;
  category_id: number;
  author: string;
  no_of_copies: number;
  condition_id: number;
  createdAt: Date;
  updatedAt: Date;
}
