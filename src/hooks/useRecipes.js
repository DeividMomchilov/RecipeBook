import { useState, useMemo } from "react";
import { recipesData } from "../data/recipesData";

export function useRecipes(favorites) {
  const [filter, setFilter] = useState("Всички");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [openRecipeById, setOpenRecipeById] = useState({});
  const PAGE_SIZE = 10;

  const categories = useMemo(() => {
    const unique = Array.from(new Set(recipesData.map((r) => r.cat)));
    return ["Всички", "Любими", ...unique];
  }, []);

  const filteredRecipes = useMemo(() => {
    if (filter === "Любими") {
      return recipesData.filter((r) => favorites.includes(r.id));
    }
    return filter === "Всички"
      ? recipesData
      : recipesData.filter((r) => r.cat === filter);
  }, [filter, favorites]);

  const searchedRecipes = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    if (!term) return filteredRecipes;

    return filteredRecipes.filter((r) => {
      const parts = [r.title, r.desc];
      if (r.recipe) {
        if (Array.isArray(r.recipe.ingredients)) parts.push(r.recipe.ingredients.join(" "));
        if (Array.isArray(r.recipe.steps)) parts.push(r.recipe.steps.join(" "));
      }
      return parts.filter(Boolean).join(" ").toLowerCase().includes(term);
    });
  }, [filteredRecipes, searchTerm]);

  const totalPages = useMemo(() => Math.max(1, Math.ceil(searchedRecipes.length / PAGE_SIZE)), [searchedRecipes]);

  const paginatedRecipes = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return searchedRecipes.slice(start, start + PAGE_SIZE);
  }, [searchedRecipes, currentPage]);

  const handleSetFilter = (newFilter) => {
    setFilter(newFilter);
    setCurrentPage(1);
  };

  const handleSetSearchTerm = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const toggleRecipe = (id) => {
    setOpenRecipeById((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return {
    filter,
    setFilter: handleSetFilter,
    searchTerm,
    setSearchTerm: handleSetSearchTerm,
    currentPage,
    setCurrentPage,
    totalPages,
    categories,
    paginatedRecipes,
    searchedRecipesCount: searchedRecipes.length,
    openRecipeById,
    toggleRecipe
  };
}