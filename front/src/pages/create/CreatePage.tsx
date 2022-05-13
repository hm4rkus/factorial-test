import React, { useCallback, useState } from 'react'

// Components
import { InputWithLabel } from 'components/inputWithLabel/InputWithLabel'

// Constants
import { FIELDS, INITIAL_FIELD_STATE } from './createPage.constants'

// Styles
import { CustomButton, Form } from './createPage.styles'

export const CreatePage = (): React.ReactElement => {
  const [fieldValues, setFieldValues] = useState(INITIAL_FIELD_STATE)

  /**
   * On Input Change Callback.
   */
  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setFieldValues((current) => ({
        ...current,
        [event.target.id]: event.target.value,
      }))
    },
    [setFieldValues]
  )

  return (
    <>
      <Form>
        {Object.values(FIELDS).map(({ id, label, type, helperText }) => (
          <InputWithLabel
            key={id}
            id={id}
            label={label}
            onChange={onChange}
            type={type}
            value={fieldValues[id]}
            helperText={helperText}
          />
        ))}
      </Form>
      <CustomButton>Add Data Point</CustomButton>
    </>
  )
}
