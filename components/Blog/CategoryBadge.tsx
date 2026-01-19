const CategoryBadge = ({ category }: { category: string }) => {
  return (
    <div className="flex flex-wrap gap-2">
      <span className="px-3 py-1.5 bg-blue rounded-lg text-base text-white font-semibold">
        {category}
      </span>
    </div>
  );
};

export default CategoryBadge;
