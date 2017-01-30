export class Task {
  id: number
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;

  constructor(obj?: any) {
    this.id = obj && obj.id;
    this.name = obj && obj.name;
    this.description = obj && obj.description;
    this.createdAt = obj && obj.createdAt;
    this.updatedAt = obj && obj.updatedAt;
  }
}
