/**
 * @license
 *
 * docsify-plugin-footer/plugin.js REL_VER_NUMBER
 * (https://github.com/Sujaykumarh/docsify-plugin-footer/)
 *
 * Copyright (c) 2021 Sujaykumar.Hublikar <hello@sujaykumarh.com>
 * Github (@sujaykumarh)
 *
 * Licensed under Apache License, Version 2.0
 */


/**
 * @preserve
 *
 * generates footer
 *
 *             |      content here
 *             |      ....
 *     sidebar |      ....
 *             |
 *             |      ___________________________________________________________________
 *             |
 *             |      copyright (c) 2021 copyrightOwner.              Powered by docsify.
 *             |      [---copyrightExtra---]
 */

// javascript policy
'use strict';

// config options
const customPageFooterOptions = {
	debug:		false,              // for debugging

    showPoweredBy:  true,           // should show powered by docsify at right
    copyrightYear:  '',             // show copyright year, default current year.
    showCopyright: true,            // set to false to hide default copyright
    copyright: undefined,           // set this to html string to use custom copyrihgt section
    copyrightOwnerName: '',         // copyright owner name
    copyrightOwnerLink: undefined,  // copyright owner link if any
    copyrightExtra: undefined,      // any exta text to show below copyright owner section
}

const _storageKeyFooter = 'custom-footer';

// footer generator
function buildFooter() {
    var footer = '';

    // PoweredBy secion
    if(customPageFooterOptions.showPoweredBy){
        footer += '<span class="powered-by">Powered by <a href="https://github.com/docsifyjs/docsify" target="_blank">docsify</a>.</span>';
    }

    // Copyright section
    if(customPageFooterOptions.showCopyright && ! customPageFooterOptions.copyright){
        footer += '<span class="copyright">&copy; ';

        // year
        footer += (customPageFooterOptions.copyrightYear) ? customPageFooterOptions.copyrightYear : new Date().getFullYear();

        // owner
        if(!customPageFooterOptions.copyrightOwnerLink){
            footer += customPageFooterOptions.copyrightOwnerName + '.';
        }else{
            footer += '<a href="' + customPageFooterOptions.copyrightOwnerLink + '" target="_blank">' + customPageFooterOptions.copyrightOwnerName + '</a>.';
        }

        // Copyright Extra
        if(customPageFooterOptions.copyrightExtra){
            footer += '<div class="copyright-extra">';
            footer += customPageFooterOptions.copyrightExtra;
            footer += '</div>'
        }

        footer += '</span>'
    }else{
        footer += customPageFooterOptions.copyright;
    }


    var footer = '<footer id="customFooter">' + footer + '</footer>';
    localStorage.setItem(_storageKeyFooter, footer);

    return footer;
}

// main function
function customPageFooter( hook, vm ) {

	// before hook
	hook.beforeEach( function( content ) {
    });

    // after hook
	hook.doneEach( function() {
        var _footer = document.getElementById('customFooter');
        debug("_footer"); debug(_footer);

        if(! _footer){
            var node = document.getElementById('main').parentNode;
            debug("node"); debug(node);

            var footer = localStorage.getItem(_storageKeyFooter);
            debug("footer"); debug(footer);

            node.innerHTML += ((footer) ? footer : buildFooter());
            debug("added custom footer!");
        }
    });
}

function debug(msg){
    if(customPageFooterOptions.debug) console.log(msg);
}

function error(msg){
    if(customPageFooterOptions.debug) console.error(msg);
}


// find customPageFooter plugin options
window.$docsify.customPageFooter = Object.assign(
	customPageFooterOptions,
	window.$docsify.customPageFooter,
);

// Set docsify plugin
window.$docsify.plugins = [].concat(
	customPageFooter,
	window.$docsify.plugins,
);