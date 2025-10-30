import "../components/BtnPrimary.css"

interface Props {
  slot?: string;
  children?: React.ReactNode;
  disabled?: boolean;
}

const BtnPrimary = ({ slot, children, disabled = false }: Props) => {
  // Usa children si existe, sino usa slot
  const content = children || slot;
  
  return (
    <button className="btn-primary" disabled={disabled}>{content}</button>
  )
}

export default BtnPrimary