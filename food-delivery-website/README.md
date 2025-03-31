# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


-------------------------------------------------------------------------------------------------------------
🔹 Visual Example
Imagine you have the following menu_list:

js
Copy
Edit
const menu_list = [
  { menu_name: "Pizza", menu_image: "pizza.jpg" },
  { menu_name: "Burger", menu_image: "burger.jpg" },
  { menu_name: "Dessert", menu_image: "dessert.jpg" }
];
If a user clicks "Pizza", the UI will change as follows:

✅ Before Click

category = "All"

No item is highlighted.

✅ After Clicking "Pizza"

category = "Pizza"

The Pizza item gets the "active" class, applying a red border.

✅ After Clicking "Pizza" Again

category = "All"

The highlight is removed.

🔹 Final Thoughts
This is a toggle feature:

Click once → Selects the category.

Click again → Deselects (resets to "All").