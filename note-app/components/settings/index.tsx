import { useSearchParams } from "next/navigation";
import Font_Theme from "./font_theme";
import Color_Theme from "./color_theme";
import Settings_Panel from "./settings_panel";
import Change_Password from "./change_password";
import useWindowSize from "@/hooks/windowSize";
import Back_Button from "./back_button";

export default function Settings() {
  const current = useSearchParams().get('setting')
  const screen_width = useWindowSize().width
    

  return (
    <div className="w-full flex xl:flex-row flex-col relative h-full xl:pr-8">
      {
        screen_width >= 1280 || !current && (
          <div className="pt-5 flex-shrink-0 flex-grow-0 gap-4 h-full overflow-y-scroll no-scrollbar flex flex-col xl:border-r-[1px] xl:border-r-[#E0E4EA] w-full xl:w-[258px] px-8 xl:px-[unset] xl:pl-8 xl:pr-4">
            <Settings_Panel/>
          </div>
        )
      }
      {
        screen_width < 1280 && current && (
          <div className="w-full px-7">
            <Back_Button text="Settings" />
          </div>
        )
      }
      
      {current == 'font' && <Font_Theme />}
      {current == 'color' && <Color_Theme />}
      {current == "password" && <Change_Password/>}
    </div>
  )
}