const cleanItems = (array) => {
  let newArr = array.filter((item, pos) => array.findIndex((obj) => obj.id === item.id) === pos);
  newArr = newArr.filter((item) => item.photoUrls.length > 0);
  newArr = newArr.filter((item) => typeof item.id === 'number');
  newArr = newArr.filter((item) => typeof item.name === 'string');
  newArr = newArr.filter((item) => typeof item.photoUrls[0] === 'string');
  return newArr;
};
export default cleanItems;
