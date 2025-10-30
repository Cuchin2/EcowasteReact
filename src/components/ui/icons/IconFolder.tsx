import { BaseIcon } from "./BaseIcon/BaseIcon";
import type { BaseIconProps } from "./BaseIcon/BaseIcon";

const  IconFolder = (props: BaseIconProps) => {
    return (
    <BaseIcon {...props} id="folder">
	<path d="M5.4,6c-1.6,0-3,1.3-3,3v31.6c0,0.9,0.3,1.7,1,2.3c0.6,0.6,1.5,1,2.3,0.9l39.2-0.1h0c1.7,0,3-1.4,3-3V14.6
		c0-1.6-1.3-2.9-2.9-2.9H24.6c-0.8,0-1.5-0.3-2-0.9l-4.1-4.2C18.2,6.2,17.7,6,17.2,6H5.4z"/>
    </BaseIcon>
    )
}

export default IconFolder;