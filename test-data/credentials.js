const fs = require('node:fs');
const path = require('node:path');

const credentialsPath = path.join(__dirname, 'credentials.json');

function loadCredentials() {
  if (!fs.existsSync(credentialsPath)) {
    throw new Error(
      'Missing test-data/credentials.json. Create it with "username" and "password" fields.'
    );
  }

  const fileContents = fs.readFileSync(credentialsPath, 'utf8');
  const credentials = JSON.parse(fileContents);

  if (
    typeof credentials !== 'object' ||
    credentials === null ||
    Array.isArray(credentials)
  ) {
    throw new Error('test-data/credentials.json must contain a JSON object.');
  }

  const { username, password } = credentials;

  if (
    typeof username !== 'string' ||
    !username.trim() ||
    typeof password !== 'string' ||
    !password
  ) {
    throw new Error(
      'test-data/credentials.json must contain non-empty string values for "username" and "password".'
    );
  }

  return { username, password };
}

module.exports = loadCredentials();
