<?php
    $vn_arr = file("zh_utf8.txt");
    for ($i = count($vn_arr) - 1; $i >= 0 ; $i--) { 
        echo "$vn_arr[$i]<br/>";
    }
    // echo "Hello World!";
?>