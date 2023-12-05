<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class PostFactory extends Factory
{

    public function definition()
    {
        return [
            'textPost' => fake()->realText(),
            'user_id' => User::all()->random(),
        ];
    }
}
