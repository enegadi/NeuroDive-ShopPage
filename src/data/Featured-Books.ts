import Book from "../entities/Book";
import Category from "../entities/Category";

const books: Book[] = [
    {
        id: 1,
        name: "The 13 Natural ADHD Remedies Toolkit",
        photo_link: "https://adhdoers.com/cdn/shop/files/intro_3.png?v=1683903289",
        rate: 0,
        old_price: 20.00,
        current_price: 9.97,
        link: "", //link not found
      },
];

const FeaturedBooks: Category = {
  id: 5,
  divId: "category-feature-books",
  name: "Featured Books",
  books: books,
};

export default FeaturedBooks;
