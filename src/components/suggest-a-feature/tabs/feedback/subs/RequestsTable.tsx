import SearchComponent from "@/components/shared/SearchComponent";
import Typography from "@/components/ui/typography";
import TrendingPopup from "./TrendingPopup";
import AllCategoriesPopup from "./AllCategoriesPopup";
import FeatureRequestCard from "./FeatureRequestCard";
import { requests } from "@/data/suggestAFeatureData";

const RequestsTable = () => {
  return (
    <div className="w-full bg-primary rounded-lg p-4 sm:p-6 flex flex-col gap-4">
      <div className="w-full flex items-center justify-end">
        <SearchComponent size="h-[26px] w-[310px]" bg="bg-white-3/10" />
      </div>
      <div className="w-full">
        <div className="w-full overflow-x-auto table-scrollbar px-2 sm:px-4 h-[70px] bg-tertary rounded-sm ">
          <div className="w-full h-full min-w-[450px] flex items-center justify-start gap-5">
            {" "}
            <Typography>Showing</Typography>
            <TrendingPopup />
            <Typography>Posts in</Typography>
            <AllCategoriesPopup />
          </div>{" "}
        </div>
        {requests.map((item: any, index: number) => (
          <FeatureRequestCard
            key={index}
            title={item.title}
            detail={item.detail}
            notifications={item.notifications}
            messages={item.messages}
            bg={index % 2 === 0 ? "bg-gray-3" : " bg-transparent"}
          />
        ))}
      </div>
    </div>
  );
};

export default RequestsTable;
