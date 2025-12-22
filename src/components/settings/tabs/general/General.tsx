import Typography from "@/components/ui/typography";
import React from "react";
import SettingOptionSnippet from "./subs/SettingOptionSnippet";
import {
  langaugeOptions,
  currencyOptions,
  countryOptions,
  brandOptions,
} from "@/data/settingsData";

const General = () => {
  return (
    <div className="size-full">
      <div className="w-full bg-primary rounded-lg px-4 py-5 sm:px-6 sm:py-8 flex flex-col gap-4 sm:gap-6">
        <div className="w-full flex flex-col  gap-2">
          {" "}
          <Typography className="font-medium">General Settings</Typography>{" "}
          <Typography variant="small" color="primary">
            Manage your preferences from this page to better adapt 123 scraper
            app to your work-style
          </Typography>
        </div>
        <div className="w-full flex flex-col gap-6 sm:gap-8">
          {" "}
          <SettingOptionSnippet
            options={langaugeOptions}
            placeholder="English"
            title="App Language"
            details="Select in which language you want to use our app."
          />{" "}
          <SettingOptionSnippet
            options={currencyOptions}
            title="Currency"
            placeholder="EUR"
            details="Select the default currency you want to apply to all your competitors prices."
          />{" "}
          <SettingOptionSnippet
            options={countryOptions}
            title="Country"
            placeholder="Netherlands"
            details="Select the default country. Do you need to change it?"
            redirectLink="Contact us."
          />{" "}
          <SettingOptionSnippet
            options={brandOptions}
            title="Account Type"
            placeholder="I am a Brand"
            details="Change here your account type between Merchant and Brand. "
            redirectLink="What is this?"
          />
          <div className="xl:w-[60%] flex justify-between sm:flex-row flex-col gap-4 sm:gap-8">
            <aside className="w-full flex flex-col  gap-2">
              <Typography className="font-medium">My Store Url</Typography>

              <Typography color="primary">
                Change here your store url.
              </Typography>
            </aside>
            <input
              placeholder={"https://123scraper.com"}
              className="h-[30px] w-full sm:w-[180px] border-[1px] border-white-4 rounded-sm bg-transparent appearance-none focus:outline-none text-sm font-normal px-3 text-white-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default General;
