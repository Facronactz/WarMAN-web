Vue.filter("toCurrency", function (value) {
  if (typeof value !== "number") {
    value = parseInt(value);
  }
  var formatter = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });
  return formatter.format(value);
});