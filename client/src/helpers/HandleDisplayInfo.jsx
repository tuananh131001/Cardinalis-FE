import moment from 'moment';
import { pluralRules, irregularRules } from './HandlePlural';
import uuid from 'react-uuid';
import { StyledTextLink } from '@/components/Text/Text.styled';
import { urlRegex } from '@/assets/Constant';

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
// get the plural form of a word and its number format
export const displayCountNumber = (count, prefix = '') => {
  if (prefix === '') {
    return `${count}`;
  }
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

// get list of tweeters containing media
export const getMediaTweeters = (tweetList) => {
  return tweetList.filter((tweet) => urlRegex.test(tweet.content));
};

// display list of urls
export const getListUrls = (content) => {
  return content.match(urlRegex);
};

// display inline link
export const displayInlineLink = (content) => {
  const lines = content.split(urlRegex);

  return (
    <span>
      {lines.map((line) => {
        if (line.match(urlRegex)) {
          return (
            <StyledTextLink
              key={uuid()}
              href={line}
              target="_blank"
              rel="noopener noreferrer"
              textThemeName="primaryText">
              {line}
            </StyledTextLink>
          );
        }
        return line;
      })}
    </span>
  );
};
// extract path
export const extractPath = (path, regex = /[^/]*$/) => {
  return regex.exec(path)[0];
};
// display date
export const displayDate = (date) => {
  return moment(date).format('MMMM YYYY');
};
// display duration
export const displayDuration = (date) => {
  if (moment(date).format('YYYY') !== moment().format('YYYY')) {
    return moment(date).format('MMM DD, YYYY');
  } else if (moment().diff(moment(date), 'weeks') > 1) {
    return moment(date).format('MMM DD');
  }
  return moment(date).fromNow(true);
};
// get the pinned tweet
export const getPinnedTweet = (tweetList) => {
  return tweetList.find((tweet) => tweet.isPinned);
};
