import Book from "../entities/Book";
import Category from "../entities/Category";

const books: Book[] = [
  {
    id: 1,
    name: "101 Tips for Adulting with ADHD",
    photo_link: "https://adhdoers.com/cdn/shop/products/Pic_1.png?v=1671804955",
    rate: 5,
    old_price: 0,
    current_price: 27.97,
    link: "https://neurodive.samcart.com/products/101-tips-for-adulting-with-adhd",
  },
  {
    id: 2,
    name: "The ADHD Brain Explained - Digital Printable Manual",
    photo_link:
      "https://adhdoers.com/cdn/shop/products/ADHD-Brain.png?v=1654867111",
    rate: 5,
    old_price: 34.98,
    current_price: 24.98,
    link: "https://neurodive.samcart.com/products/the-adhd-brain-explained",
  },
  {
    id: 3,
    name: "The Ultimate ADHD Career Guide",
    photo_link:
      "https://adhdoers.com/cdn/shop/products/ultimateadhdcareerguide_Plandetravail1.png?v=1682268767",
    rate: 5,
    old_price: 0,
    current_price: 27.97,
    link: "https://neurodive.samcart.com/products/the-ultimate-adhd-career-guide",
  },
  {
    id: 4,
    name: "An ADHDer's Guide to Thriving at College",
    photo_link:
      "https://adhdoers.com/cdn/shop/files/01_pg27_MockUpforTablet.png?v=1689362635",
    rate: 0,
    old_price: 0,
    current_price: 9.97,
    link: "https://neurodive.samcart.com/products/an-adhders-guide-to-thriving-at-college/",
  },
];

const EBooks: Category = {
  id: 1,
  divId: "category-e-books",
  name: "E-books",
  books: books,
};

export default EBooks;
