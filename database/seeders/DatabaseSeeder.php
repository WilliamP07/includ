<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        $this->call([
            RoleSeeder::class,
            UserSeeder::class,
            DepartmentSeeder::class,
            GenderSeeder::class,
            InterestSeeder::class,
            ZoneSeeder::class,
            EmotionSeeder::class,
            EmotionTipsSeeder::class,
            DirectorySeeder::class,
            SponsorSeeder::class,
        ]);
    }
}
