interface LooseObject {
  [key: string]: string;
}

export const sortObject = (obj: LooseObject): LooseObject => {
  return Object.keys(obj)
    .sort()
    .reduce(function (result: LooseObject, key) {
      result[key] = obj[key];
      return result;
    }, {});
};
