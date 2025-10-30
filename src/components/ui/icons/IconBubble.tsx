
import { BaseIcon } from "./BaseIcon/BaseIcon";
import type { BaseIconProps } from "./BaseIcon/BaseIcon";

const IconBubble = (props: BaseIconProps) => {
  return (
    <BaseIcon {...props} id="Bubble">
	<path d="M25.1,5.8c-12.5,0-22.7,7.8-22.7,17.4c0,4.8,2.7,9.5,7.4,12.8c0.5,0.3,0.7,0.9,0.5,1.4
		c-0.3,1.2-1.4,4.4-4.2,7.4c3.5-1.2,7.2-3.3,10-5.2c0.3-0.2,0.7-0.3,1.1-0.2c2.5,0.7,5.2,1.1,7.9,1.1c12.5,0,22.7-7.8,22.7-17.4
		S37.6,5.8,25.1,5.8z"/>
    </BaseIcon>
  )
}

export default IconBubble;