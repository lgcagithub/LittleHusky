<?php
    $zh_arr = file("zh_utf8.txt");
    $json_str = json_encode($zh_arr);
    echo $json_str;
?>