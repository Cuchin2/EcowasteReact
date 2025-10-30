import "../BaseIcon/BaseIcon.css"

export interface BaseIconProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number;
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  id?: string
}

export const BaseIcon = ({
  size = 24,
  color = '#7a7a7a',
  strokeWidth = 2,
  className = '',
  onClick,
  children,
  id
}:BaseIconProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 50 50"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      onClick={onClick}
      style={{
        cursor: onClick ? 'pointer' : 'inherit',
        transition: 'all 0.2s ease',
      }}
    >
      <g id={id} className={`icons ${className}`}>
          {children}
      </g>
    </svg>
  )
}