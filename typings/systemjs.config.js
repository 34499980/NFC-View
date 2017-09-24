System.config({
path: {
    'npm' : 'node_module/' 
},
map:{
    app: 'app',
    '@angular/core' : 'npm: @angular/core/bundles/core.umd.js',
    '@angular/common' : 'npm: @angular/common/bundles/common.umd.js',
    '@angular/compiler' : 'npm: @angular/compiler/bundles/compiler.umd.js',
    '@angular/plataform-browser' : 'npm: @angular/plataform-browser/bundles/plataform-browser.umd.js',
    '@angular/plataform-browser-dynamic' : 'npm: @angular/plataform-browser-dynamic/bundles/plataform-browser-dynamic.umd.js',
    '@angular/http' : 'npm: @angular/http/bundles/http.umd.js',
    '@angular/router' : 'npm: @angular/router/bundles/router.umd.js',
    '@angular/forms' : 'npm: @angular/forms/bundles/forms.umd.js',
    'rxjs': 'npm:rxjs',
    'nfc-view': 'npm:nfc-view'
  

},
packages:{
    app:{
        main:'./main.js',
        defaultExtension: 'js'
    },
    rxjs:{
        defaultExtension: 'js'
    },
    'nfc-view':{
        main: './index.js',
        defaultExtension: 'js'
    }
}
})(this);