export enum FieldKey {
  TIMESTAMP = 'TIMESTAMP',
  NAME = 'NAME',
  VALUE = 'VALUE',
}

export interface FieldDefinition {
  label: string
  id: FieldKey
  type: React.HTMLInputTypeAttribute
  helperText?: string
}
