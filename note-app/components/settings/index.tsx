import { useSearchParams } from "next/navigation";
import Font_Theme from "./font_theme";
import Color_Theme from "./color_theme";
import Settings_Panel from "./settings_panel";
import Change_Password from "./change_password";

export default function Settings() {
    const current = useSearchParams().get('setting')

    return (
      <div className="w-full flex relative h-full pr-8">
        <div className="pt-5 flex-shrink-0 flex-grow-0 gap-4 h-full overflow-y-scroll no-scrollbar flex flex-col xl:border-r-[1px] xl:border-r-[#E0E4EA] w-full xl:w-[258px] px-8 xl:px-[unset] xl:pl-8 xl:pr-4">
            <Settings_Panel/>
        </div>
        {current == 'font' && <Font_Theme/>}
        {current == 'color' && <Color_Theme />}
        {current == "password" && <Change_Password/>}
      </div>
  )
}