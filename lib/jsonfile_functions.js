// readFile examples
// ---------------------------------------------------------------------------------

// with a callback
jsonfile.readFile(file, function(err, obj) {
  if (err) console.error(err);
  console.dir(obj);
});

// with a promise
jsonfile
  .readFile(file)
  .then(obj => console.dir(obj))
  .catch(error => console.error(error));

// readFileSync examples
// ---------------------------------------------------------------------------------
// readFileSync
console.dir(jsonfile.readFileSync(file));

// writeFile examples
// ---------------------------------------------------------------------------------

// with a callback
const obj = { name: "Brian" };
jsonfile.writeFile(file, obj, function(err) {
  if (err) console.error(err);
});

// with a promise
const obj = { name: "Brian" };
jsonfile
  .writeFile(file, obj)
  .then(res => {
    console.log("Write complete");
  })
  .catch(error => console.error(error));

// formatting with spaces
const obj = { name: "Brian" };
jsonfile.writeFile(file, obj, { spaces: 2 }, function(err) {
  if (err) console.error(err);
});

// overriding EOL
const obj = { name: "Brian" };
jsonfile.writeFile(file, obj, { spaces: 2, EOL: "\r\n" }, function(err) {
  if (err) console.error(err);
});

// appending to an existing JSON file
const obj = { name: "Brian" };
jsonfile.writeFile(file, obj, { flag: "a" }, function(err) {
  if (err) console.error(err);
});

// writeFileSync examples
// ---------------------------------------------------------------------------------

// basic example
const obj = { name: "Brian" };
jsonfile.writeFileSync(file, obj);

// formatting with spaces
const obj = { name: "Brian" };
jsonfile.writeFileSync(file, obj, { spaces: 2 });

// overriding EOL
const obj = { name: "Brian" };
jsonfile.writeFileSync(file, obj, { spaces: 2, EOL: "\r\n" });

// append to an existing file
const obj = { name: "Brian" };
jsonfile.writeFileSync(file, obj, { flag: "a" });