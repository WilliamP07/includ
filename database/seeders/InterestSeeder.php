<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Interest;

class InterestSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Interest::insert([
            [
                'id' => 1,
                'interest' => 'Mi sexualidad',
                'status' => 1,
                'created_at' => now(),
            ],
            [
                'id' => 2,
                'interest' => 'Salud integral',
                'status' => 1,
                'created_at' => now(),
            ],
            [
                'id' => 4,
                'interest' => 'Inteligencia emocional',
                'status' => 1,
                'created_at' => now(),
            ],
            [
                'id' => 5,
                'interest' => 'Jovenes',
                'status' => 1,
                'created_at' => now(),
            ],
            [
                'id' => 6,
                'interest' => 'Embarazo',
                'status' => 1,
                'created_at' => now(),
            ],
            [
                'id' => 7,
                'interest' => 'Anticonceptivos',
                'status' => 1,
                'created_at' => now(),
            ],
            [
                'id' => 8,
                'interest' => 'Prevención de violencia',
                'status' => 1,
                'created_at' => now(),
            ],
        ]);
    }
}
