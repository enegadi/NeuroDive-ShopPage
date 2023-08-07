import Book from "../entities/Book";
import Category from "../entities/Category";

const books: Book[] = [
  {
    id: 0,
    name: "The ADHDer's Guide to Managing Anger",
    photo_link:
      "https://adhdoers.com/cdn/shop/files/GuidetomanagingAnger.png?v=1685746351",
    rate: 0,
    old_price: 0,
    current_price: 9.97,
    link: "https://neurodive.samcart.com/products/the-adhders-guide-to-managing-anger",
  },
  {
    id: 1,
    name: "The Unofficial ADHD Test Booklet - Digital Printable workbook",
    photo_link:
      "https://adhdoers.com/cdn/shop/products/Sanstitre-4.jpg?v=1678820580    ",
    rate: 5,
    old_price: 0,
    current_price: 27.97,
    link: "https://neurodive.samcart.com/products/the-unofficial-adhd-test-booklet ",
  },
  {
    id: 2,
    name: "Brain food: The Ultimate Guide to Nutrition & ADHD",
    photo_link:
      "https://adhdoers.com/cdn/shop/products/Thumbnail.jpg?v=1668446817",
    rate: 5,
    old_price: 0,
    current_price: 16.99,
    link: "https://neurodive.samcart.com/products/brain-food-the-ultimate-guide-to-nutrition--adhd",
  },
  {
    id: 3,
    name: "The Tidy house, Tidy mind Workbook - Digital Printable Workbook",
    photo_link:
      "https://adhdoers.com/cdn/shop/products/Asset1_2fa06549-109f-4710-9463-2c3b02bf9c0e.png?v=1654272580",
    rate: 5,
    old_price: 16.99,
    current_price: 14.99,
    link: "https://neurodive.samcart.com/products/the-tidy-house-tidy-mind-workbook",
  },
  {
    id: 4,
    name: "Goal-Getter's Manual - Digital Printable ADHD workbook",
    photo_link:
      "https://adhdoers.com/cdn/shop/products/DigitalPrintableGoal-Getter_sManualforADHDers-01.png?v=1654273828",
    rate: 5,
    old_price: 23.99,
    current_price: 0,
    link: "https://neurodive.samcart.com/products/goal-getters-manual",
  },
  {
    id: 5,
    name: "The ADHD Finance Bro Workbook- Digital Printable Workbook",
    photo_link:
      "https://adhdoers.com/cdn/shop/products/111DigitalPrintableNewweek_Newme_Workbook-01.png?v=1654274884",
    rate: 5,
    old_price: 0,
    current_price: 19.99,
    link: "https://neurodive.samcart.com/products/the-adhd-finance-bro-workbook",
  },
  {
    id: 6,
    name: "The Colojournal Workbook - Digital Printable Worksheets",
    photo_link: "https://adhdoers.com/cdn/shop/products/Cover.png?v=1655741673",
    rate: 4,
    old_price: 0,
    current_price: 19.99,
    link: "https://neurodive.samcart.com/products/the-colojournal-workbook",
  },
  {
    id: 7,
    name: "Digital Decluttering for ADHDers - Digital Printable workbook",
    photo_link:
      "https://adhdoers.com/cdn/shop/products/cover_2.png?v=1676638088",
    rate: 5,
    old_price: 0,
    current_price: 19.97,
    link: "https://neurodive.samcart.com/products/digital-decluttering-for-adhders",
  },
  {
    id: 8,
    name: "Common Questions about Love - Digital Printable Workbook",
    photo_link:
      "https://adhdoers.com/cdn/shop/products/Captured_ecran2023-03-14204400.png?v=1678823406",
    rate: 0,
    old_price: 0,
    current_price: 11.97,
    link: "https://neurodive.samcart.com/products/common-questions-about-love",
  },
  {
    id: 9,
    name: "Hey! That was ADHD (Late Diagnosis Journal) - Digital Printable Workbook",
    photo_link:
      "https://adhdoers.com/cdn/shop/products/heythatwasadhd-01.png?v=1679778784",
    rate: 0,
    old_price: 0,
    current_price: 19.97,
    link: "https://neurodive.samcart.com/products/hey-that-was-adhd-late-diagnosis-journal",
  },
];

const Workbook: Category = {
  id: 4,
  divId: "category-workbook",
  name: "Workbook",
  books: books,
};

export default Workbook;
