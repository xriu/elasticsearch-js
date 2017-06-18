module.exports = {
  get '_default'() { return require('./2_4'); },
  get '2.4'() { return require('./2_4'); },
  get '1.7'() { return require('./1_7'); },
  get 'master'() { return require('./master'); },
};
