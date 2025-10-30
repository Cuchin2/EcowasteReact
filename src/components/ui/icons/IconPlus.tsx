import { BaseIcon } from "./BaseIcon/BaseIcon";
import type { BaseIconProps } from "./BaseIcon/BaseIcon";

const  IconPlus = (props: BaseIconProps) => {
    return (
    <BaseIcon {...props} id="minus">
		<line x1="47.8" y1="25.1" x2="2.4" y2="25.1"/>
		<line x1="25.1" y1="2.4" x2="25.1" y2="47.8"/>
    </BaseIcon>
    )
}

export default IconPlus;