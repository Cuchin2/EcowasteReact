import { BaseIcon } from "./BaseIcon/BaseIcon";
import type { BaseIconProps } from "./BaseIcon/BaseIcon";

const  IconCross = (props: BaseIconProps) => {
    return (
    <BaseIcon {...props} id="cross">
        <line x1="47.8" y1="2.4" x2="2.4" y2="47.8"/>
        <line x1="47.8" y1="47.8" x2="2.4" y2="2.4"/>
    </BaseIcon>
    )
}

export default IconCross;