import { useEffect, useState } from "react";

const useLocalStorage = (key) =>{
  //get localstorage value
  const localStorageValue = localStorage.getItem(key)

  //initial value of localstorage
  const [getLocalStorage, setLocalStorageValue] = useState(localStorageValue ? JSON.parse(localStorageValue):null)
  
  useEffect(()=>{
    if (localStorageValue) {
      setLocalStorageValue(JSON.parse(localStorageValue));
    } else {
      setLocalStorageValue(null);
    }
  },[localStorageValue])

  //set value in localstorage
  const setLocalStorage = (value)=>{
    localStorage.setItem(key, JSON.stringify(value))
  }

  //clear value in localStorage
  const clearLocalSotrage =()=>{
    localStorage.clear();
  }

  return [getLocalStorage, setLocalStorage, clearLocalSotrage]
}

export default useLocalStorage