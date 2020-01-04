export const FAKE_USER = {
  firstName: 'Gladys',
  lastName: 'Princess',
  username: 'gladys',
  avatar:
  'https://www.gravatar.com/avatar/fbec860f8b4700fa80e8dbc871913e1f?s=32'
};

export const FAKE_EMAILS = [
  {
    id: 0,
    subject: 'Hey Gladys',
    body: 'Yo, just wanted to say hey.'
  },
  {
    id: 1,
    subject: 'React is great',
    body: 'I thought I should let you know.'
  },
  {
    id: 2,
    subject: 'NEED ASSISTANCE',
    body:
      'If you send me your bank account number I will reward you with $10 million whole US dollars.'
  }
];

const LOTS_OF_EMAILS = Array(1000)
  .fill(0)
  .map(_ => {
    let email =
      FAKE_EMAILS[
        Math.floor(Math.random() * FAKE_EMAILS.length)
      ];
    return {
      ...email,
      id: Math.random(),
      preview: email.body.substr(0, 46)
    };
  });

// Generate a preview
FAKE_EMAILS.forEach(
  email => (email.preview = email.body.substr(0, 46))
);

export function login(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (
        username === 'gladys' &&
        password === 'lulusecret'
      ) {
        resolve(FAKE_USER);
      } else {
        reject({
          message: 'Invalid username or password'
        });
      }
    }, 300);
  });
}

export function fetchEmails() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(LOTS_OF_EMAILS);
    }, 300);
  });
}

export function fetchLatestEmails() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(
        FAKE_EMAILS.map(e => ({
          ...e,
          id: Math.random()
        })).slice(
          0,
          Math.floor(
            Math.random() * (FAKE_EMAILS.length + 1)
          )
        )
      );
    }, 300);
  });
}