const validateZipcode = () => {
  const zipcode = $('#input-zipcode').val();
  if ((/(^\d{5}$)|(^\d{5}-\d{4}$)/).test(zipcode)) {
    return zipcode;
  } else {
    return false;
  };
};

const displayError = () => {
  let errorString = '';
  errorString += '<div class="alert alert-danger margin-top" role="alert">Please enter a valid US zip code (use a hyphen if 9 digits).</div>';
  $('.alert').remove();
  $('.weahter-widgets-row').remove();
  $(errorString).appendTo('#zipcode-input-section').hide().fadeIn(600);
};

const displayInvalidZipError = () => {
  if (!validateZipcode()) {
    displayError();
  };
};

const removeInvalidZipError = () => {
  $('.alert').remove();
};

module.exports = {
  validateZipcode,
  displayInvalidZipError,
  removeInvalidZipError,
  displayError,
};
