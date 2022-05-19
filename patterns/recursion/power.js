function power(base, exp) {
  if (base === 0) return 1;
  if (base === 1) return base;
  return base * power(base, exp - 1);
}

module.exports = {
  power,
};
