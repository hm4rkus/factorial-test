import React, { useCallback, useState } from 'react'

// Components
import { InputWithLabel } from 'components/inputWithLabel/InputWithLabel'

// Constants
import {
  FIELDS,
  INITIAL_FIELD_STATE,
  UNKNOWN_ERROR,
} from './createPage.constants'

// Styles
import { CustomButton, Form } from './createPage.styles'

// Services
import { postDataPoint } from './createPage.services'
import { TitledCard } from 'components'

export const CreatePage = (): React.ReactElement => {
  const [fieldValues, setFieldValues] = useState(INITIAL_FIELD_STATE)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const onSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      try {
        setIsLoading(true)
        await postDataPoint(
          fieldValues.NAME,
          Number(fieldValues.VALUE),
          new Date(fieldValues.TIMESTAMP).getTime()
        )
        setIsLoading(false)
      } catch (e) {
        console.error(e)
        setError(UNKNOWN_ERROR)
        setIsLoading(false)
      }
    },
    [fieldValues]
  )

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
    <TitledCard title={'New Data Point'}>
      <Form onSubmit={onSubmit}>
        {Object.values(FIELDS).map(({ id, label, type, helperText }) => (
          <InputWithLabel
            required
            key={id}
            id={id}
            label={label}
            onChange={onChange}
            type={type}
            value={fieldValues[id]}
            helperText={helperText}
          />
        ))}
        <CustomButton disabled={isLoading} type='submit'>
          Add Data Point
        </CustomButton>
      </Form>
    </TitledCard>
  )
}
