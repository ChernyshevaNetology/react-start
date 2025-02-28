export const middleWareCode = (store, filter, sortOption) => {
  let preparedCounters = [...store];

  if (filter === "negative") {
    preparedCounters = preparedCounters.filter((product) => product.value < 0);
  }
  if (filter === "zero") {
    preparedCounters = preparedCounters.filter(
      (product) => product.value === 0,
    );
  }
  if (filter === "moreThanOne") {
    preparedCounters = preparedCounters.filter((product) => product.value > 1);
  }
  if (filter === "moreThanTen") {
    preparedCounters = preparedCounters.filter((product) => product.value > 10);
  }
  if (sortOption === "descending") {
    preparedCounters.sort((a, b) => b.value - a.value);
  }
  if (sortOption === "ascending") {
    preparedCounters.sort((a, b) => a.value - b.value);
  }
  return preparedCounters;
};

export const getTotalCount = (data) =>
  data.reduce((acc, item) => acc + item.value, 0);

export const statCalculator = (dataCounters, ringData) => {
  const obj = dataCounters.reduce(
    (acc, item) => {
      if (item.value < 0) {
        acc.negative++;
      }
      if (item.value === 0) {
        acc.zero++;
      }
      if (item.value >= 1 && item.value <= 10) {
        acc.moreThanOne++;
      }
      if (item.value > 10) {
        acc.moreThanTen++;
      }
      return acc;
    },
    { negative: 0, zero: 0, moreThanOne: 0, moreThanTen: 0 },
  );
  for (const key in obj) {
    obj[key] = +(obj[key] / dataCounters.length).toFixed(2) * 100;
  }
  return obj;
};
