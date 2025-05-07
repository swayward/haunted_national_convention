<?php

// data must be returned as JSON
//http://blog.teamtreehouse.com/beginners-guide-to-ajax-development-with-php
header("content-type:application/json");

// Get the values passed from calling page
if(isset($_POST['readFile'])) {
	$readFile = $_POST['readFile'];
}
else {
	$readFile = '';
}

if(!empty($readFile)) {
	
	//filename
	$fileName = '../' . $readFile . '.txt';

	//open the file and overwrite
	if (!$handle = fopen($fileName, 'r')) {
		echo "Cannot open file ($fileName)";
		exit;
	}

	//get current value of file
	$current_count = fread($handle, filesize($fileName));
	//echo '<br>current count ' . $current_count;
	fclose($handle);
	
	
	//open the file and overwrite
	if (!$handle = fopen($fileName, 'w')) {
		echo "Cannot open file ($fileName)";
		exit;
	}
	
	//update count
	$current_count++;
	
	//echo '<br>new count ' . $current_count;
	
	//write to file
	if(fwrite($handle, $current_count) === FALSE) {
		echo json_encode('ERROR Writing new count to ' . $fileName);
		exit;
	}
	
	//counts: array
	$return[$readFile] = $current_count;
	
	echo json_encode($return);
	flush();
	ob_flush();
	ob_clean();
	
	fclose($handle);

}


?>