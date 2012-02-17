<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
 <head>
        <title>ZoomLine Chart</title>
        <link href="core/css/style.css" rel="stylesheet" type="text/css" />
                 
        <link href="core/css/prettify.css" rel="stylesheet" type="text/css" />
        <script type="text/javascript" src="core/js/FusionCharts.js"></script>
        <script type="text/javascript" language="Javascript" src="core/js/jquery-1.4.2.min.js"></script>
		<script type="text/javascript" language="Javascript" src="core/js/lib1.js"></script>
		<script type="text/javascript" language="Javascript" src="core/js/json2.js"></script>
		<script type="text/javascript" language="Javascript" src="core/js/prettify.js"></script>
    </head>   

<body>
	<div id='header'>
		<a href='index.php'>Home</a> <a href='test.php'>Column3D</a> <a
			href='Zoomline3.php'>Zoomline</a>
	</div>
	
        <script type="text/javascript" src="core/js/ZoomLine3.js" ></script>
        
        <div id="chartdiv" align="center">Chart will load here</div>
        <script type="text/javascript">
            FusionCharts.setCurrentRenderer(GALLERY_RENDERER);
            var chart = new FusionCharts("core/charts/ZoomLine.swf", "ChartId", "560", "400", "0", "0");
		   chart.setXMLData( dataString );		   
		   chart.render("chartdiv");
		</script>
		 
     </body>
 </html>