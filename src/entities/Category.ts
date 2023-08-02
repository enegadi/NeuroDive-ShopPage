import Book from "./Book";

export default interface Category {
  id: number;
  name: string;
  divId: string;
  books: Book[];
}
