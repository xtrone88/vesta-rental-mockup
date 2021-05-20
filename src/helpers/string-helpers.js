const pluralize = (quantity, singular, plural) => {
  if (quantity == 1) {
    return quantity + ' ' + singular;
  }
  return quantity + ' ' + plural;
}

const phone_numberize = (event) => {
  let value = event.target.value;
  let cleaned = value.replace(/\D/g, '');
  let match = cleaned.match(/^(\d{3})$/);
  if (match) {
    value = '(' + match[1] + ') ';
    event.target.value = value;
    return;
  }
  match = cleaned.match(/^(\d{3})(\d{3})$/);
  if (match) {
    value = '(' + match[1] + ') ' + match[2] + '-';
    event.target.value = value;
    return;
  }
  match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    value = '(' + match[1] + ') ' + match[2] + '-' + match[3];
    event.target.value = value;
  }
}

export default {
  pluralize,
  phone_numberize
}