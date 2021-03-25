function isPhone(value:string): boolean{
  return /^1[3456789]\d{9}$/.test(value);
}
function isEmail(value:string): boolean{
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/g.test(value);
}
function isIDCard(value:string): boolean{
  const arg1 = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/;
  const arg2 = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[A-Z])$/;
  return arg1.test(value) || arg2.test(value);
}
function isURL(value:string): boolean{
  return /(http[s]?|ftp):\/\/[^\/\.]+?\..+\w$/i.test(value);
}

export {
  isPhone,
  isEmail,
  isIDCard,
  isURL,
}