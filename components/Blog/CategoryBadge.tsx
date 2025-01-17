const CategoryBadge = ({ categories }: { categories: string[] }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category, index) => (
        <span
          key={index}
          className="rounded-full bg-blue-background w-fit py-[2px] px-4 text-sm font-semibold text-blue"
        >
          {category}
        </span>
      ))}
    </div>
  );
};

export default CategoryBadge;
