<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\Emotion;

class EmotionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Emotion::insert([
            [
                'id' => 1,
                'emotion' => 'Enojo',
                'created_at' => now(),
            ],
            [
                'id' => 2,
                'emotion' => 'Tristeza',
                'created_at' => now(),
            ],
            [
                'id' => 3,
                'emotion' => 'Miedo',
                'created_at' => now(),
            ],
            [
                'id' => 4,
                'emotion' => 'Alegría',
                'created_at' => now(),
            ],
            [
                'id' => 5,
                'emotion' => 'Ansiedad',
                'created_at' => now(),
            ],
            [
                'id' => 6,
                'emotion' => 'Sopresa',
                'created_at' => now(),
            ],
        ]);
    }
}
