export const getStyleProps = (isSecondary?: boolean) => {
  const accessor = isSecondary ? 'secondary' : 'primary'

  return {
    background: `var(--button-${accessor}-background)`,
    color: `var(--button-${accessor}-color)`,
    _active: {
      background: `var(--button-${accessor}-background-active)`,
    },
    _hover: {
      background: `var(--button-${accessor}-background-hover)`,
    },
  }
}
