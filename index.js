function processString(str) {
    const trimmed = str.trim() // trim() - удаляет пробелы
    const replaced = trimmed.replace('плохой', 'хорошeй')   // replaced() - заменяет одно слово на другое
    return replaced.split(' ') // split() - разбивает большую строку на маленькие строки(по словам), которые до этого были в одной большой строке
}
const dano = ' Это пример плохой строки  '
const result = processString(dano)
console.log(result)

// replace
const str = 'I love banana'
const newStr = str.replace('banana', 'apple')
console.log(newStr)

const string = 'I love oranges and Oranges'
const newString = string.replace(/oranges/gi, 'apples') 
// g — глобальный поиск (заменяет все вхождения).
// i — игнорирует регистр (заменяет как "oranges", так и "Oranges").

console.log(newString)
