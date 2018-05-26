const data = require('./data');

const keyPress = () => {
  $(document).click((e) => {
    if (e.target.id === 'btn-submit') {
      data.getResults();
    };
  });
  $(document).keypress((e) => {
    if (e.target.id === 'input-zipcode') {
      data.getResults();
    };
  });
};

module.exports = {
  keyPress,
};
