<?php
   if (isset($_GET['route'])) {
      echo $_GET["route"];
      switch ($_GET['route']) {
         case '/example/index.php':
            $title = 'Home';
            break;
         case '/example/about.php':
               $title = 'About';
            break;
         case '/example/privacy.php':
            $title = 'Privacy';
            break;
         case '/example/tabs-example.php':
            $title = 'Tabs example';
            break;
         default:
         $title = 'Home';
         break;
      }
   }
?>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title><?php echo $title; ?></title>