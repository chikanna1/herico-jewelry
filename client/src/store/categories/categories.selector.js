import { createSelector } from "reselect";

const selectCategoryReducer = (state) => state.categories;

// export const selectCategories = (state) => state.categories;
export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);

// export const selectCategoriesMap = createSelector(
//   [selectCategories],
//   (categories) =>
//     categories.reduce((acc, category) => {
//       const { title, items } = category;
//       acc[title.toLowerCase()] = items;
//       return acc;
//     }, {})
// );

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories) => categories
);

// export const selectCategoriesMap = (state) => {
//   const categoriesMap = state.categories.categories;
//   //   const categoriesMap = state.categories.categories.reduce(
//   //     (acc, { category, products }) => {
//   //       acc[category.toLowerCase()] = products;
//   //       return acc;
//   //     },
//   //     {}
//   //   );
//   return categoriesMap;
// };

// export const selectCategoriesMap = (state) => {
//     console.log(state.categories.categories);
//     const categoriesMap = state.categories.categories.reduce(
//       (acc, { category, products }) => {
//         acc[category.toLowerCase()] = products;
//         return acc;
//       },
//       {}
//     );
//     console.log(categoriesMap);
//     return categoriesMap;
//   };
