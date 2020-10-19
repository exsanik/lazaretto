import { Deserializer } from 'jsonapi-serializer'

export const deserializer = (config = { keyForAttribute: 'snake_case' }) => {
  const configuredDeserializer = new Deserializer(config)
  return async data => {
    try {
      return await configuredDeserializer.deserialize(data)
    } catch (err) {
      return null
    }
  }
}
