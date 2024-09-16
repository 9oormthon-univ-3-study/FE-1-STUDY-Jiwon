// src/features/items/itemsSelectors.js
import { createSelector } from "@reduxjs/toolkit";

export const selectItemById = (id) =>
  createSelector(
    (state) => state.items,
    (items) => items.find((item) => item.id === id)
  );
