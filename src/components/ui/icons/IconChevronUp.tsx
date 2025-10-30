import { BaseIcon } from "./BaseIcon/BaseIcon";
import type { BaseIconProps } from "./BaseIcon/BaseIcon";

const  IconChevronUp = (props: BaseIconProps) => {
    return (
    <BaseIcon {...props} id="chevron-up">
        <polyline points="2.4,35 25.1,12.4 47.8,35 	"/>
    </BaseIcon>
    )
}

export default IconChevronUp;