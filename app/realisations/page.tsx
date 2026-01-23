import AchievementsCard from "@/components/homepage/achievements-card";
import { caseStudiesArticles } from "@/data";
import { PageHero } from "@/components/services";

const RealisationsPage = () => {
  return (
    <>
      <PageHero
        title="Nos réalisations"
        subtitle="Découvrez comment nous avons accompagné nos clients dans leur transformation digitale et boosté leur communication."
        variant="small"
      />

      {/* Case Studies Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudiesArticles.map((article) => (
              <AchievementsCard
                key={article.slug}
                article={article}
                variant="light"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default RealisationsPage;
