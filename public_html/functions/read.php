<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');

// data must be returned as JSON
//http://blog.teamtreehouse.com/beginners-guide-to-ajax-development-with-php
header("content-type:application/json");

// Get the values passed from calling page
if(isset($_POST['readFile'])) {
	$readFile = $_POST['readFile'];
}
else {
	echo "NO POST";
}

if(!empty($readFile)) {
	
	//filename
	$fileName = '../' . $readFile . '.txt';
		
	//open the file
	if (!$handle = fopen($fileName, 'r')) {
		echo "Cannot open file ($fileName)";
		exit;
	}
	
	//get current value of file
	$current_count = fread($handle, filesize($fileName));
	
	//counts: array
	$return[$readFile] = $current_count;
	
	echo json_encode($return);
	flush();
	ob_flush();
	ob_clean();
	
	fclose($handle);

}

?>