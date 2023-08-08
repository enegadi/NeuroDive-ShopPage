import Book from "../entities/Book";
import Category from "../entities/Category";

const books: Book[] = [
  {
    id: 1,
    name: "The 13 Natural ADHD Remedies Toolkit",
    photo_link: "https://adhdoers.com/cdn/shop/files/intro_3.png?v=1683903289",
    rate: 0,
    old_price: 19.99,
    current_price: 9.97,
    link: "https://neurodive.samcart.com/products/the-13-natural-adhd-remedies-toolkitjy6at", //link not found
  },
  {
    id: 2,
    name: "The Secret Diary of an ADHD Martyr: A Girl Gone Wild",
    photo_link: "//adhdoers.com/cdn/shop/files/Designsanstitre.png?v=1683636120",
    rate: 0,
    old_price: 0,
    current_price: 9.97,
    link: "https://neurodive.samcart.com/products/the-secret-diary-of-an-adhd-martyr-a-girl-gone-wildnpuig", //link not found
  },
];

const FeaturedBooks: Category = {
  id: 5,
  divId: "category-feature-books",
  name: "Featured Books",
  books: books,
};

export default FeaturedBooks;
