# APEX Interactive Grid - Treegrid Enhancement
This repository contains the files for the APEX Interactive Grid Treegrid Enhancement APEX Dynamic Action Plug-in.

Minimum requirement: Oracle Application Expresss 19.1

This plug-in uses a modified version of the <a href="https://maxazan.github.io/jquery-treegrid/" rel="nofollow">Maxazan Treegrid</a> JQuery library.

![image](https://github.com/baldogiRichard/apex-treegrid-enhancement-for-ig/assets/100072414/08d25948-f8a5-433d-b95b-0dff3d9116b9)

# setup

You can check each setup in my downloadable <a href="https://github.com/baldogiRichard/plug-in-site" rel="nofollow">Sample Application: APEX Plug-ins by Richard Baldogi</a>

In order to initialize the plug-in correctly you will need to define two Dynamic Action events:
<br>
<ul>
  <li>Page Load: When the Interactive Grid is rendered towards the browser the treegrid must be initialized as well.</li>
  <li>Change: If the Interactive Grid changes in some way (e.g. Pagination, Filtering and so on....) then the tree must be reinitilazed in the same way as in the Page Load event.</li>
</ul>
Attributes:
<br>
<br>
<ul>
  <li>Table Selector: A CSS class selector which determines which table must the treegrid initializer should operate on.</li>
  <li>Row Selector: A CSS class selector which determines which rows must the treegrid initializer should draw the expand/collapse components and events.</li>
  <li>ID Column: The column which identifies the row for the treegrid.</li>
  <li>Parent ID Column: The column which identifies the parentrow for the current row.</li>
  <li>Expand/Collapse: All leaf and child nodes will be shown or hidden in during initialization.</li>
  <li>Display on Column: On which column should be the treegrid displayed.</li>
  <li>Level Column: The depth of the given record. The higher the number the more the given cell will be tabulated.</li>
</ul>
Other notes:
<br>
<br>
<p>Affected Elements: The affected Interactive Grid must be chosen otherwise the plug-in will throw an error.</p>

![image](https://github.com/baldogiRichard/apex-treegrid-enhancement-for-ig/assets/100072414/4d62480c-787d-4aaf-a135-8fbd3afbd2e5)

![image](https://github.com/baldogiRichard/apex-treegrid-enhancement-for-ig/assets/100072414/7fe192bb-5fa4-45d5-bc35-74ef5d98f199)

TODOs:

<ul>
  <li>Icon column: For every row an icon column could be used to display leaf and root nodes with unique icons, so the report would give a visually better lookout for the user.</li>
  <li>Icon color column: Color for the icon like u-color-1.</li>
</ul>

#

License MIT
