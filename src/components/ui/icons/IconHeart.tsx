import { BaseIcon } from "./BaseIcon/BaseIcon";
import type { BaseIconProps } from "./BaseIcon/BaseIcon";

const  IconHeart = (props: BaseIconProps) => {
    return (
    <BaseIcon {...props} id="Heart">
		<path d="M35.3,4.7c-2.3,0-4.8,0.9-7,2.5C27.1,8,26.1,9,25.4,10.1c-0.1,0.1-0.1,0.1-0.3,0.1c-0.2,0-0.2,0-0.3-0.2
		c-0.8-1-1.7-2-2.9-2.8c-2.2-1.6-4.7-2.5-7-2.5C8,4.7,2.4,10.4,2.4,17.3c0,3.6,1.2,7.4,3.5,11.1c1.8,2.9,4.4,5.9,7.6,8.8
		c5.4,4.9,10.8,7.9,11,8c0.2,0.1,0.4,0.2,0.6,0.2c0.2,0,0.4-0.1,0.6-0.2c0.2-0.1,5.6-3.1,11-8c3.2-2.9,5.8-5.9,7.6-8.8
		c2.4-3.8,3.5-7.5,3.5-11.1C47.8,10.4,42.2,4.7,35.3,4.7z"/>
    </BaseIcon>
    )
}

export default IconHeart;