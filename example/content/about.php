<?php
$id = "no id availabel";
if (isset($_GET["id"])) {
    $id = $_GET["id"];
}
?>

<h1 style="color: green;">This about path. id: <?php echo $id; ?><br>
name: <?php echo $_GET["name"]; ?>
</h1>
