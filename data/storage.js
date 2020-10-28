import user from './user.json';
import AsyncStorage from "@react-native-async-storage/async-storage";

const setInitialData = async () => {
  try {
    const userId = await getData('id');
    if (!userId) {
      for (const [key, value] of Object.entries(user)) {
        await AsyncStorage.setItem(key, value);
      }
    }

    return getData('id');
  } catch (e) {
    throw e;
  }
};

const getData = async (item) => {
  try {
    return AsyncStorage.getItem(item);
  } catch (e) {
    throw e;
  }
};

const setData = async (item, value) => {
  try {
    AsyncStorage.setItem(item, value);
  } catch (e) {
    throw e;
  }
}

export {
  setInitialData,
  getData,
  setData
}