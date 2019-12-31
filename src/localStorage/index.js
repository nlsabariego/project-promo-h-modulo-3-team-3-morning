const get = (item, defaultValue) => {
  const localStorageData = localStorage.getItem(item);
  return localStorageData === null ? defaultValue : localStorageData;
};

const set = (item, value) => {
  localStorage.setItem(item, value);
}

export default { get, set };