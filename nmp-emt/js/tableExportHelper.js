$(function(){
	$('.export_as_csv_button').click(function(){
		if ($(this).hasClass('tat') && $(this).hasClass('server_view'))
	       $('#tatextract_table').tableExport(
	        {
	        	type:'csv',
	        	fileName: 'TATextract_' + $('#extract_date_list').val() + '_' + $('#component_list').val()
	        });
	    else if ($(this).hasClass('tpm_24hour') && $(this).hasClass('server_view'))
	    	$('#TPM_24hour_table').tableExport(
	        {
	        	type:'csv',
	        	fileName: 'TPM24hour_' + $('#extract_date_list').val() + '_' + $('#component_list').val()
	        });
	    else if ($(this).hasClass('tat') && $(this).hasClass('component_view'))
	        $('#tatextract_table').tableExport(
	       	{
	        	type:'csv',
	        	fileName: 'TATextract_' + $('#extract_date_list').val() + '_' + $('#tcserver_list').val()
	        });
	    else if ($(this).hasClass('tpm_24hour') && $(this).hasClass('component_view'))
	        $('#TPM_24hour_table').tableExport(
	        {
	        	type:'csv',
	        	fileName: 'TPM24hour_' + $('#extract_date_list').val() + '_' + $('#tcserver_list').val()
	        });
	    else if ($(this).hasClass('dashboard'))
	        $('#dashboard_table').tableExport(
	        {
	        	type:'csv',
	        	fileName: 'NMP_Dashboard' + $('#dashboard_date_list').val()
	        });
	});//end of .export_as_csv_button click
});//end of $(function)