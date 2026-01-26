const CategoryBadge = ({ category }: { category: string }) => {
  return (
    <div className="flex flex-wrap gap-2">
      <span className="px-3 py-1.5 bg-white rounded-lg text-sm sm:text-base text-blue font-semibold">
        {category}
      </span>
    </div>
  );
};

export default CategoryBadge;
