Package.describe({
  summary: "Moved to the 'markdown' package",
  version: '1.0.3-winr.0'
});

Package.onUse(function (api) {
  api.imply("markdown");
});
