import { BaseIcon } from "./BaseIcon/BaseIcon";
import type { BaseIconProps } from "./BaseIcon/BaseIcon";

const  IconInfo = (props: BaseIconProps) => {
    return (
    <BaseIcon {...props} id="info">
        <circle cx="25.1" cy="25" r="22.7"/>
        <circle cx="24.8" cy="10.8" r="0.2"/>
        <line x1="24.8" y1="19" x2="24.8" y2="39.4"/>
    </BaseIcon>
    )
}

export default IconInfo;