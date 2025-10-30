import { BaseIcon } from "./BaseIcon/BaseIcon";
import type { BaseIconProps } from "./BaseIcon/BaseIcon";

const  IconError = (props: BaseIconProps) => {
    return (
    <BaseIcon {...props} id="error">
        <circle cx="25.1" cy="25.1" r="22.7"/>
        <line x1="9.1" y1="9.1" x2="41.1" y2="41.1"/>
    </BaseIcon>
    )
}

export default IconError;