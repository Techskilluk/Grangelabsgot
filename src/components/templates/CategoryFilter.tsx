import React from 'react';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onSelectCategory
}) => {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            selectedCategory === category
              ? 'bg-indigo-600 text-white'
              : 'bg-indigo-950/50 text-gray-300 hover:bg-indigo-900/50 border border-indigo-500/30'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};