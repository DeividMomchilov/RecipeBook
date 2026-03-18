import { useState, useEffect } from "react";
import { toast } from "react-toastify";

export function useFavorites(storageKey = "favoriteRecipes") {
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem(storageKey);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(favorites));
  }, [favorites, storageKey]);

  const toggleFavorite = (id) => {
    setFavorites((prev) => {
      const isAlreadyFavorite = prev.includes(id);

      if (isAlreadyFavorite) {
        toast.info("Рецептата е премахната от любими! 🤍");
        return prev.filter((fid) => fid !== id);
      } 
      else {
        toast.success("Успешно добавено в любими! ❤️");
        return [...prev, id];
      }
    });
  };

  return { favorites, toggleFavorite };
}