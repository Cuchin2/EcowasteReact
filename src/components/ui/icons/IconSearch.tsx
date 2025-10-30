import { BaseIcon } from "./BaseIcon/BaseIcon";
import type { BaseIconProps } from "./BaseIcon/BaseIcon";

const  IconSearch = (props: BaseIconProps) => {
    return (
    <BaseIcon {...props} id="Search">
		<circle  cx="19.1" cy="18.9" r="16.7"/>
		<line  x1="47.8" y1="47.7" x2="30.9" y2="30.8"/>
    </BaseIcon>
    )
}

export default IconSearch;