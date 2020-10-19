/**
 * Deep merges two objets.
 * @param  {Object} object destination object
 * @param  {Object} source source obejct
 *
 * @returns {Object} new object
 */
export const merge = (obj: any, source: any): any => {
  if (obj === source) return obj
  const newValue: any = {
    ...obj,
    ...source
  }

  Object.entries(source).forEach(([key, value]) => {
    newValue[key] =
      obj[key] && typeof obj[key] === 'object' ? merge(obj[key], value) : value
  })

  return newValue
}

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
