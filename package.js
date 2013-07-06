Package.describe({
  summary: "typeahead.js"
});

Package.on_use(function (api, where) {
  api.add_files(['lib/typeahead.js', 'lib/typeahead.css'], 'client');
});
