<?php
    require "dbinfo.php";
    require "RestService.php";
    require "NaturalDisasters.php";


    class NaturalDisastersRestService extends RestService
    {
      private $disasters;

      public function __construct()
      {
        parent::__construct("disasters");
      }

      public function performGet($url, $parameters, $requestBody, $accept)
    	{
    		switch (count($parameters))
    		{
    			case 1:
    				// Note that we need to specify that we are sending JSON back or
    				// the default will be used (which is text/html).
    				header('Content-Type: application/json; charset=utf-8');
    				// This header is needed to stop IE cacheing the results of the GET
    				header('no-cache,no-store');
    				$this->getAllDisasters();
    				echo json_encode($this->disasters);
    				break;


    			default:
    				$this->methodNotAllowedResponse();
    		}
    	}

      public function performPost($url, $parameters, $requestBody, $accept)
      {
        global $dbserver, $dbusername, $dbpassword, $dbdatabase;

        $newDisasters = $this->extractDisastersFromJSON($requestBody);
        $connection = new mysqli($dbserver, $dbusername, $dbpassword, $dbdatabase);
        if (!$connection->connect_error)
        {
          $sql = "insert into naturaldisasters (entity, year, deaths) values (?, ?, ?)";
          // We pull the fields of the book into local variables since
          // the parameters to bind_param are passed by reference.
          $statement = $connection->prepare($sql);
          $entity = $newDisasters->getEntity();
          $year = $newDisasters->getYear();
          $deaths = $newDisasters->getDeaths();
          $statement->bind_param('sssssd', $entity, $year, $deaths);
          $result = $statement->execute();
          if ($result == FALSE)
          {
            $errorMessage = $statement->error;
          }
          $statement->close();
          $connection->close();
          if ($result == TRUE)
          {
            // We need to return the status as 204 (no content) rather than 200 (OK) since
            // we are not returning any data
            $this->noContentResponse();
          }
          else
          {
            $this->errorResponse($errorMessage);
          }
        }
      }

      public function performPut($url, $parameters, $requestBody, $accept)
    	{
    		global $dbserver, $dbusername, $dbpassword, $dbdatabase;

    		$newDisasters = $this->extractDisastersFromJSON($requestBody);
    		$connection = new mysqli($dbserver, $dbusername, $dbpassword, $dbdatabase);
    		if (!$connection->connect_error)
    		{
    			$sql = "update naturaldisasters set Entity = ?, Year = ?, Deaths = ? where Entity = ?";
    			// We pull the fields of the book into local variables since
    			// the parameters to bind_param are passed by reference.
    			$statement = $connection->prepare($sql);
          $entity = $newDisasters->getEntity();
          $year = $newDisasters->getYear();
          $deaths = $newDisasters->getDeaths();
    			$statement->bind_param('sssssd',  $entity, $year, $deaths);
    			$result = $statement->execute();
    			if ($result == FALSE)
    			{
    				$errorMessage = $statement->error;
    			}
    			$statement->close();
    			$connection->close();
    			if ($result == TRUE)
    			{
    				// We need to return the status as 204 (no content) rather than 200 (OK) since
    				// we are not returning any data
    				$this->noContentResponse();
    			}
    			else
    			{
    				$this->errorResponse($errorMessage);
    			}
    		}
    	}

      public function performDelete($url, $parameters, $requestBody, $accept)
      {
      global $dbserver, $dbusername, $dbpassword, $dbdatabase;

      if (count($parameters) == 2)
      {
        $connection = new mysqli($dbserver, $dbusername, $dbpassword, $dbdatabase);
        if(!$connection->connect_error)
          {
            $id = $parameters[1];
            $sql = "delete from naturaldisasters where Entity = ?";
            $statement = $connection->prepare($sql);
            $statement->bind_param('i', $id);
            $result = $statement->execute();
            if($result == FALSE)
            {
              $errorMessage = $statement->error;
            }
            $statement->close();
            $connection->close();
            if ($result == TRUE)
            {
              $this->noContentResponse();
            }
            else
            {
              $this->errorResponse($errorMessage);
            }

          }
      }
      }

      private function getAllDisasters()
      {
      global $dbserver, $dbusername, $dbpassword, $dbdatabase;

      $connection = new mysqli($dbserver, $dbusername, $dbpassword, $dbdatabase);
      if (!$connection->connect_error)
      {
        $query = "select entity, year, deaths from naturaldisasters";
        if ($result = $connection->query($query))
        {
          while ($row = $result->fetch_assoc())
          {
            $this->disasters[] = new naturaldisasters($row["entity"], $row["year"], $row["deaths"]);
          }
          $result->close();
        }
        $connection->close();
      }

}
      private function extractDisastersFromJSON($requestBody)
      {
  		// This function is needed because of the perculiar way json_decode works.
  		// By default, it will decode an object into a object of type stdClass.  There is no
  		// way in PHP of casting a stdClass object to another object type.  So we use the
  		// approach of decoding the JSON into an associative array (that's what the second
  		// parameter set to true means in the call to json_decode). Then we create a new
  		// Book object using the elements of the associative array.  Note that we are not
  		// doing any error checking here to ensure that all of the items needed to create a new
  		// book object are provided in the JSON - we really should be.
  		$disastersArray = json_decode($requestBody, true);
  		$disasters = new OtherSpecies($disastersArray['Entity'],
  									$disastersArray['Year'],
  									$disastersArray['Deaths']);

  		unset($disastersArray);
  		return $disasters;
  	}


    }
