(function () {
  const sdk = window.__HERMES_PLUGIN_SDK__;
  const registry = window.__HERMES_PLUGINS__;
  if (!sdk || !registry || !sdk.React) {
    console.warn("[example-dashboard] Hermes plugin SDK is unavailable");
    return;
  }

  const React = sdk.React;
  const Card = sdk.components && sdk.components.Card;
  const CardHeader = sdk.components && sdk.components.CardHeader;
  const CardTitle = sdk.components && sdk.components.CardTitle;
  const CardContent = sdk.components && sdk.components.CardContent;

  function ExampleDashboardPlugin() {
    if (Card && CardHeader && CardTitle && CardContent) {
      return React.createElement(
        "div",
        { className: "p-6" },
        React.createElement(
          Card,
          null,
          React.createElement(CardHeader, null, React.createElement(CardTitle, null, "Example Plugin")),
          React.createElement(CardContent, null, "Example dashboard plugin is installed and serving assets.")
        )
      );
    }

    return React.createElement(
      "div",
      { style: { padding: "1.5rem" } },
      React.createElement("h1", null, "Example Plugin"),
      React.createElement("p", null, "Example dashboard plugin is installed and serving assets.")
    );
  }

  registry.register("example", ExampleDashboardPlugin);
})();
