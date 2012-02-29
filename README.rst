jquery-guide
============

**jQuery-guide** is jQuery module for displaying pretty nice tips for users.

.. contents::

Requirements
============

- jQuery (tested on 1.6 and 1.7.x versions, but maybe works for 1.4+)

Supported browsers
==================

- Google Chrome
- Firefox
- Opera
- Safari
- IE 8+ (previous IE versions not tested)

Associated projects
===================

- django-guide (https://github.com/frol/django-guide) - Django workaround for configuration guide in django-admin.

Usage
=====

::

    $('#object_with_guide').guide()

This will display guide help text in top left side relative from #object_with_guide.

Settings
========

::

    $('#object_with_guide').guide({ ... settings ... })

Default settings::

    {
        highlightImageName: 'circle', // Image name that specify
        // prefix of file which will be used for arounding object
        // that heed guide.
        arrowImageName: 'arrow', // Image name that specify prefix
        // of file which will point (arrowed) to the object that
        // need guide.
        imagesPath: '/img/', // Images path prefix.
        verticalPosition: 'top', // Where will be displayed help text
        // (vertical positioning - 'top' or 'bottom').
        horizontalPosition: 'left', // Where will be displayed help
        // text (horizontal positioning - 'left' or 'right').
        arrowDimensions: {width: 80, height: 80}, // Size of arrow image.
        helptextDimensions: null, // Size of help text block {width, height}
        helptextOffset: null, // Offset of help text.
        // {left/right: <number>, top/bottom: <number>}
        visible: true, // You may create hidden guide by default
        // and show it after button click.
        text: null, // Specify help text, if null will be used 'title'
        // attribute.
        extra_id: null // You may specify extra_id for example for
        // AJAX request with id of clicked guide instance.
     };


Contributing
============

Development of jquery-guide happens at github: https://github.com/frol/jquery-guide

This module used in production at https://escalibro.com

License
=======

Copyright (C) 2011-2012 Vladyslav Frolov & Ilya Polosukhin
This program is licensed under the MIT License (see LICENSE)
