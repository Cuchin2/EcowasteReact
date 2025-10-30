import "../components/BtnSecondary.css"

interface Props {
  slot?: string;
  children?: React.ReactNode;
  disabled?: boolean;
}

const BtnSecondary = ({ slot, children, disabled = false }: Props) => {
  // Usa children si existe, sino usa slot
  const content = children || slot;
  
  return (
    <button className="btn-secondary" disabled={disabled}>{content}</button>
  )
}

export default BtnSecondary
