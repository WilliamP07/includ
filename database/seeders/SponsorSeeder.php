<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Sponsor;

class SponsorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Sponsor::insert([
            [
                'id' => 1,
                'sponsor_name' => 'Patrocinador 1',
                'sponsor_image' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK7jmeJQ_MwgOLoSy80VYVgYlc6Q9q5b-Now&s',
                'sponsor_description' => 'El patrocinador 1 ha sido nuestro patrocinador desde hace más de 10 años para el apoyo...',
                'status' => 1,
                'created_at' => now(),
            ],
        ]);
    }
}
