import moment from 'moment';
import { pluralRules, irregularRules } from './HandlePlural';

const sanitizeWord = (word, replaceRules = irregularRules, regexRules = pluralRules) => {
  // if word is irregular, return the irregular form
  const token = word.toLowerCase();
  if (replaceRules[token]) {
    return replaceRules[token];
  }
  // if word is uncountable, return the word
  // if (uncountableRules.includes(token)) {
  //   console.log("first")
  //   return token;
  // }
  // if word meets the plural rules, return the plural form
  var len = regexRules.length;
  while (len--) {
    var rule = regexRules[len];
    if (token.match(rule[0])) {
      return token.replace(rule[0], rule[1]);
    }
  }
};
export const displayCountNumber = (count, prefix) => {
  const suffixes = ['k', 'M', 'G', 'T', 'P', 'E'];
  var exp,
    firstDigit,
    secondDigit,
    wholeNumDecimal,
    fixedNum = 2;
  if (count >= 2) {
    prefix = sanitizeWord(prefix);
    if (count >= 1000) {
      exp = Math.floor(Math.log(count) / Math.log(1000));
      wholeNumDecimal = count / Math.pow(1000, exp);
      // get first digit after decimal point
      firstDigit = Math.floor((wholeNumDecimal * 10) % 10);
      // get second digit after decimal point
      secondDigit = Math.floor((wholeNumDecimal * 100) % 10);
      // get fixed number of decimal places
      // if second digit is 0, only show one decimal place
      if (secondDigit === 0 && firstDigit !== 0) {
        fixedNum = 1;
        // if all digits are 0, show no decimal places
      } else if (secondDigit === 0 && firstDigit === 0) {
        fixedNum = 0;
        // if first digit is nonzero or second digit is nonzero, show two decimal places
      } else {
        fixedNum = 2;
      }

      // If number is not overflow (< E+21)
      if (suffixes[exp - 1]) {
        count = wholeNumDecimal.toFixed(fixedNum) + suffixes[exp - 1];
        // if over E+21, just show E+n
      } else {
        const maxSuffixLength = suffixes.length;
        count =
          wholeNumDecimal.toFixed(fixedNum) +
          suffixes[maxSuffixLength - 1] +
          `+${(exp - maxSuffixLength) * 3}`;
      }
    }
  }
  return `${count} ${prefix.charAt(0).toUpperCase() + prefix.slice(1)}`;
};

export const displayDate = (date) => {
  return moment(date).format('MMMM YYYY');
};
