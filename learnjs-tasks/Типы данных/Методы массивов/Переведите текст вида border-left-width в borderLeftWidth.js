function camelize(str) {
    let arr = str.split('');
    let index;
    do {
      index = arr.findIndex((arg) => arg === '-');
      delete arr[index];
      if (index < arr.length - 1 && index >= 0) {
        arr[index + 1] = arr[index + 1].toUpperCase();
      }
    }
    while (index !== -1);
    let result = arr.join('');
    return result;
}