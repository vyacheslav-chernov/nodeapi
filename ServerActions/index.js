import VersionAction from "./versionapi";

let store = {
  version: "0.0.1"
}

export default [ ...VersionAction(store) ] ;
