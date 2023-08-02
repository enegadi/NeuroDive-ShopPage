import Book from "../entities/Book";
import Category from "../entities/Category";

const books: Book[] = [
  //Book 1
  {
    id: 1,
    name: "The EVERYTHING ADHD bundle - Digital Printable Ebook Bundle",
    photo_link:
      "https://adhdoers.com/cdn/shop/products/Artboard1copy4-100.jpg?v=1673461085",
    rate: 5,
    old_price: 265.53,
    current_price: 249.97,
    link: "https://adhdoers.com/pages/resource-library",
  },
  //Book 2
  {
    id: 2,
    name: "The Art of Living - Digital Printable ebook Bundle",
    photo_link:
      "https://adhdoers.com/cdn/shop/products/art-of-living-pd.jpg?v=1669728746",
    rate: 5,
    old_price: 110.92,
    current_price: 110.92,
    link: "",
  },
  //Book 3
  {
    id: 3,
    name: "ADHD Essentials : Notion Template Bundle",
    photo_link:
      "https://adhdoers.com/cdn/shop/products/WhatsAppImage2023-02-24at17.36.03.jpg?v=1677272953",
    rate: 0,
    old_price: 0,
    current_price: 59.97,
    link: "",
  },
  {
    id: 4,
    name: "The ADHD Starter Pack - Digital Printable ebook Bundle",
    photo_link:
      "https://adhdoers.com/cdn/shop/products/starter-pack-pd.jpg?v=1669728710",
    rate: 4,
    old_price: 68.88,
    current_price: 49.98,
    link: "",
  },
  {
    id: 5,
    name: "The ADHD Cooking and Nutrition - Digital Printable Ebook Bundle",
    photo_link:
      "https://adhdoers.com/cdn/shop/products/Thumbnail.png?v=1673475333",
    rate: 5,
    old_price: 56.97,
    current_price: 49.97,
    link: "",
  },
  {
    id: 6,
    name: "New Chapter - Digital Printable ebook Bundle",
    photo_link:
      "https://adhdoers.com/cdn/shop/products/new-chapter-pd.jpg?v=1669728681",
    rate: 5,
    old_price: 70.94,
    current_price: 49.97,
    link: "",
  },
  // {
  //   id: 0,
  //   name: "",
  //   photo_link: "",
  //   rate: 0,
  //   old_price: 0,
  //   current_price: 0,
  //   link: "",
  // },
  //Other Books
];

const bundles: Category = {
  id: 0,
  divId: "category-bundles",
  name: "Bundles",
  books: books,
};

export default bundles;
