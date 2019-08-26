export function flatMap(list, fn) {
  return list.reduce((result, element) => {
    return result.concat(fn(element) || [])
  }, [])
}

 export function uniq(list, keyFn) {
  const listMap = list.reduce((result, element) => {
    result[keyFn(element)] = element
    return result
  }, {})
  return Object.values(listMap)
}
