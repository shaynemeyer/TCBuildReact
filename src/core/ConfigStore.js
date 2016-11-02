
let ConfigStore = () => {
  function setItem(key, settings) {
    const settingsString = JSON.stringify(settings);
    localStorage.setItem(key, settingsString);
  }

  function getItem(key) {
    if (localStorage.getItem(key)) {
      const settingsString = localStorage.getItem(key);
      return JSON.parse(settingsString);
    }
  }

  return {
    setItem: setItem,
    getItem: getItem
  }
};

export default ConfigStore;