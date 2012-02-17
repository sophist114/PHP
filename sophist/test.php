<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

        <title>Test</title>
        <script type="text/javascript" src="core/js/FusionCharts.js"></script>
		<script type="text/javascript" language="Javascript" src="core/js/jquery-1.4.2.min.js"></script>
		<script type="text/javascript" language="Javascript" src="core/js/lib.js"></script>
        <link href="core/css/style.css" rel="stylesheet" type="text/css" />
		
        <style type="text/css">
            h2.headline {
                font: normal 110%/137.5% "Trebuchet MS", Arial, Helvetica, sans-serif;
                padding: 0;
                margin: 25px 0 25px 0;
                color: #7d7c8b;
                text-align: center;
            }
            p.small {
                font: normal 68.75%/150% Verdana, Geneva, sans-serif;
                color: #919191;
                padding: 0;
                margin: 0 auto;
                width: 664px;
                text-align: center;
            }
        </style>
    </head>
    <body>
		<div id='header'>
		<a href='index.php'>Home</a> <a href='test.php'>Column3D</a> <a
			href='Zoomline3.php'>Zoomline</a>
	</div>
        <div id="wrapper">


            <div class="content-area">
                <div id="content-area-inner-main">
                    <div class="gen-chart-render">
                        <center>
                            <div id="chartContainer">FusionCharts will load here</div>

                            <script type="text/javascript"><!--

                                var myChart = new FusionCharts("core/charts/Column3D.swf", "myChartId", "900", "500", "0", "1");

                                myChart.setJSONData (
                                {
                                    "chart":
                                        {
                                        "caption" : "Weekly Sales Summary" ,
                                        "xAxisName" : "Week",
                                        "yAxisName" : "Sales",
                                        "numberPrefix" : "$"
                                    },

                                    "data" :
                                        [
                                        { "label" : "Week 1", "value" : "14400" },
                                        { "label" : "Week 2", "value" : "19600" },
                                        { "label" : "Week 3", "value" : "24000" },
                                        { "label" : "Week 4", "value" : "15700" }
                                    ]
                                }
                            );

                                myChart.render("chartContainer");

                                // -->
                            </script>
                        </center>

                    </div>
                    <div class="clear"></div>
                    <p>&nbsp;</p>
                    <p class="small">    </p>
                    <div class="underline-dull"></div>
                </div>
            </div>
        </div>
		 <script type="text/javascript"><!--//
			$(document).ready ( function() {
			   showConditionalMessage( "Your browser does not seem to have Flash Player support. JavaScript chart is rendered instead.", isJSRenderer(myChart) );
			});	
		// -->
		</script>
    </body>
</html>
