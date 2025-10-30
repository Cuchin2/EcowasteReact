import { BaseIcon } from "./BaseIcon/BaseIcon";
import type { BaseIconProps } from "./BaseIcon/BaseIcon";

const  IconChevronRightCircle = (props: BaseIconProps) => {
    return (
    <BaseIcon {...props} id="chevron-right-circle">
        <circle cx="25.1" cy="25.1" r="22.7"/>
        <polyline points="21.2,12.3 34,25.1 21.2,37.9"/>
    </BaseIcon>
    )
}

export default IconChevronRightCircle;