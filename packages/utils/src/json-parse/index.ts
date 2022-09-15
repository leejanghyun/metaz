const {parse} = JSON

export const jsonParse = (
  data: string,
  defaultValue: Record<string, any> = {},
) => {
  try {
    return parse(data)
  } catch {
    return defaultValue
  }
}
