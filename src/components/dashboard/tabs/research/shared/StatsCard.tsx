import Typography from "@/components/ui/typography";
import Link from "next/link";

type Props = {
  title: string;
  titleValue: number | string;
  stats: any[];
  link: string;
};
const StatsCard = ({ title, titleValue, stats, link }: Props) => {
  return (
    <div className="w-full flex flex-col items-start justify-start gap-4 bg-primary rounded-lg p-3 sm:p-4">
      <div className="flex mb-2 flex-col items-start justify-start">
        <Typography className="font-semibold" variant="h4">
          {titleValue}
        </Typography>
        <Typography className="font-medium">{title}</Typography>
      </div>
      {stats.map((item: any, index: number) => (
        <div key={index} className="w-full flex items-center justify-between">
          <Typography className="font-medium" color="primary">
            {item.name}
          </Typography>
          <Typography className="font-medium" color="primary">
            {item.value}
          </Typography>
        </div>
      ))}
      <Link href={link} className="mt-2">
        <Typography className="font-semibold" color="orange">
          View All
        </Typography>
      </Link>
    </div>
  );
};

export default StatsCard;
