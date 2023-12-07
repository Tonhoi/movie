type Params = {
  [key: string]: any;
};

const mergeParams = (...paramObjects: Params[]) => {
  return paramObjects.reduce((mergedParams, params) => {
    return { ...mergedParams, ...params };
  }, {});
};

export { mergeParams };
