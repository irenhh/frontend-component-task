type ResultObj = {
  role: string;
  permissions: string[];
};

export const getResultString = (resultObj: ResultObj) => {
  const perm = resultObj.permissions.map((el) => {
    const parts = el.split('_');

    return {
      type: parts[0].toLowerCase(),
      action: parts[1].toLowerCase()
    };
  });

  const string = perm.reduce<{[key: string]: string[]}>((acc, item, i, arr) => {
    if (!acc[item.type]) {
      return {
        ...acc,
        [item.type]: [item.action]
      };
    }

    return {
      ...acc,
      [item.type]: [...acc[item.type], item.action]
    };
  }, {});

  return (
    `Your role is ${resultObj.role}` +
    '\n' +
    'Permissions you have: \n' +
    `GEMS - ${string.gems.join(', ')} \n` +
    `FOLDERS - ${string.folders.join(', ')}`
  );
};
