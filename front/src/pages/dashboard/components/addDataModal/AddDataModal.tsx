import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { Button, InputWithLabel } from 'components'
import React, { useCallback, useState } from 'react'
import { FIELDS, INITIAL_FIELD_STATE } from './addDataModal.constants'
import { ButtonContainer, Error, InputContainer } from './addDataModal.styles'

interface AddDataModalProps {
  isOpen?: boolean
  isAdding?: boolean
  onClose: () => void
  onAdd: (name: string, value: number, timestamp: number) => Promise<string>
}

export const AddDataModal = ({
  isOpen,
  onClose,
  isAdding,
  onAdd,
}: AddDataModalProps) => {
  const [fieldValues, setFieldValues] = useState(INITIAL_FIELD_STATE)
  const [error, setError] = useState('')

  const resetInputs = useCallback(() => {
    setFieldValues(INITIAL_FIELD_STATE)
  }, [setFieldValues])

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

  const onSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      onAdd(
        fieldValues.NAME,
        Number(fieldValues.VALUE),
        new Date(fieldValues.TIMESTAMP).getTime()
      ).then((errorMessage: string) => {
        if (errorMessage) {
          setError(errorMessage)
        } else {
          resetInputs()
        }
      })
    },
    [fieldValues, onAdd]
  )

  return (
    <Modal isOpen={!!isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <form onSubmit={onSubmit}>
          <ModalHeader>Add Data Point</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <InputContainer>
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
            </InputContainer>
            {error && <Error>{error}</Error>}
          </ModalBody>
          <ModalFooter>
            <ButtonContainer>
              <Button isSecondary disabled={isAdding} onClick={onClose}>
                Close
              </Button>
              <Button disabled={isAdding} type={'submit'}>
                Add Data Point
              </Button>
            </ButtonContainer>
          </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  )
}
