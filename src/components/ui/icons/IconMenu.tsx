import { BaseIcon } from "./BaseIcon/BaseIcon";
import type { BaseIconProps } from "./BaseIcon/BaseIcon";

const  IconMenu = (props: BaseIconProps) => {
    return (
    <BaseIcon {...props} id="menu">
        <line x1="47.8" y1="25.1" x2="2.4" y2="25.1"/>
        <line x1="47.8" y1="10.8" x2="2.4" y2="10.8"/>
        <line x1="47.8" y1="39.3" x2="2.4" y2="39.3"/>
    </BaseIcon>
    )
}

export default IconMenu;