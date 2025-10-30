
import { BaseIcon } from "./BaseIcon/BaseIcon";
import type { BaseIconProps } from "./BaseIcon/BaseIcon";

const IconBell = (props: BaseIconProps) => {
  return (
    <BaseIcon {...props} id="Bell">
	
		<path d="M8,39.8c-0.8,0-1.5-0.5-1.7-1.2c-0.3-0.7-0.1-1.4,0.4-2c3-2.9,5.6-6.3,5.6-16.7c0-6.8,5.7-12.3,12.7-12.3
		c7,0,12.6,5.5,12.6,12.3c0,10.4,2.7,13.8,5.6,16.7c0.5,0.5,0.7,1.3,0.4,2c-0.3,0.7-1,1.2-1.7,1.2H8z"/>
		<path d="M24.4,7.7V2.8c0-0.3,0.2-0.5,0.5-0.5s0.5,0.2,0.5,0.5v4.9"/>
		<path d="M20,39.8c-0.3,0.7-0.4,1.4-0.4,2.2c0,3.1,2.4,5.7,5.3,5.7s5.3-2.6,5.3-5.7c0-0.8-0.1-1.5-0.4-2.2"/>
    </BaseIcon>
  )
}

export default IconBell;