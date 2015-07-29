<html>

<head>

<script src="../../js/jquery/jquery-1.11.0.min.js"></script>

</head>

<body>

Click below to see a work in progress...

<ul class="urlList">

    <li>
        <a href="../">
            Go home DEV, you're drunk!
        </a>
    </li>
    
</ul>


<script>

var directoryList = [];

<?php

$dirs = array_filter(glob('*'), 'is_dir');
//print_r( $dirs);
foreach ($dirs as $value) {
    echo "directoryList.push('" . $value . "');";
}

?>

var directoryCount = directoryList.length - 1;

for(var x = 0; x <= directoryCount; x++){
    $(".urlList").append("<li> \n <a href='" + directoryList[x] + "'>" + directoryList[x] + "</a> \n </li>");
}

</script>


</body>

</html>