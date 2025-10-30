import { BaseIcon } from "./BaseIcon/BaseIcon";
import type { BaseIconProps } from "./BaseIcon/BaseIcon";

const  IconGallery = (props: BaseIconProps) => {
    return (
    <BaseIcon {...props} id="galery">
        <path d="M18.4,22.4H6.3c-2.2,0-4-1.8-4-4V6.3c0-2.2,1.8-4,4-4h12.1c2.2,0,4,1.8,4,4v12.1
            C22.4,20.6,20.7,22.4,18.4,22.4z"/>
        <path d="M43.9,22.4H31.7c-2.2,0-4-1.8-4-4V6.3c0-2.2,1.8-4,4-4h12.1c2.2,0,4,1.8,4,4v12.1
            C47.9,20.6,46.1,22.4,43.9,22.4z"/>
        <path d="M18.4,47.7H6.3c-2.2,0-4-1.8-4-4V31.6c0-2.2,1.8-4,4-4h12.1c2.2,0,4,1.8,4,4v12.1
            C22.4,45.9,20.7,47.7,18.4,47.7z"/>
        <path d="M43.9,47.7H31.7c-2.2,0-4-1.8-4-4V31.6c0-2.2,1.8-4,4-4h12.1c2.2,0,4,1.8,4,4v12.1
            C47.9,45.9,46.1,47.7,43.9,47.7z"/>
    </BaseIcon>
    )
}

export default IconGallery;