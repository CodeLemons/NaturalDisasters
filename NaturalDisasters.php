<?php
class NaturalDisasters
{
	public $Entity;
	public $Year;
	public $Deaths;


	public function __construct($entity, $year, $deaths)
	{
		$this->Entity = $entity;
		$this->Year = $year;
		$this->Deaths = $deaths;

	}

	public function getEntity()
	{
		return $this->Entity;
	}

	public function getYear()
	{
		return $this->Year;
	}

	public function getDeaths()
	{
		return $this->Deaths;
	}

}
?>
