<script type="text/javascript" src="./uploadify/jquery-1.4.2.min.js"></script>
<script type="text/javascript" src="./uploadify/swfobject.js"></script>
<script type="text/javascript" src="./uploadify/jquery.uploadify.v2.1.4.min.js"></script>
<script type="text/javascript">
// <![CDATA[
$(document).ready(function() {
  $('#file_upload').uploadify({
	'uploader'  : './uploadify/uploadify.swf',
	'script'    : './uploadify/uploadify.php',
	'cancelImg' : './uploadify/cancel.png',
	'folder'    : './uploads',
	'auto'      : true
  });
});
// ]]>
</script>
<input id="file_upload" type="file" name="file_upload" />

