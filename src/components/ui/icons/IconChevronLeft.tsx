import { BaseIcon } from "./BaseIcon/BaseIcon";
import type { BaseIconProps } from "./BaseIcon/BaseIcon";

const  IconChevronLeft = (props: BaseIconProps) => {
    return (
    <BaseIcon {...props} id="chevron-left">
        <polyline points="35,47.8 12.4,25.1 35,2.4 	"/>
    </BaseIcon>
    )
}

export default IconChevronLeft;