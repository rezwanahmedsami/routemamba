<!DOCTYPE html>
<html lang="en">
<head>
   <meta>
      <?php
         $route = basename($_SERVER['PHP_SELF']);
         switch ($route) {
            case 'index.php':
               $title = 'Home';
               break;
            case 'about.php':
                  $title = 'About';
               break;
            case 'privacy.php':
               $title = 'Privacy';
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
   <script src="../../routemamba.min.js"></script>
   
</head>
<body>
   <div class="header">
      <button id="back">Back</button>
      <button id="next">Next</button>
      <button id="home">Home</button>
      <button id="about">about</button>
      <button id="privacy">privacy</button>
      <hr>
   </div>
