# green-spirit
Workout single page

Create folders and main files as needed:

Css
Img
Js
Sass
Abstract
_functions.scss
_mixins.scss
_variables.scss
Base
_animations.scss
_base.scss
_typography.scss
_utilities.scss
Components
_button.scss
_card.scss
_form.scss
_sidebar.scss
_popup.scss
Layout
_footer.scss
_header.scss
_grid.scss
_navigation.scss
Pages
_home.scss
_about.scss
_contact.scss
main.scss
Index.html


Browse folder in VSC, open a terminal and type:

“npm init”
“npm install node-sass --save-dev”
“npm install concat --save-dev”
“npm install autoprefixer --save-dev”

“npm install -g npm-run-all”
“npm install -g live-server”



Open the package.jason file and update the scripts as necessary:

"scripts": {
    "watch:sass": "node-sass sass/main.scss css/style.css -w",
    "devserver": "live-server",
    "start": "npm-run-all --parallel devserver watch:sass",
    
    "compile:sass": "node-sass sass/main.scss css/style.comp.css",
    "concat:css": "concat -o css/style.concat.css css/icon-font.css css/style.comp.css",
    "prefix:css": "postcss --use autoprefixer -b \"last 10 versions\" css/style.concat.css -o css/style.prefix.css",
    "compress:css": "node-sass css/style.prefix.css css/style.css --output-style compressed",
    "build:css": "npm-run-all compile:sass concat:css prefix:css compress:css"
  }

In the main.scss file import all other scss files, for example:

@import "abstracts/functions";
@import "abstracts/mixins";
@import "abstracts/variables";
 
@import "base/animations";
@import "base/base";
@import "base/typography";
@import "base/utilities";
 
@import "components/bg-video";
@import "components/button";
@import "components/composition";
@import "components/feature-box";
@import "components/card";
@import "components/story";
@import "components/form";
@import "components/popup";
 
 
@import "layout/grid";
@import "layout/header";
@import "layout/footer";
@import "layout/navigation";
 
@import "pages/home";

