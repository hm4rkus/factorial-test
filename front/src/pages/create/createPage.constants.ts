// Types
import { FieldDefinition, FieldKey } from './createPage.types'

export const FIELDS: Record<FieldKey, FieldDefinition> = {
  [FieldKey.NAME]: {
    label: 'Name',
    id: FieldKey.NAME,
    type: 'text',
    helperText: 'Name of the data point.',
  },
  [FieldKey.VALUE]: {
    label: 'Value',
    id: FieldKey.VALUE,
    type: 'number',
    helperText: 'Value of the data point.',
  },
  [FieldKey.TIMESTAMP]: {
    label: 'Time',
    id: FieldKey.TIMESTAMP,
    type: 'datetime-local',
    helperText: 'Timestamp of the data point.',
  },
}

export const INITIAL_FIELD_STATE: Record<FieldKey, string | number> = {
  [FieldKey.TIMESTAMP]: '',
  [FieldKey.NAME]: '',
  [FieldKey.VALUE]: '',
}
