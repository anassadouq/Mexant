<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class StagiaireFactory extends Factory
{

    public function definition()
    {
        return [
            'name' =>fake()->name()
        ];
    }
}