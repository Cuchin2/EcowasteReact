import { BaseIcon } from "./BaseIcon/BaseIcon";
import type { BaseIconProps } from "./BaseIcon/BaseIcon";

const  IconList = (props: BaseIconProps) => {
    return (
    <BaseIcon {...props} id="list">
		<line x1="47.3" y1="4.7" x2="14.5" y2="4.7"/>
		<line x1="47.3" y1="18.2" x2="14.5" y2="18.2"/>
		<line x1="47.3" y1="31.7" x2="14.5" y2="31.7"/>
		<line x1="47.3" y1="45.2" x2="14.5" y2="45.2"/>

		<line x1="3.2" y1="4.7" x2="3.2" y2="4.7"/>
		<line x1="3.2" y1="18.2" x2="3.2" y2="18.2"/>
		<line x1="3.2" y1="31.7" x2="3.2" y2="31.7"/>
		<line x1="3.2" y1="45.2" x2="3.2" y2="45.2"/>
    </BaseIcon>
    )
}

export default IconList;