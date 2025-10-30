import { BaseIcon } from "./BaseIcon/BaseIcon";
import type { BaseIconProps } from "./BaseIcon/BaseIcon";

const  IconUser = (props: BaseIconProps) => {
    return (
    <BaseIcon {...props} id="User">
		<path d="M25.1,27.3c-6.9,0-12.5-5.6-12.5-12.5S18.2,2.3,25.1,2.3s12.5,5.6,12.5,12.5S32,27.3,25.1,27.3z"/>
		<path d="M42.6,47.7H7.7c-1.8,0-3.3-1.4-3.3-3.1c0-0.1,0-3.5,2.7-6.8c1.5-1.9,3.6-3.5,6.2-4.6c3.2-1.3,7.2-2,11.8-2
		s8.6,0.7,11.8,2c2.6,1.1,4.7,2.6,6.2,4.6c2.6,3.3,2.7,6.7,2.7,6.8C45.8,46.3,44.4,47.7,42.6,47.7z"/>
    </BaseIcon>
    )
}

export default IconUser;