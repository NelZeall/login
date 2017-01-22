module.exports = {
  'Login test': function (client) {
    client
    .url('https://9gag.com/login')
    .waitForElementVisible( 'body', 1000 )
    .setValue('input[name="username"]', 'bigzberserk@hotmail.com')
    .setValue('input[name="password"]', '12345678z+')
    .click('input[type="submit"]')
    .end();
  }
};
