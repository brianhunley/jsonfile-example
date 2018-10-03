const jsonfile = require("jsonfile");
const file = "./data/settings.json";

jsonfile.readFile(file, (err, obj) => {
  if (err) console.error(err);
  console.log(obj);
});

console.log(dashboardConfig);

/*
const obj = { name: "Brian" };
jsonfile.writeFile(file, obj, {flag: 'a'}, function(err) {
  if (err) console.error(err);
});
*/