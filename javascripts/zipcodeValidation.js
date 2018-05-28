const validateZipcode = () => {
  const zipcode = $('#input-zipcode').val();
  if ((/(^\d{5}$)|(^\d{5}-\d{4}$)/).test(zipcode)) {
    return zipcode;
  } else {
    return false;
  };
};

const displayInvalidZipError = () => {
  if (!validateZipcode()) {
    let errorString = '';
    errorString += '<div class="alert alert-danger" role="alert">Please enter a valid US zip code (use a hyphen if 9 digits).</div>';
    $('.alert').remove();
    $('#zipcode-input-section').append(errorString);
  };
};

const removeInvalidZipError = () => {
  $('.alert').remove();
};

module.exports = {
  validateZipcode,
  displayInvalidZipError,
  removeInvalidZipError,
};
