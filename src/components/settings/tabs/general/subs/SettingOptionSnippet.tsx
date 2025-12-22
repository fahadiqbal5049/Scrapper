import CustomSelect from "@/components/shared/form/CustomSelect";
import Typography from "@/components/ui/typography";

type Props = {
  title: string;
  details: string;
  options: any[];
  redirectLink?: string;
  placeholder: string;
};

const SettingOptionSnippet = ({
  title,
  details,
  options,
  redirectLink,
  placeholder,
}: Props) => {
  return (
    <div className="xl:w-[60%] flex justify-between sm:flex-row flex-col gap-4 sm:gap-8">
      <aside className="w-full flex flex-col  gap-2">
        <Typography className="font-medium">{title}</Typography>

        <Typography color="primary">
          {details}{" "}
          {redirectLink && (
            <span className="text-success-1">{redirectLink}</span>
          )}
        </Typography>
      </aside>
      <CustomSelect
        options={options}
        placeholder={placeholder}
        triggerStyles="h-[30px] w-full sm:w-[180px]"
      />
    </div>
  );
};

export default SettingOptionSnippet;
