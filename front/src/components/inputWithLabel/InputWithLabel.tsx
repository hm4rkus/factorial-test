// Components
import { FormControl, FormHelperText, FormLabel, Input } from '@chakra-ui/react'

interface InputWithLabelProps {
  id: string
  label: string
  required?: boolean
  helperText?: string
  value?: string | number
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  type?: React.HTMLInputTypeAttribute
}

export const InputWithLabel = ({
  id,
  type,
  required,
  label,
  onChange,
  value,
  helperText,
}: InputWithLabelProps) => {
  return (
    <FormControl>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <Input
        value={value}
        id={id}
        type={type}
        onChange={onChange}
        required={required}
      />
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  )
}
