export const getStyle = (width, height) => {
  const isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1
  const baseStyle = {
    width: `${width}px`,
    height: `${height}px`,
    border: 'none',
    padding: '0px',
    margin: '0px',
    background: 'none',
    outline: 'none',
    resize: 'none',
    colour: 'black',
    fontSize: '16px',
    fontFamily: 'Impact',
    borderColor: 'lightblue',
    borderWidth: '1px',
    borderStyle: 'solid',
  }
  if (isFirefox) {
    return baseStyle
  }
  return {
    ...baseStyle,
    margintop: '-4px',
  }
}
