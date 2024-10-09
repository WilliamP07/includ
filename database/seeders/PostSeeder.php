<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

use App\Models\Post;

class PostSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Post::insert([
            [
                "id" => 1,
                "title" => "50 Creative Christmas Tree Ideas",
                "description" => "Just because Christmas is a holiday filled with traditions doesn't mean your holiday decorations have to be traditional.",
                "user" => "Tommy Santiago",
                "image" => "https://cdn.vuetifyjs.com/images/cards/cooking.png",
            ],
            [
                "id" => 2,
                "title" => "Halloween Decoration Ideas",
                "description" => "Holiday decorations have to be traditional. Yes, people everywhere are finding new creative ways to deck their halls",
                "user" => "John Smith",
                "image" => "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
            ],
        ]);
    }
}
