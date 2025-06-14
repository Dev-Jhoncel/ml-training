export class CreateContactDto {
  id: number;
  firstname: string;
  middlename: string;
  lastname: string;
  email?: string;
  picture_url?: string;
  createdAt: Date;
  updatedAt: Date;
}
