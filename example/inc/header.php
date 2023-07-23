<!DOCTYPE html>
<html lang="en">
<head>
   <meta>
      <?php
         $route = $_SERVER['PHP_SELF'];
         switch ($route) {
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
      
   ?>
   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title><?php echo $title; ?></title>
   </meta>
   <!-- <script src="routemamba.min.js"></script> -->
   <script src="../../dist/routemamba.min.js"></script>
   <!-- <script src="../../out/routemamba-depreceted.js"></script> -->
   <!-- <script src="../../src/routemamba.js"></script> -->
   
</head>
<body>
   <div class="header">
      <button id="back">Back</button>
      <button id="next">Next</button>
      <button id="home">Home</button>
      <button id="about">about</button>
      <button id="privacy">privacy</button>
      <button id="tabs-example">Tabs example</button>
      <hr>
   </div>
