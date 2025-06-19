export class CreateInterlibraryLoanDto {
  id: number;
  book_id: number;
  borrower_id: number;
  librarian_id: number;
  action_id: number;
  due_date: Date;
  createdAt: Date;
  updatedAt: Date;
}
