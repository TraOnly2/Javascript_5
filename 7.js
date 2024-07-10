function filterProps(obj, ...NameFilter) {
    return Object.fromEntries(
      Object.entries(obj).filter(([key]) => !NameFilter.includes(key))
    );
  }
  
  // Example usage:
  const object = { a: 1, b: 2, c: 3, d: 4 };
  const filteredObject = filterProps(object, "b", "d");
  
  console.log(filteredObject); // Output: { a: 1, c: 3 }
  

