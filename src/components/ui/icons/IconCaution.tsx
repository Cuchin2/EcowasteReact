import { BaseIcon } from "./BaseIcon/BaseIcon";
import type { BaseIconProps } from "./BaseIcon/BaseIcon";

const  IconCaution = (props: BaseIconProps) => {
    return (
    <BaseIcon {...props} id="caution">
        <circle cx="24.9" cy="38.3" r="0.2"/>
        <line x1="24.9" y1="31.9" x2="24.9" y2="17.5"/>
        <path d="M23.1,8.3c0.8-1.3,2.7-1.3,3.5,0l9.6,16.6l9.6,16.6c0.8,1.3-0.2,3-1.7,3H24.9H5.7c-1.5,0-2.5-1.7-1.7-3
            l9.6-16.6L23.1,8.3z"/>
    </BaseIcon>
    )
}

export default IconCaution;