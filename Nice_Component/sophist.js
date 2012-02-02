/*calculate the days, weeks and months by sophist start */
// function get days, weeks, months : input a date string like '2011-01-23', then will get a date or week or month value from it according to a certain rule that is specified in this piece of code.

var sophist = {
	config : {
		'Weekly' : 'weeks',
		'Monthly':'months',
		'Daily':'days'
	},
	getDWM : function (){
		var startOnDateObj = parent.document.getElementById('startOnDate');
		var startOnDate = (startOnDateObj.value == '') ? '88'  : startOnDateObj.value;
		var osOD = new Date(stringToTimeStamp(startOnDate));
		function getLastSunday(){
			var dif, d = osOD; 
			dif = (d.getDay() + 7) % 7;
			x = new Date(d - dif * 24*60*60*1000);
			x.setHours(0);
			x.setMinutes(0);
			x.setSeconds(0);
			return x;
		} 
		function getLastDayPrevMonth() {
			var x = osOD;
			x.setMonth(x.getMonth() - 1);
			x.setDate(daysInMonth(x.getMonth(),x.getYear()));
			x.setHours(0);
			x.setMinutes(0);
			x.setSeconds(0);
			return x;
		}
		function daysInMonth(iMonth, iYear)
		{
			return 32 - new Date(iYear, iMonth, 32).getDate();
		}
		function calDateRange(startOnDate) {
			if(typeof(startOnDate)=='number'){
				return startOnDate;
			}
			var curTime = new Date().getTime();
			var startOn = stringToTimeStamp(startOnDate);
			var range = curTime - startOn;
			var days = 90 - Math.floor(range/(1000*60*60*24));
			return days;
		}
		function calDateRange_Weekly() {
			var curTime = new Date();
			var startOn = getLastSunday().getTime();
			var range = curTime - startOn;
			var days = 90 - Math.floor(range/(1000*60*60*24));
			if((days % 7)){
				return Math.floor(days/7);
			}else{
				return Math.ceil(days/7);
			}
		}
		function calDateRange_Monthly() {
			var curTime = new Date();
			var startOn = getLastDayPrevMonth();
			var range = curTime - startOn;
			var days = 90 - Math.floor(range/(1000*60*60*24));
			var dateleft1 = daysInMonth(osOD.getMonth()-1, osOD.getYear()); 
			var dateleft2 = daysInMonth(osOD.getMonth()-2, osOD.getYear());
			var month = Math.ceil(days/30);
				return month - 1;
		}
		var days = calDateRange(startOnDate) + 1;
		var weeks = calDateRange_Weekly();
		var months = calDateRange_Monthly();
		days = (days > 62 ) ? 62 : days;
		weeks = (weeks > 8 ) ? 8 : weeks;
		months = (months > 2 ) ? 2 : months;
		var rs = {
			'days' : days,
			'weeks' : weeks,
			'months' : months
		};
		return rs;
	},
	getOptDateUnits: function () {
		v = this.allowedFrequency();
		var day = {name:"days",value:"days",disable:false,selected:false};
		var month = {name:"months",value:"months",disable:false,selected:false};
		var week = {name:"weeks",value:"weeks",disable:false,selected:false};
		if(v=='Monthly'){
			if(document.getElementById('dropdownFrequency').children[0].innerHTML=="Weekly"){
				opt = [day,week];
			}else if(document.getElementById('dropdownFrequency').children[0].innerHTML=="Daily") {
				opt = [day];
			}else{
				opt = [
					day,month
				];
			}
		}else if(v=='Weekly'){
			if(document.getElementById('dropdownFrequency').children[0].innerHTML=="Daily" || document.getElementById('dropdownFrequency').children[0].innerHTML=="Monthly"){
				opt = [day];
			}else{
				opt = [
					day,week
				];
			}
		}else{
			opt = [day];
		}
		return opt;
	},
	getOptDateValues : function () {
		var opt = [];
		var unit = $.trim($('#popPickerIframe').contents().find("div#vDateUnit").text());
		var rs = this.getDWM();
		for(var i=1;i<=rs[unit];i++){
			opt.push({name:i,value:i,disable:false,selected:false});
		}
		return opt;
	},
	allowedFrequency : function () {
		var rs = parent.sophist.getDWM();
		var d = rs.days;
		var w = rs.weeks;
		var m = rs.months;
		var v = '';
		var opt = [];
		if(d<=7 || (d>7 && w<1)){
			v = 'Daily';
		}else if( d >= 7 && w >= 1 && m < 1){
			v = 'Weekly';
		}else{
			v = 'Monthly';
		}
		return v;
	},
	startOnDateOnChange : function () {
		var maxd = sophist.getDWM().days;
		$('span#dateRange span.values.hand').each(function (index) {
			l($(this).children('span#u'));
			$(this).children('span#u').text('days');
			$(this).children('span#v').text(maxd);
		});
		
		/*
		$('span.values.hand span#v').each(function (index) {
			l($(this));
			if(parseInt($(this).text()) > maxd){
				$(this).text(String(maxd));
			}
		});
			$(this).text() = '&ltDate Range&gt';
		l(document.getElementById('v'));
		l($('#v')[0].innerHTML);
		var obj = document.getElementsByClassName('values hand')[3]; 
		if(typeof(obj) != 'undefined'){
			var rm = document.getElementsByClassName('label'); 
			if(rm.length > 0){
				obj.parentNode.removeChild(rm[0]);
			}  
			obj.innerHTML='&ltDate Range&gt';
		}
		*/
	},
	enableApply : function () {
		var obj = $('#popPickerIframe').contents().find("button#btnApplyCriteria-button");
		obj.removeAttr("disabled");
		obj.removeAttr("style");
	},
	disableApply : function () {
		var obj = $('#popPickerIframe').contents().find("button#btnApplyCriteria-button");
		obj.attr("disabled", "disabled");
		obj.css("color","lightgrey");		
	},
	toggleOptions : function () {
		$('#popPickerIframe').contents().find('body').mouseover(function (){
		/*
			$('div#dateUnits_items').fadeOut().delay(1000);
			$('div#dateValues_items').fadeOut().delay(1000);
		$('div#dateUnits_items').mouseout(function () {
			l($(this));
			$(this).fadeOut().delay(1000);
		});
		$('div#dateValues_items').mouseout(function () {
			$(this).fadeOut().delay(1000);
		});
		$('div#dateUnits_items').mouseover(function () {
			$(this).fadeIn().delay(1000);
		});
		$('div#dateValues_items').mouseover(function () {
			$(this).fadeIn().delay(1000);
		});
		*/
		});
	}
};