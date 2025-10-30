import { BaseIcon } from "./BaseIcon/BaseIcon";
import type { BaseIconProps } from "./BaseIcon/BaseIcon";

const  IconChevronRight = (props: BaseIconProps) => {
    return (
    <BaseIcon {...props} id="chevron-right">
        <polyline points="15.2,2.4 37.8,25.1 15.2,47.8 	"/>
    </BaseIcon>
    )
}

export default IconChevronRight;