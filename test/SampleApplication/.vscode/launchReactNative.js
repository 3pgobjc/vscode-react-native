// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT license. See LICENSE file in the project root for details.

// This file is automatically generated. version:0.0.1
try {
    var path = require("path");
    var Launcher = require("../../../out/debugger/launcher.js").Launcher;
    new Launcher(path.resolve(__dirname, "..")).launch();
}
catch (e) {
    throw new Error("Unable to launch application. Try deleting .vscode/launchReactNative.js and restarting vscode.");
}
