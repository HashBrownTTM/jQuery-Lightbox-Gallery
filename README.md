# jQuery Lightbox Gallery

A simple jQuery lightbox gallery which is easy to implement in any web project.

## 1. Demo: 

URL: <https://cwa-jquery-lightbox.netlify.app/>

![lightbox-demo](https://github.com/HashBrownTTM/jQuery-Lightbox-Gallery/assets/93540733/d9fc40f0-5662-4027-ad1f-3dac5f0cf0c9)

## 2. Usage
To use this jQuery script, add the following (or a similar) plugin in your HTML <head> tag

~~~
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
~~~
  
### i. js file (Bundled; jQuery with css in it)

> JS
> *[cwa_lightbox_bundle_v1.js](https://github.com/HashBrownTTM/jQuery-Lightbox-Gallery/blob/main/cwa_lightbox_(jquery%20with%20css)/javascript/cwa_lightbox_bundle_v1.js)* 

Add the following code into your HTML <head> tag:

~~~
<!-- js for lightbox gallery -->
<script src="javascript/cwa_lightbox_bundle_v1.js" defer></script>
~~~

### ii. js file and css file for the lightbox

> JS
> *[cwa_lightbox_v1.js](https://github.com/HashBrownTTM/jQuery-Lightbox-Gallery/blob/main/cwa_lightbox/javascript/cwa_lightbox_v1.js)* 
>
> CSS
> *[cwa_lightbox_css.css](https://github.com/HashBrownTTM/jQuery-Lightbox-Gallery/blob/main/cwa_lightbox/css/cwa_lightbox_css.css)* 

Add the following code into your HTML <head> tag:
  
~~~
<!-- css lightbox gallery -->
<link rel="preload" href="css/cwa_lightbox_css.css" as="style"/> 
<link href ="css/cwa_lightbox_css.css" rel ="stylesheet" type="text/css">

<!-- js for lightbox gallery -->
<script src="javascript/cwa_lightbox_v1.js" defer></script> 
~~~

In the HTML code, add the following code for the image containers

~~~
<a class="cwa-lightbox-image" href="images/image1.png" data-desc="Photo 1">
    <img src="images/thumbnail1.png" alt="" loading="lazy"/>
</a>

<a class="cwa-lightbox-image" href="images/image2.png" data-desc="Photo 2">
    <img src="images/thumbnail2.png" alt="" loading="lazy"/>
</a>
~~~
  
> Note: 
> - the image container <a> tag has to be named "cwa-lightbox-image"
> - the HTML data-* attribute has to be data-desc (this will be for the name/description an image)

  
  

