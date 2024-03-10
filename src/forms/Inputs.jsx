
import { Input } from "@material-tailwind/react"
// eslint-disable-next-line react/prop-types
const Inputs = ({placeholder,label,name,onChange,value,type}) => {
    
  return (
    <div>
      <Input className="border-8  border-blue-500"  placeholder={placeholder} label={label} name={name} type={type} onChange={onChange} value={value}  />
    </div>
  )
}

export default Inputs
