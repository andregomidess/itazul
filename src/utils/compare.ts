const compareObjects = (obj1: any, obj2: any) => {
    const differences: any = {};
  
    for (const key in obj1) {
      if (obj1.hasOwnProperty(key)) {
        if (obj1[key] !== obj2[key] && obj1[key] !== '' && obj2[key] !== '') {
          differences[key] = obj1[key];
        }
      }
    }
  
    return differences;
  };

  export {compareObjects};