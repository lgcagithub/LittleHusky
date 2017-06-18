<?php
    $vn_arr = file("vn_utf8.txt");
    $json_str = json_encode($vn_arr);
    echo $json_str;
?>