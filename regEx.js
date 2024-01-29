let pattern='pw'

let regExone=new RegExp(pattern)

let flag='gi'
let regExtwo=new RegExp(pattern,flag)

let regExthree=/pw/gi
const strToCheck="Pw is growing at a rapid speed and recently they are working on PW skills to create skills based pW content"

const result=regExthree.test(strToCheck)
console.log(result)
const anotherresult=strToCheck.match(regExthree)
console.log(anotherresult)


const oneMoreResult=strToCheck.replace(regExthree,'p-w')
console.log(oneMoreResult)

const webUrl="https://pwskills.com/satya%20chaudhary"

const useableurl=webUrl.replace(/%\d0/,'-')
console.log(useableurl)