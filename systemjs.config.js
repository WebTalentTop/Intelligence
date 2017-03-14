(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/',
      'shufflejs': 'node_modules/shufflejs/dist/shuffle.js'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'app',
      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
      '@ng-bootstrap/ng-bootstrap': 'node_modules/@ng-bootstrap/ng-bootstrap/bundles/ng-bootstrap.js',
      '@angular/material': 'npm:@angular/material/bundles/material.umd.js',
      '@covalent/core': 'npm:@covalent/core/index.js',
      'd3-array': 'https://npmcdn.com/d3-array',
      'd3-brush': 'https://npmcdn.com/d3-brush',
      'd3-shape': 'https://npmcdn.com/d3-shape',
      'd3-selection': 'https://npmcdn.com/d3-selection',
      'd3-color': 'https://npmcdn.com/d3-color',
      'd3-drag': 'https://npmcdn.com/d3-drag',
      'd3-transition': 'https://npmcdn.com/d3-transition',
      'd3-format': 'https://npmcdn.com/d3-format',
      'd3-force': 'https://npmcdn.com/d3-force',
      'd3-dispatch': 'https://npmcdn.com/d3-dispatch',
      'd3-path': 'https://npmcdn.com/d3-path',
      'd3-ease': 'https://npmcdn.com/d3-ease',
      'd3-timer': 'https://npmcdn.com/d3-timer',
      'd3-quadtree': 'https://npmcdn.com/d3-quadtree',
      'd3-interpolate': 'https://npmcdn.com/d3-interpolate',
      'd3-scale': 'https://npmcdn.com/d3-scale',
      'd3-time': 'https://npmcdn.com/d3-time',
      'd3-collection': 'https://npmcdn.com/d3-collection',
      'd3-time-format': 'https://npmcdn.com/d3-time-format',
      'd3-hierarchy': 'https://npmcdn.com/d3-hierarchy',
      // '@angular/flex-layout': 'npm:@angular/flex-layout/bundles/flex-layout.umd.js',

      // other libraries
      'rxjs': 'npm:rxjs',
      'ng2-bootstrap': 'npm:ng2-bootstrap/bundles/ng2-bootstrap.umd.js',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
      // 'primeng': 'node_modules/primeng'
    },

    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: { main: './main.js', defaultExtension: 'js' },
      rxjs: { defaultExtension: 'js' }
      
      // 'primeng': { defaultExtension: 'js' }
    }
  });
})(this);
