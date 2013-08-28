$(document).ready(function()
{
	var options = { 
    beforeSend: function() 
    {
    	$("#progress").show();
    	//clear everything
    	$("#bar").width('0%');
    	$("#message").html("");
		$("#percent").html("0%");
    },
    uploadProgress: function(event, position, total, percentComplete) 
    {
    	$("#bar").width(percentComplete+'%');
    	$("#percent").html(percentComplete+'%');
    },
    success: function() 
    {
        $("#bar").width('100%');
    	$("#percent").html('100%');
    },
	complete: function(response) 
	{
		$("#message").html("<input name='named' type='hidden' value='"+response.responseText+"' readonly='readonly'/>");
		$("#imagen").html("<img src='"+response.responseText+"' width='300'/>");
	},
	error: function()
	{
		$("#message").html("<font color='red'> ERROR: unable to upload files</font>");
	}
}; 
     $("#myForm").ajaxForm(options);
});
