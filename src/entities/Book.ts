export default interface Book {
  id: number;
  name: string;
  photo_link: string;
  rate: number;
  old_price: number | 0;
  current_price: number;
  link: string;
}
