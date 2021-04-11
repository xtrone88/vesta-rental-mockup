const pluralize = (quantity, singular, plural) => {
  if (quantity == 1) {
    return quantity + ' ' + singular;
  }
  return quantity + ' ' + plural;
}

export default {
  pluralize
}