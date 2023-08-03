import Book from "../entities/Book";
import Category from "../entities/Category";

const books: Book[] = [
  {
    id: 1,
    name: "The ADHD Brain Kryptonites",
    photo_link:
      "https://adhdoers.com/cdn/shop/products/17-mistakes-1657725868907.webp?v=1667318335",
    rate: 5,
    old_price: 5.99,
    current_price: 2.99 ,
    link: "https://neurodive.samcart.com/products/the-adhd-brain-kryptonites",
  },
  {
    id: 2,
    name: "The ADHD Symptom Visualizer",
    photo_link:
      "https://adhdoers.com/cdn/shop/products/Captured_ecran2022-07-15a21.52.50.png?v=1657918588",
    rate: 0,
    old_price: 5.99,
    current_price: 2.99,
    link: "https://neurodive.samcart.com/products/the-adhd-symptom-visualizer",
  },
  {
    id: 3,
    name: "48 Positive Affirmations for ADHDers",
    photo_link: "//adhdoers.com/cdn/shop/files/01_1.png?v=1686945723",
    rate: 0,
    old_price: 0,
    current_price: 2.97,
    link: "https://neurodive.samcart.com/products/48-positive-affirmations-for-adhders",
  },
];

const Guides: Category = {
  id: 2,
  divId: "category-guides",
  name: "Guides",
  books: books,
};

export default Guides;
