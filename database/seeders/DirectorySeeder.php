<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Directory;

class DirectorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Directory::insert([
            [
                'id' => 1,
                'name' => 'Dr. Carranza',
                'phone' => '6677-8899',
                'address' => 'Bo. La Merced, san miguel',
                'zone_id' => 2,
                'status' => 1,
                'created_at' => now(),
            ],
        ]);
    }
}
