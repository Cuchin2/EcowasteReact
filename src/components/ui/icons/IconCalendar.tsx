import { BaseIcon } from "./BaseIcon/BaseIcon";
import type { BaseIconProps } from "./BaseIcon/BaseIcon";

const  IconCalendar = (props: BaseIconProps) => {
    return (
    <BaseIcon {...props} id="Calendar">
        <path d="M44.8,44.7H5.3c-1.7,0-3-1.3-3-3V11.9c0-1.7,1.3-3,3-3h39.4c1.7,0,3,1.3,3,3v29.8
            C47.8,43.3,46.4,44.7,44.8,44.7z"/>
        <line x1="2.3" y1="18.9" x2="47.7" y2="18.9"/>
        <line x1="12.5" y1="4.5" x2="12.5" y2="13.4"/>
        <line x1="37.4" y1="4.5" x2="37.4" y2="13.4"/>
    </BaseIcon>
    )
}

export default IconCalendar;