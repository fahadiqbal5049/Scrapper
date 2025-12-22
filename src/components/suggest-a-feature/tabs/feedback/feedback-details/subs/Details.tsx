import NextImage from "@/components/shared/NextImage";
import Typography from "@/components/ui/typography";
import RightSection from "./RightSection";

const Details = () => {
  return (
    <div className="w-full bg-primary rounded-lg p-4 sm:p-6 flex md:flex-row flex-col justify-between gap-6">
      <aside className="w-full !h-fit md:w-[240px] border border-white-2 rounded-lg py-5 px-3 flex flex-col gap-2">
        <Typography variant="text" className="font-medium">
          Category
        </Typography>
        <Typography variant="text" color="primary">
          Uncategorized
        </Typography>{" "}
        <Typography variant="text" className="font-medium mt-4 sm:mt-6">
          Voters
        </Typography>
        {[1, 2, 3, 4].map((item: any, index: number) => (
          <div key={index} className="w-full flex items-center gap-2">
            <NextImage
              source="/icons/User.png"
              containerStyles="size-[18px] rounded-full"
              imageStyles="rounded-full"
              height={"18"}
              width={"18"}
            />
            <Typography color="primary">Beebuzz</Typography>
          </div>
        ))}
      </aside>
      <RightSection />
    </div>
  );
};

export default Details;
