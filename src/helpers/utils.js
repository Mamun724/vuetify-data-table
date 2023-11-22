export function getDateTimeString(isoDateTime) {
  const dateTime = new Date(isoDateTime);
  return `${dateTime.toLocaleDateString()} ${dateTime.toLocaleTimeString()}`
}

export function getPrice(price) {
  return `$${price.toFixed(2)}`;
}

export function getTypeColor(type) {
  switch (type) {
    case "Coupon":
      return "blue";
    case "Percentage Off":
      return "green";
    case "Exclusive Discounts":
      return "indigo";
    case "Buy One Get One":
      return "yellow";
    default:
      return "error";
  }
}

export function getStatusColor(status) {
  switch (status) {
    case "Expired":
      return "warning";
    case "In Effect":
      return "primary";
    case "Starting Soon":
      return "secondary"
    default:
      return "error";
  }
}

export function filterByDate(filteredData, dates) {
  if (!dates) {
    return filteredData;
  }

  const startDate = dates[0];
  const endDate = dates[1];
  if (!(startDate && endDate)) {
    return filteredData;
  }

  startDate.setHours(0);
  startDate.setMinutes(0);
  startDate.setSeconds(0);
  endDate.setHours(23);
  endDate.setMinutes(59);
  endDate.setSeconds(59);
  filteredData = filteredData.filter(datum => startDate <= new Date(datum.startDate) && new Date(datum.endDate) <= endDate);

  return filteredData;
}

export function filterByType(filteredData, type) {
  if (type) {
    filteredData = filteredData.filter(datum => datum.type === type);
  }

  return filteredData;
}

export function filterBySearch(filteredData, searchCriteria) {
  filteredData = filteredData.filter(datum => {
    for (let criteria of searchCriteria) {
      if (datum[criteria.searchField] !== criteria.searchValue) {
        return false;
      }
    }
    return true;
  });
  return filteredData;
}
