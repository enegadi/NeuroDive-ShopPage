import Book from "../entities/Book";
import Category from "../entities/Category";

const books: Book[] = [
  {
    id: 0,
    name: "ADHD Habit Tracker - Spreadsheet Dark mode",
    photo_link:
      "https://adhdoers.com/cdn/shop/products/9_1c6091e1-bc8a-4072-a76e-7071a5c2023e.png?v=1681490538",
    rate: 0,
    old_price: 0,
    current_price: 14.99,
    link: "",
  },
  {
    id: 1,
    name: "ADHD Habit Tracker - Spreadsheet Light mode",
    photo_link:
      "https://adhdoers.com/cdn/shop/products/5_334dea8e-0cec-4cf8-bfb6-dcfd5a711938.png?v=1681489403",
    rate: 0,
    old_price: 0,
    current_price: 14.99,
    link: "",
  },
  {
    id: 3,
    name: "Keep Track Mini-Pack - Digital Printable ADHD Tracker",
    photo_link:
      "//adhdoers.com/cdn/shop/products/Asset1_33dee8b2-b533-4810-99a0-54b9324eed43.png?v=1654272691",
    rate: 5,
    old_price: 0,
    current_price: 6.95,
    link: "",
  },
  {
    id: 4,
    name: "THE “DONE” LIST: a Weekly Accomplishment Journal for ADHDers",
    photo_link:
      "https://adhdoers.com/cdn/shop/products/cover_e870ff0f-d13a-43fc-8160-16609597ed7a.png?v=1674309642",
    rate: 5,
    old_price: 29.99,
    current_price: 19.97,
    link: "",
  },
  {
    id: 5,
    name: "New Week, New Me for ADHDers - Digital ADHD Printable Planner",
    photo_link:
      "https://adhdoers.com/cdn/shop/products/DigitalPrintableNewweek_Newme_Workbook-01.png?v=1654273738",
    rate: 5,
    old_price: 0,
    current_price: 9.97,
    link: "",
  },
];

const PlannerTrackers: Category = {
  id: 3,
  divId: "category-planner-trackers",
  name: "Planner-Trackers",
  books: books,
};

export default PlannerTrackers;
