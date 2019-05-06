# ngx-autofocus-directive

The html `autofocus` attribute is a handy way to set the focus. The problem is, that it works only the first time when an element is shown and that's normally not, what we expect in SPAs. This small directive sets the focus everytime the element is shown.

## Installation

`npm install --save @40three/ngx-autofocus-directive`

## Add Module

Import the module in every angular module that declares components using elements containing an `autofocus` attribute.

    @NgModule({
       imports: [
         FtAutofocusModule,
       ]
    })
    
## Usage

    <input type="text" autofocus />
    
    <input type="text [attr.autofocus]="autofocusEnabled" />
    <!-- every not null value, will add the autofocus attribute -->
    
    <input type="text" [autofocus]="autofocusEnabled" />
    
