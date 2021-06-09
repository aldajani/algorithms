/* eslint-disable no-console */
const numUniqueEmails = (emails) => {
  const uniqueEmailAddresses = [];

  emails.forEach((email) => {
    const emailArray = email.split('@');
    emailArray[0] = emailArray[0].replace(/\./gi, '');

    if (emailArray[0].includes('+')) {
      const index = emailArray[0].indexOf('+');
      emailArray[0] = emailArray[0].substring(0, index);
    }

    const newEmail = emailArray.join('@');
    if (!uniqueEmailAddresses.includes(newEmail)) uniqueEmailAddresses.push(newEmail);
  });

  return uniqueEmailAddresses.length;
};

console.log(numUniqueEmails(['test.email+alex@leetcode.com', 'test.e.mail+bob.cathy@leetcode.com', 'testemail+david@lee.tcode.com'])); // output = 2


// alternate implementation using the built in JS set data structure

const numUniqueEmails2 = (emails) => {
  const set = new Set();

  emails.forEach((email) => {
    const newEmail = email.split('@');
    newEmail[0] = email[0].split('+')[0].replace(/\./g, '');
    set.add(newEmail.join('@'));
  });

  return set.size;
};

console.log(numUniqueEmails2(['test.email+alex@leetcode.com', 'test.e.mail+bob.cathy@leetcode.com', 'testemail+david@lee.tcode.com'])); // output = 2
