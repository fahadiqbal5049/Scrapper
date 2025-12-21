import InfoCard from "@/components/apps/subs/InfoCard";
import Typography from "@/components/ui/typography";
import { faqs } from "@/data/helpCenter";

const KnowledgeBase = () => {
  return (
    <div className="w-full flex flex-col gap-4">
      <Typography className="font-medium">Knowledge base</Typography>
      <div className="w-full grid gap-5 sm:gap-8 lg:gap-10 md:grid-cols-2 xl:grid-cols-3">
        {faqs.map((item: any, index: number) => (
          <InfoCard
            key={index}
            title={item.title}
            description={item.detail}
            actionBtnTxt="Learn More"
            actionBtnStyles="h-[26px] w-[96px]"
            styles="gap-4 pb-6"
          />
        ))}
      </div>
    </div>
  );
};

export default KnowledgeBase;
