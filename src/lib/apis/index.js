module.exports = {
  get '_default'() { return require('./2_4'); },
  get '2.4'() { return require('./2_4'); },
  get 'master'() { return require('./master'); },
};
