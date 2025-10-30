import { BaseIcon } from "./BaseIcon/BaseIcon";
import type { BaseIconProps } from "./BaseIcon/BaseIcon";

const  IconChevronDown = (props: BaseIconProps) => {
    return (
    <BaseIcon {...props} id="chevron-down">
        <polyline points="47.8,15.2 25.2,37.8 2.4,15.2 	"/>
    </BaseIcon>
    )
}

export default IconChevronDown;