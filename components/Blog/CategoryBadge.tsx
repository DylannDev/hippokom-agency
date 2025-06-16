const CategoryBadge = ({ category }: { category: string }) => {
  return (
    <div className="flex flex-wrap gap-2">
      <span className="rounded-full text-sm sm:text-base bg-blue w-fit py-3 sm:py-[12px] px-5 sm:px-[22px] font-semibold text-white">
        {category}
      </span>
    </div>
  );
};

export default CategoryBadge;
