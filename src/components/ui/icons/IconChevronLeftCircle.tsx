import { BaseIcon } from "./BaseIcon/BaseIcon";
import type { BaseIconProps } from "./BaseIcon/BaseIcon";

const  IconChevronLeftCircle = (props: BaseIconProps) => {
    return (
    <BaseIcon {...props} id="chevron-left-circle">
        <circle cx="25.1" cy="25.1" r="22.7"/>
        <polyline points="29,37.9 16.2,25.1 29,12.3"/>
    </BaseIcon>
    )
}

export default IconChevronLeftCircle;