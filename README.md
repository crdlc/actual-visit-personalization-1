# Actual Visit Personalization

Actual Visit Personalization

# Configuration

This repository holds files that must be loaded on the Opentok Generic WebConferencing app. Since the app allows configuring a set of CSSs, locales, and scripts/plugins per project, whenever on the following sections the terms 'the project configuration needs to load' are used means that the project created on the OpenTok Generic WebConferencing must use those files.

Also, since it's expected that the files on this repository will be hosted by the customer at a of his choice, on the following sections the term BASE_URL is used to represent the URL where those files are made available. For example, if the files are made available under https://someserver.com/conference then the look and feel CSS will be available at https://someserver.com/conference/css/actual.visit.css

Whenever a configuration file below is specified as a partial path (just /css/whatever instead of BASE_URL/css/whatever for example) it means it's a file included on the OpenTok WebConferencing distribution and as such it can be loaded without specifying the complete URL.

### Look and feel
The project configuration needs to load the following file to change the appearance of the conferencing window:

* BASE_URL/css/actual.visit.css

### Plugins
The project configuration needs to load the following files, that change the behavior of the conferencing window:

* /js/plugins/desktop_notifications.js
 * This plugin adds desktop notifications to owner's waiting room.

### Locales
The project configuration needs to load the following files:

* /l10n/desktop.notifications.ini
 * It adds some strings for desktop notifications.
