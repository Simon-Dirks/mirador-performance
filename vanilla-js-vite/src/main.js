import Mirador from "mirador";
import textOverlayPlugin from "mirador-textoverlay/es/index";
import "./style.css";

const manifestUrl =
  "https://api.digitale-sammlungen.de/iiif/presentation/v2/bsb11163886/manifest";

const config = {
  id: "mirador",
  window: {
    textOverlay: {
      enabled: true,
      selectable: false,
      visible: true,
    },
  },
  windows: [
    {
      manifestId: manifestUrl,
    },
  ],
};

Mirador.viewer(config, [...textOverlayPlugin]);
