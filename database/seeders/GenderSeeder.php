<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Gender;

class GenderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Gender::insert([
            [
                'id' => 1,
                'gender' => 'Hombre',
                'created_at' => now(),
            ],
            [
                'id' => 2,
                'gender' => 'Mujer',
                'created_at' => now(),
            ],
            [
                'id' => 3,
                'gender' => 'Prefiero no decirlo',
                'created_at' => now(),
            ],
        ]);
    }
}
