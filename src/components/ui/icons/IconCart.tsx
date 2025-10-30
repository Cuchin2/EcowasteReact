import { BaseIcon } from "./BaseIcon/BaseIcon";
import type { BaseIconProps } from "./BaseIcon/BaseIcon";

const  IconCart = (props: BaseIconProps) => {
    return (
    <BaseIcon {...props} id="Cart">
		<path className="st5" d="M39.2,38.8c-2.5,0-4.5,2-4.5,4.5c0,2.5,2,4.5,4.5,4.5c2.5,0,4.5-2,4.5-4.5C43.7,40.8,41.7,38.8,39.2,38.8z"/>
		<path className="st5" d="M21.3,38.8c-2.5,0-4.5,2-4.5,4.5c0,2.5,2,4.5,4.5,4.5c2.5,0,4.5-2,4.5-4.5C25.8,40.8,23.8,38.8,21.3,38.8z"/>
		<path className="st6" d="M46.1,34.5h-29c-0.9,0-1.8-0.8-2-1.7l-4-25.2L11,5.9c-0.3-2.1-2.2-3.7-4.3-3.7h-4 M11.4,8.5h35.3
			c0.4,0,0.7,0.2,0.9,0.4c0.2,0.3,0.3,0.6,0.2,1l0,0l0,0.1l-2,12.9c-0.2,1.1-1.2,2.1-2.2,2.2l-29,2.5"/>
    </BaseIcon>
    )
}

export default IconCart;