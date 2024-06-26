# APEX Interactive Grid - Treegrid Enhancement
This repository contains the files for the APEX Interactive Grid Treegrid Enhancement APEX Dynamic Action Plug-in.

Minimum requirement: Oracle Application Expresss 19.1

This plug-in uses a modified version of the <a href="https://rstacruz.github.io/nprogress/](https://maxazan.github.io/jquery-treegrid/" rel="nofollow">Maxazan Treegrid</a> JQuery library.

# setup

You can check each setup in my downloadable <a href="https://github.com/baldogiRichard/plug-in-site" rel="nofollow">Sample Application: APEX Plug-ins by Richard Baldogi</a>

In order to initialize the plug-in correctly you will need to define two Dynamic Action events:
<br>
<ul>
  <li>Page Load: When the Interactive Grid is rendered towards the browser the treegrid must be initialized as well.</li>
  <li>Change: If the Interactive Grid changes in some way (e.g. Pagination, Filtering and so on....) then the tree must be reinitilazed in the same way as in the Page Load event.</li>
</ul>


#

License MIT
