module.exports = {
  runtimeCompiler: true,
  css: {
    loaderOptions: {
      scss: {
        prependData: `
        @import "node_modules/@sebastian-inman-design/scss-bootstrap/variables.scss";
        @import "node_modules/@sebastian-inman-design/scss-bootstrap/functions/logs.scss";
        @import "node_modules/@sebastian-inman-design/scss-bootstrap/functions/helpers.scss";
        @import "node_modules/@sebastian-inman-design/scss-bootstrap/functions/convert.scss";
        @import "node_modules/@sebastian-inman-design/scss-bootstrap/functions/colors.scss";
        @import "node_modules/@sebastian-inman-design/scss-bootstrap/mixins/helpers.scss";
        @import "node_modules/@sebastian-inman-design/scss-bootstrap/mixins/convert.scss";
        @import "node_modules/@sebastian-inman-design/scss-bootstrap/mixins/devices.scss";
        @import "node_modules/@sebastian-inman-design/scss-bootstrap/mixins/events.scss";
        @import "node_modules/@sebastian-inman-design/scss-bootstrap/mixins/transitions.scss";
        @import "node_modules/@sebastian-inman-design/scss-bootstrap/mixins/viewports.scss";
        `
      }
    }
  }
}